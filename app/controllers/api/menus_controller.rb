class Api::MenusController < ApplicationController
    before_action :set_restaurant
    before_action :set_menu, only: [:show, :edit, :update, :destroy]

    def index
        render json: @restaurant.menus
    end

    def show
        render json: @menu
    end

    def create
        menu = @restaurant.menus.new(menu_params)
        if menu.save
            render json: menu
        else
            render json: menu.errors, status: 422
        end
    end

    def update
        if @menu.update(menu_params)
            render json: @menu
        else
            render json: @menu.errors, status: 422
        end
    end

    def destroy
        @menu.destroy
        render json: @menu
    end

    private

    def set_restaurant
        @restaurant = Restaurant.find(params[:restaurant_id])
    end

    def set_menu
        @menu = @restaurant.menus.find(params[:id])
    end

    def menu_params
        params.require(:menu).permit(:name)
    end
end
