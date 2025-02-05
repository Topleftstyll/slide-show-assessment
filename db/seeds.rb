IMAGES = %w[
  coffee-777612_640.jpg
  raspberries-1426859_1920.jpg
  posing-999199_1920.jpg
  coins-1523383_1920.jpg
].freeze

IMAGES.each do |url|
  Image.find_or_create_by(url: url)

  puts "Created image with URL: #{url}"
end
