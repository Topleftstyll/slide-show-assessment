# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* rails db:create to create the database
* rails db:migrate to migrate the migrations
* rails db:seed to seed the images into the database

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
