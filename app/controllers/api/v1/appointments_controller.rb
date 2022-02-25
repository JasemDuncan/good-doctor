class Api::V1::AppointmentsController < ApplicationController
  def index
    if params[:user_id]
      @appointments = Appointment.where(user_id: params[:user_id])

      render json: { data: @appointments }, status: :created
    else
      render json: { message: 'User is required' }
    end
  end

  def create
    @appointment = Appointment.new(appointments_params)

    if @appointment.save
      render json: { message: 'Appointment created', data: @appointment }, status: :created
    else
      render json: { message: 'There was an error successfully' }, status: :unauthorized
    end
  end

  def destroy
    appointment = Appointment.find(params[:id])
    if appointment
      appointment.delete
      render json: { message: 'Appointment removed' }, status: :ok
    else
      render json: { message: 'Appointment not found' }, status: :ok
    end
  end

  private

  def appointments_params
    params.require(:appointment).permit(
      :user_id,
      :doctor_id,
      # :location_id,
      :appointment_date
    )
  end
end
