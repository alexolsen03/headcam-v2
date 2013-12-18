class WelcomeController < ApplicationController
  def index
  	if params[:search].present?
  		@locations = Location.near(params[:search])
  	else
  		gen_markers
  	end

    respond_to do |format|
      format.html{}
      format.js{}
    end

  end

  def show
    gen_markers

    unless params[:vidId].nil?
      @vidId = params[:vidId]
      @location = Location.find(@vidId)
    end

    respond_to do |format|
      format.html{}
      format.js{}
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

  def gen_markers
    @locations = Location.all

    @hash = Gmaps4rails.build_markers(@locations) do |location, marker|
      marker.lat location.latitude
      marker.lng location.longitude
      marker.title location.address
      marker.json({:id => location.id, :title => location.address, :link => "/welcome/show/#{location.id}/?vidId=#{location.id}"})
    end
  end
end
