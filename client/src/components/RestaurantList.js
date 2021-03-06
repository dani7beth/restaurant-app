import Restaurant from "./Restaurant";

const RestaurantList = (props) =>{
    
    return (
        <ul>
            {props.restaurants.map((r)=>(
                <>
                <Restaurant 
                updateRestaurant={props.updateRestaurant}
                deleteRestaurant={props.deleteRestaurant}
                addRestaurant={props.addRestaurant}
                key={r.id} {...r} 
                />
                </>
            ))}
        </ul>
    )
}
export default RestaurantList;