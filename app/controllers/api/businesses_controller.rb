class Api::BusinessesController < ApplicationController
  def create
    @business = Business.new(business_params)
    @business.owner_id = current_user.id if current_user
    if @business.save
      render :show
    else
      render json: @business.errors.full_messages, status: 422
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

  def update
    @business = Business.find(params[:id])
    if @business.update_attributes(business_params)
      render :show
    else
      render json: @business.errors.full_messages, status: 422
    end
  end

  def destroy
    business = Business.find(params[:id])
    if current_user && current_user.businesses.include?(business)
      business.destroy
      render json: business
    else
      render json: ["Must be the owner to perform this operation: Delete"], status: 401
    end
  end

  private

  def business_params
    params.require(:business).permit(:name, :address, :city, :state, :zipcode, :phone)
  end
end
