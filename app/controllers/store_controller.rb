class StoreController < ApplicationController
  def index
    @products = Stripe::Product.list
    puts @products
  end
end
