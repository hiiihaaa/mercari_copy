class CreatePImgs < ActiveRecord::Migration[5.2]
  def change
    create_table :p_imgs do |t|
      t.integer :product_id, foreign_key: true
      t.string  :p_img_file
    end
  end
end
