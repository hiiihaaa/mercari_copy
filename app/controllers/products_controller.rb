class ProductsController < ApplicationController
  def index
  end

  def show
  end

  def new
    @product = Product.new
    @product.product_imgs.build
  end

  def create
    @product = Product.new(product_params)
    if @product.save
      params[:product_imgs].each do |img|
        @product.product_imgs.create(product_id: @product.id, p_img_file: img)
      end
    redirect_to root_path, notice: '商品を登録しました。'
    else
      render action: 'new'
    end
  end

  def edit
  end

  def update
  end

  private

  def product_params
    params.require(:product).permit(:name, :description, :category_id, :brand, :condition_id, :shipping_charge_id, :shipping_method_id, :prefecture_id, :period_id, :price, product_imgs_attributes: [:p_img_file]).merge(user_id: current_user.id)
  end

end
