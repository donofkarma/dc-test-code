module Jekyll
    class MyConverter < Converter
        safe :false
        priority :high

        def matches(ext)
            ext =~ /^\.(md|markdown)$/i
        end

        def output_ext(ext)
            ".html"
        end

        def start_div(content)
            content.gsub(/<<<(\s)(.+)/, '<div class="\2">')
        end

        def end_div(content)
            content.gsub(/>>>/, '</div>')
        end

        def convert(content)
            # do your own thing with the content
            content = start_div(content)
            content = end_div(content)

            # Now call the standard Markdown converter
            site = Jekyll::Site.new(@config)
            mkconverter = site.find_converter_instance(Jekyll::Converters::Markdown)
            mkconverter.convert(content)
        end
    end
end
