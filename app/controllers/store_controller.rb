class StoreController < ApplicationController
  def index
    @products = Stripe::Product.list.to_json
    puts @products
  end
end
