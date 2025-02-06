class ImagesController < ApplicationController
  def index
    @images = Image.all
  end

  def create_visit
    @image = Image.find(params[:image_id])
    Visit.create(image: @image)
  end
end
