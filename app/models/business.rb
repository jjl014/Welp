class Business < ApplicationRecord
  validates :name, :address, :city, :state, :zipcode, presence: true

  belongs_to :owner, optional: true,
    primary_key: :id,
    foreign_key: :owner_id,
    class_name: :User

  has_many :images, dependent: :destroy
  has_many :reviews, dependent: :destroy
end
