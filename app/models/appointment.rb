class Appointment < ApplicationRecord
  belongs_to :user
  belongs_to :doctor
  # belongs_to :location

  validates :user_id, presence: true
  validates :doctor_id, presence: true
  # validates :location_id, presence: true
  validates :appointment_date, presence: true
end
