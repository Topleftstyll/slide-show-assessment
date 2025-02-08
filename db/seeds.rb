IMAGES = %w[
  coffee-777612_640.jpg
  raspberries-1426859_1920.jpg
  posing-999199_1920.jpg
  coins-1523383_1920.jpg
].freeze

IMAGES.each do |file_name|
  existing_image = Image.joins(file_attachment: :blob).find_by(active_storage_blobs: { filename: file_name })

  if existing_image
    puts "Image with file '#{file_name}' already exists."
  else
    image = Image.create!

    file_path = Rails.root.join("app", "assets", "images", file_name)
    if File.exist?(file_path)
      image.file.attach(io: File.open(file_path), filename: file_name)
      puts "Created and attached file '#{file_name}' to image."
    end
  end
end
