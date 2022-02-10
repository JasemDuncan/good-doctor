class Api::V1::DoctorsController < ApplicationController
  def index
    render json: { :doctors => [
      {
        :name => 'something',
        :guid => '8589435-34439309-4384374'
      }
    ]}.to_json
  end
end
