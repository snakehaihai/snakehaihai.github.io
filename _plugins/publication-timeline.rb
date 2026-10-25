require 'date'
require 'nokogiri'

module Jekyll
  module PublicationTimeline
    # Zero month/day are sorting sentinels, never displayed as invented dates.
    def publication_date_key(value)
      parts = value.to_s.split('-').map { |part| Integer(part, 10, exception: false) }
      return nil unless (1..3).cover?(parts.length) && parts.all? && parts[0].between?(1900, 2200)
      return nil unless Date.valid_date?(parts[0], parts[1] || 1, parts[2] || 1)

      parts[0] * 10_000 + (parts[1] || 0) * 100 + (parts[2] || 0)
    end

    def chronological_publications(input, timeline)
      fragment = Nokogiri::HTML.fragment(input)
      items = fragment.css('ol.bibliography > li')
      return input if items.empty?

      metadata = (timeline || {}).fetch('entries', {})
      conferences = (timeline || {}).fetch('conferences', {})
      units = {}

      items.each_with_index do |item, index|
        row = item.at_css('.row')
        entry = row&.element_children&.find { |node| node['id'] }
        key = row&.[]('data-publication-key') || entry&.[]('id')
        record = metadata.fetch(key, {})
        citation_year = row&.[]('data-publication-year') || record['citation_year']
        citation_year ||= item.css('.periodical').text.scan(/\b(?:19|20)\d{2}\b/).last
        date = record['date'] || citation_year
        date = citation_year unless publication_date_key(date)
        date_key = publication_date_key(date) || 0
        year = date_key.zero? ? 'Undated' : (date_key / 10_000).to_s
        conference_id = record['conference']

        # New bibliography entries still group by venue/year before their date is curated.
        if conference_id.nil? && row&.[]('data-publication-type') == 'inproceedings'
          venue = row['data-publication-venue'].to_s.downcase.gsub(/[^a-z0-9]/, '')
          known = conferences.find do |_, conference|
            conference['start'].to_s.start_with?("#{citation_year}-") &&
              conference['venue'].to_s.downcase.gsub(/[^a-z0-9]/, '') == venue
          end
          conference_id = known ? known.first : "#{citation_year}-#{venue}"
        end
        if conference_id && conferences[conference_id]
          date = conferences[conference_id]['start']
          date_key = publication_date_key(date) || date_key
          year = (date_key / 10_000).to_s
        end

        unit_key = conference_id ? "conference:#{conference_id}" : "paper:#{key || index}"
        units[unit_key] ||= { year: year, date_key: date_key, index: index, items: [] }
        item['data-publication-key'] = key if key
        item['data-publication-date'] = date if date
        item['data-date-basis'] = record.fetch('basis', 'citation_year')
        item['data-conference-group'] = conference_id if conference_id
        units[unit_key][:items] << item
      end

      output = Nokogiri::HTML::DocumentFragment.parse('')
      ordered = units.values.sort_by { |unit| [-unit[:date_key], unit[:index]] }
      ordered.group_by { |unit| unit[:year] }.each do |year, year_units|
        heading = Nokogiri::XML::Node.new('h2', output.document)
        heading['class'] = 'bibliography'
        heading.content = year
        output.add_child(heading)

        list = Nokogiri::XML::Node.new('ol', output.document)
        list['class'] = 'bibliography'
        year_units.each { |unit| unit[:items].each { |item| list.add_child(item.unlink) } }
        output.add_child(list)
      end
      output.to_html
    end
  end
end

Liquid::Template.register_filter(Jekyll::PublicationTimeline)
