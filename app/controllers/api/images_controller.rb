class Api::ImagesController < ApplicationController
  def index
    if params[:business_id]
      @images = Image.find(params[:business_id])
      render :index
    elsif params[:user_id]
      @images = Image.find(params[:user_id])
    end
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
