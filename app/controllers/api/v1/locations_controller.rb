class Api::V1::LocationsController < ApplicationController
  def index
    @locations = Location.all
    render json: { data: @locations }, status: :created
  end

  def create
    @location = Location.new(locations_params)

    if @location.save
      render json: { message: 'Location Added', data: @location }, status: :created
    else
      render json: { message: 'There was an error' }, status: :unauthorized
    end
  end

  def destroy
    location = Location.find(params[:id])
    if location
      location.appointments&.delete_all
      location.delete
      render json: { message: 'Location deleted' }, status: :ok
    else
      render json: { message: 'Location not found' }, status: :ok
    end
  end

  private

  def locations_params
    params.require(:location).permit(
      :name
    )
  end
end
