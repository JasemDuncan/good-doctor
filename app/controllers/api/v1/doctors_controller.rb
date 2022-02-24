class Api::V1::DoctorsController < ApplicationController

  def index
    @doctors = Doctor.all
    render json: { data: @doctors }, status: :created
  end

  def create
    @doctor = Doctor.new(doctors_params)

    if @doctor.save
      render json: { message: 'New doctor added', data: @doctor }, status: :created
    else
      render json: { message: 'Doctor not added' }, status: :unauthorized
    end
  end

  def delete_doctor
    doctor = Doctor.find(params[:doctor_id])

    if doctor
      doctor.appointments&.delete_all
      doctor.delete
      render json: { message: 'A Doctor has been deleted' }, status: :ok
    else
      render json: { message: 'Doctor not found' }, status: :ok
    end
  end

  private

  def doctors_params
    params.require(:doctor).permit(
      :name,
      :age,
      :specialization,
      :bookingFee,
      :biography,
      :image
    )
  end
end