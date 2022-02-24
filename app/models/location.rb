class Location < ApplicationRecord
  # has_many :appointments, dependent: :destroy

  validates :name, presence: true
end
