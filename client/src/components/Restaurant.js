import { render } from "react-dom"
import { Button, Divider, Header} from "semantic-ui-react"
import MenuList from "./MenuList"

const Restaurant = ({id, name, deleteRestaurant, menus}) =>{    
    return (
        <>
        <Header as="h1">{name}</Header>
        <Button color="red" onClick={()=> deleteRestaurant(id)}>delete</Button>
        <Divider/>
        <MenuList menus={menus}/>
        </>
    )
}
export default Restaurant;