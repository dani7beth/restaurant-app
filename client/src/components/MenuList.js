import { Button, Divider, Item } from "semantic-ui-react";

const MenuList = ({menus}) =>{
    return(
            <Item.Group>
            {menus.map(m => {
               return(
                   <>
                   <Item key={m.id}>
                    <Item.Content>
                        <Item.Header as="h2">
                            {m.name}
                        </Item.Header>
                        <br />
                        <Button size="mini" icon="pencil" />
                        <Button size="mini" icon="trash" color="red"/>
                        <Item.Description>
                            item1 <br/> item2 <br/> temporary hardcoded items
                        </Item.Description>
                    </Item.Content>
                    </Item>
                    <Divider hidden/>
                </>
               )
            })}
            </Item.Group>
       );
    
}
export default MenuList;