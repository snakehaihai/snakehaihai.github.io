require 'nokogiri'

module Jekyll
  module PrioritizePublications
    def prioritize_publications(input, keys)
      fragment = Nokogiri::HTML.fragment(input)
      list = fragment.at_css('ol.bibliography')
      return input unless list

      keys.split(',').map(&:strip).reverse_each do |key|
        item = list.element_children.find do |candidate|
          candidate.css('[id]').any? { |node| node['id'] == key }
        end
        next unless item

        item.unlink
        list.prepend_child(item)
      end

      fragment.to_html
    end
  end
end

Liquid::Template.register_filter(Jekyll::PrioritizePublications)
