class ProductsController < ApplicationController
  def index
  end

  def show
  end

  def new
    @product = Product.new
    @product.p_imgs.build
  end

  def create
    @product = Product.new(product_params)
  end

  def edit

  end

  def update

  end

  private

  def product_params
    params.require(:product).permit(:name, :description, :category_id, :brand, :condition_id, :shipping_charge_id, :shipping_method_id, :preficture_id, :period_id, :price, p_imgs_attributes: [:p_img_file]).merge(user_id: current_user.id)
  end

end
