import { Button, Header, List } from "semantic-ui-react"

const Restaurant = ({id, name, deleteRestaurant, menus}) =>{
    return (
        <>
        <Header>{name}</Header>
        <List>
        {menus.map(m => {
           return(
            <List.Item>
            {(m.name)}
            </List.Item>
           ) 
            
            })}

        </List>
        
        
        <Button icon="trash" color="red" onClick={()=> deleteRestaurant(id)}/>
        </>
    )
}
export default Restaurant;