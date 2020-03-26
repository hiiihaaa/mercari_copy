class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.string  :name
      t.string  :description

      t.integer :category_id
      t.string  :brand
      t.string  :condition_id

      t.integer :shipping_charge_id
      t.integer :shipping_method_id
      t.integer :prefecture_id
      t.integer :period_id

      t.integer :price

      t.integer :user_id, foreign_key: true
    end
  end
end
