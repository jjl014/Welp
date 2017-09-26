class Image < ApplicationRecord
  validates :img_url, presence: true

  belongs_to :user
  belongs_to :business
end
