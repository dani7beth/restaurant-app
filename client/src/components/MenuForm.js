import { useState } from "react";
import { Form } from "semantic-ui-react";

export default (props) =>{
    const [name, setName] = useState('');
    
    const handleSubmit = (e) =>{
        if(props.id){
            props.updateMenu(props.id,{name});
        }else{
            props.addMenu({name});
        }
        setName('');

    };

    return(
        <Form onSubmit={handleSubmit}>
            <Form.Input 
            label={'Menu'}
            value={name}
            name={name}
            onChange={(e)=> {
                setName(e.target.value);
            }}
            />
            <Form.Button type="submit">{props.id ? "Edit Menu" : "Add Menu"}</Form.Button>
        </Form>
    )
}