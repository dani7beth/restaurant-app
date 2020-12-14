import { useState } from "react"
import { Form } from "semantic-ui-react";

export default (props) =>{
    const [name, setName] = useState('');

    const handleSubmit = (e) =>{
        props.addRestaurant({name});
        setName('');
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
            <Form.Button type="submit">add</Form.Button>
        </Form>
    )
}