class Api::ImagesController < ApplicationController
  def index
    if params[:business_id]
      @images = Image.where(business_id: params[:business_id])
      render :index
    elsif params[:user_id]
      @images = Image.where(user_id: params[:user_id])
    end
  end

  def create
    @image = Image.new(image_params)
    @image.business_id = params[:business_id]
    if current_user
      @image.user_id = current_user.id
    end
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
