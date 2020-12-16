import { Button, Divider, Header} from "semantic-ui-react"
import Menu from './Menu'

const Restaurant = ({id, name, deleteRestaurant, menus}) =>{    
    return (
        <>
        <Header as="h1">{name}</Header>
        <Button color="red" onClick={()=> deleteRestaurant(id)}>delete</Button>
        <Divider/>
        <Menu id={id}/>
        </>
    )
}
export default Restaurant;