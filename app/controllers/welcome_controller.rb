class WelcomeController < ApplicationController
  def index
  	if params[:search].present?
  		@locations = Location.near(params[:search])
  	else
  		@locations = Location.all
  	end

  	@hash = Gmaps4rails.build_markers(@locations) do |location, marker|
  		marker.lat location.latitude
  		marker.lng location.longitude
  	end
  end

  def new
  	@location = Location.new
  end

  def create
  	@location = Location.new(location_params)
  	@location.save
  	flash[:success] = "Saved Location"
  	redirect_to '/'
  end

  private

  def location_params
  	params.require(:location).permit( :address, :latitude, :longitude, :country_code)
  end

end
