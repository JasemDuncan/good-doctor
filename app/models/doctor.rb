class Doctor < ApplicationRecord
  has_many :appointments, dependent: :destroy

  validates :name, presence: true
  validates :age, presence: true
  validates :specialization, presence: true
  validates :bookingFee, presence: true
  validates :biography, presence: true

  include ImageUploader::Attachment(:image)
  
end
