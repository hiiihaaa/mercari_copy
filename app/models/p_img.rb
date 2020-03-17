class PImg < ApplicationRecord
  belongs_to :product, optional: true
  amount_uploader :p_img_file, PImgsUploader
end
