class Api::RestaurantsController < ApplicationController
    def index
        render json: Restaurant.all
    end

    private

    def restaurant_params
        params.require(:restaurant).permit(:name)
    end
end
