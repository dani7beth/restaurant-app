import { Button, Header } from "semantic-ui-react"
import RestaurantList from "./RestaurantList"

const Restaurant = ({id, name, updateRestaurant, deleteRestaurant}) =>{
    return (
        <>
        <Header>{name}</Header>
        <Button icon="trash" color="red" onClick={()=> deleteRestaurant(id)}/>
        </>
    )
}
export default Restaurant;