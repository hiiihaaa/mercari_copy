class Product < ApplicationRecord
  has_many :product_imgs, dependent: :destroy
  accepts_nested_attributes_for :product_imgs

  extend ActiveHash::Associations::ActiveRecordExtensions
  belongs_to_active_hash :condition
  belongs_to_active_hash :shipping_charge
  belongs_to_active_hash :prefecture
  belongs_to_active_hash :period
end
