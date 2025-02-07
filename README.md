# README
Simple slide show to show 4 images from a folder and count the number of views on each photo.
The images need to be seeded into the database so that we can pull the images and create visits for each image when its viewed.

![CleanShot 2025-02-07 at 15 40 44](https://github.com/user-attachments/assets/88c50dde-cb40-46d0-af63-1003b563d499)


Setup Instructions:

* `bundle` to install packages
* `rails db:create` to create the database
* `rails db:migrate` to migrate the migrations
* `rails db:seed` to seed the images into the database

Files to note:

  - Models:
    * [Image](app/models/image.rb)
    * [Visit](app/models/visit.rb)

  - Views:
    * [Slide Show](app/views/images/index.html.erb)
    * [Total Visits Partial](app/views/images/_visit_counts.html.erb)
    * [Create Visit Turbo Stream](app/views/images/create_visit.turbo_stream.erb)

  - Controllers:
    * [Image](app/controllers/images_controller.rb)

  - Stimulus:
    * [Slideshow Controller](app/javascript/controllers/slideshow_controller.js)

  - CSS:
    * [Carousel](app/assets/stylesheets/carousel.css)
