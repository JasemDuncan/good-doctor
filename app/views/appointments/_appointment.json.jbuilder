json.extract! appointment, :id, :appointmentDate, :doctor_id, :created_at, :updated_at
json.url appointment_url(appointment, format: :json)
