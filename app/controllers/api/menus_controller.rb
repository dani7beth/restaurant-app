class Api::MenusController < ApplicationController
    before_action :set_restaurant
    before_action :set_menu, only: [:show, :edit, :update, :destroy]

    def index
        @menus = @restaurant.menus
    end

    def create
        menu = @restaurant.menus.new(menu_params)
        if menu.save
            render json: menu
        else
            render json: {errors: menu.errors}, status :unprocessable_entity
        end
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
