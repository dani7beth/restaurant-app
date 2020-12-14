import { Header } from "semantic-ui-react"
import RestaurantList from "./RestaurantList"

const Restaurant = ({id, name}) =>{
    return (
        <Header>{name}</Header>
    )
}
export default Restaurant;