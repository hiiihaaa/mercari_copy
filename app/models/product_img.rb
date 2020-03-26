class ProductImg < ApplicationRecord
  belongs_to :product, optional: true
  mount_uploader :p_img_file, ImgUploader
end
