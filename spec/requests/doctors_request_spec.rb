require 'rails_helper'

describe 'Book an Appointment API', type: :request do
  describe "GET /doctors" do
    it "returns all the doctors" do
      get "/api/v1/doctors"
      expect(response).to have_http_status(:success)
    end
  end

  describe 'POST /doctors' do
    it 'creates a new doctor' do
      Doctor.create(name: "Jane Doe", age: 45, specialization: "Physician", bookingFee: 100,
                    biography: "Started practicing since chilldhood", image_data: "https://grid.milkeninstitute.org/events/speakers/W49471.jpg")
      expect {
        post '/api/v1/doctors',
             params: { doctor: { name: "Jane Doe",
                                 age: 45, specialization: "Physician",
                                 bookingFee: 100,
                                 biography: "Started practicing since chilldhood",
                                 image_data: "https://grid.milkeninstitute.org/events/speakers/W49471.jpg" } }
      }.to change { Doctor.count }.by(1)

      expect(response).to have_http_status(:created)
    end
  end
end
