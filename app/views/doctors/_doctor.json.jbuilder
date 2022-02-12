json.extract! doctor, :id, :name, :age, :specialization, :bookingFee, :biography, :created_at, :updated_at
json.url doctor_url(doctor, format: :json)
