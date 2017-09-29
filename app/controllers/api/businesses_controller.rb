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
    if params[:searchKeyword]
      @businesses = Business.where("LOWER(name) LIKE ?", "%#{params[:searchKeyword]["find"].downcase}%")
    elsif params[:recommend] == "getrec"
      @businesses = Business.offset(rand(Business.count)).limit(3)
    else
      @businesses = Business.all
    end
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
      render json: ["You must be the owner of this business to delete it."], status: 401
    end
  end

  private

  def business_params
    params.require(:business).permit(:name, :address, :city, :state,
      :zipcode, :phone, :url, :lat, :lng, :owner_id, :price)
  end
end
