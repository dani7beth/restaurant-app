import { useState } from "react";
import { Button, Divider, Header} from "semantic-ui-react"
import Menu from './Menu'
import RestaurantForm from "./RestaurantForm";

const Restaurant = ({id, name, deleteRestaurant, updateRestaurant}) =>{  
    const [showForm, setShowForm] = useState(false);
    return (
        <>
        <Header as="h1">{name}</Header>
        <Button color="red" onClick={()=> deleteRestaurant(id)}>Delete</Button>
        <Button color="blue" onClick={()=>setShowForm(!showForm)}>{showForm ? "Cancel" : "Edit Restaurant"}</Button>
        {showForm && <RestaurantForm id={id}  updateRestaurant={updateRestaurant}/>}
        <Divider/>
        <Menu id={id}/>
        </>
    )
}
export default Restaurant;