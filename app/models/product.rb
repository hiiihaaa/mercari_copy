class Product < ApplicationRecord
  has_many :p_imgs, dependent: :destroy
  accepts_nested_for :p_imgs
end
