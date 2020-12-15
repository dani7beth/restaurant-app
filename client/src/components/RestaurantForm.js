import { useState } from "react"
import { Form } from "semantic-ui-react";

export default (props) =>{
    const [name, setName] = useState('');
    const [menus, setMenus] = useState([]);

    const handleSubmit = (e) =>{
        props.addRestaurant({name,menus});
        setName('');
        setMenus([]);
    };

    return(
        <Form onSubmit={handleSubmit}>
            <Form.Input 
            label={'Restaurant'}
            value={name}
            onChange={(e)=> {
                setName(e.target.value);
            }}
            />
            <Form.Input 
            label={'Menu'}
            value={menus}
            onChange={(e)=>{
                setMenus(e.target.value);
            }}
            />
            <Form.Button type="submit">add</Form.Button>
        </Form>
    )
}