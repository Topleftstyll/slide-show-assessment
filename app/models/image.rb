class Image < ApplicationRecord
  has_one_attached :file
  has_many :visits
end
