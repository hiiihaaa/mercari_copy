class ApplicationController < ActionController::Base
  require 'date'
  before_action :configure_permitted_parameters, if: :devise_controller?
  before_action :authenticate_user!
  protect_from_forgery with: :exception

  protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:nickname, :firstname, :lastname, :firstname_kana, :lastname_kana, :birthday, :user_img, :password])
  end
end
