class Review < ApplicationRecord
  validates :body, presence: true
  validates :user, uniqueness: { scope: :business}

  belongs_to :user
  belongs_to :business
end
