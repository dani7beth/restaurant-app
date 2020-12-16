import { useState } from "react"
import { Form } from "semantic-ui-react";

export default (props) =>{
    const [name, setName] = useState('');
    
    const handleSubmit = (e) =>{
        if(props.id){
            props.updateRestaurant(props.id,{name});
        }else{
            props.addRestaurant({name});
        }
        setName('');

    };

    return(
        <Form onSubmit={handleSubmit}>
            <Form.Input 
            label={'Restaurant'}
            value={name}
            name={name}
            onChange={(e)=> {
                setName(e.target.value);
            }}
            />
            <Form.Button type="submit">{props.id ? "Edit Restaurant" : "Add Restaurant"}</Form.Button>
        </Form>
    )
}