class Api::BusinessesController < ApplicationController
  def create
    @business = Business.new(business_params)
    @business.owner_id = current_user.id
    if @business.save
      render :show
    else
      render json: @business.errors.full_messsages
    end
  end

  def index
    @businesses = Business.all
    render :index
  end

  def show
    @business = Business.find(params[:id])
    render :show
  end

  private

  def business_params
    params.require(:business).permit(:name, :address, :city, :state, :zipcode)
  end
end
