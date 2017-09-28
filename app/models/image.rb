class Image < ApplicationRecord
  validates :img_url, presence: true

  belongs_to :user, optional: true
  belongs_to :business
end
