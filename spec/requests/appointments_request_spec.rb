require 'rails_helper'

describe 'Book an Appointment API', type: :request do
  describe "GET /appointments" do
    user_id = 1

    it "returns all appointments made by the user" do
      get "/api/v1/appointments/:user_id"
      expect(response).to have_http_status(:success)
    end
  end
end
