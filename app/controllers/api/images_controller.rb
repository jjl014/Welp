class Api::ImagesController < ApplicationController
  def index
    if params[:business_id]
      @images = Images.find(params[:business_id])
    else
      @images = Images.all
    end
    render :index
  end

  def create
    @image = Image.new(image_params)
    @image.user_id = params[:user_id]
    @image.business_id = params[:business_id]
    if @image.save
      render :show
    else
    end
  end

  private

  def image_params
    params.require(:image).permit(:img_url)
  end
end
