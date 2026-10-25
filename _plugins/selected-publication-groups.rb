require 'nokogiri'

module Jekyll
  module SelectedPublicationGroups
    def group_selected_publications(input, groups)
      fragment = Nokogiri::HTML.fragment(input)
      entries = {}
      fragment.css('ol.bibliography > li').each do |item|
        key = item.at_css('[data-publication-key]')&.[]('data-publication-key')
        raise ArgumentError, 'Selected publication is missing its key' unless key
        raise ArgumentError, "Duplicate selected publication: #{key}" if entries.key?(key)

        entries[key] = item
      end

      groups = Array(groups)
      keys = groups.flat_map { |group| group.fetch('papers') }
      raise ArgumentError, 'A selected publication is assigned to multiple groups' unless keys.uniq == keys
      raise ArgumentError, 'Selected publication group IDs must be unique' unless groups.map { |group| group.fetch('id') }.uniq.length == groups.length

      missing = entries.keys - keys
      unknown = keys - entries.keys
      unless missing.empty? && unknown.empty?
        raise ArgumentError, "Selected publication groups need updating. Ungrouped: #{missing.join(', ')}; unknown: #{unknown.join(', ')}"
      end

      output = Nokogiri::HTML::DocumentFragment.parse('')
      nav = Nokogiri::XML::Node.new('nav', output.document)
      nav['class'] = 'selected-publication-nav'
      nav['aria-label'] = 'Selected publication topics'
      output.add_child(nav)

      groups.each do |group|
        id = "selected-#{group.fetch('id')}"
        link = Nokogiri::XML::Node.new('a', output.document)
        link['href'] = "##{id}"
        link.content = group.fetch('label', group.fetch('title'))
        nav.add_child(link)

        section = Nokogiri::XML::Node.new('section', output.document)
        section['id'] = id
        section['class'] = 'selected-publication-group'
        section['aria-labelledby'] = "#{id}-title"

        heading = Nokogiri::XML::Node.new('h3', output.document)
        heading['id'] = "#{id}-title"
        heading.content = group.fetch('title')
        section.add_child(heading)

        list = Nokogiri::XML::Node.new('ol', output.document)
        list['class'] = 'bibliography'
        group.fetch('papers').each { |key| list.add_child(entries.fetch(key).unlink) }
        section.add_child(list)
        output.add_child(section)
      end

      output.to_html
    end
  end
end

Liquid::Template.register_filter(Jekyll::SelectedPublicationGroups)
