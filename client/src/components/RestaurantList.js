import MenuList from "./MenuList";
import Restaurant from "./Restaurant";

const RestaurantList = (props) =>{
    
    return (
        <ul>
            {props.restaurants.map((r)=>(
                <>
                <Restaurant 
                updateRestaurant={props.updateRestaurant}
                deleteRestaurant={props.deleteRestaurant}
                key={r.id} {...r} 
                />
                {/* <MenuList key={r.id} menus={r.menus} /> */}
                </>
            ))}
        </ul>
    )
}
export default RestaurantList;