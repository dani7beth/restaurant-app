class Api::MenusController < ApplicationController
    before_action :set_restaurant
    before_action :set_menu, only: [:show, :edit, :update, :destroy]

    def index
        @menus = @restaurant.menus
    end

    private

    def set_restaurant
        @restaurant = Restaurant.find(params[:restaurant_id])
    end

    def set_menu
        @menu = Menu.find(params[:id])
    end

    def menu_params
        params.require(:menu).permit(:name)
    end
end
