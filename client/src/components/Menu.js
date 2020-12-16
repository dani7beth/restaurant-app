import Axios from "axios"
import { useEffect, useState } from "react";
import { Button, Card, Header } from "semantic-ui-react";
import {useParams} from 'react-router-dom';


export default ({id}) =>{
    // let {restaurantId} = useParams();
    const [menus, setMenus] = useState([]);
    // console.log(id);
    const readMenus = async ()=>{
        try{
            let res = await Axios.get(`/api/restaurants/${id}/menus`);
            setMenus(res.data);
            // console.log(res.data);
        }catch(err){
            console.log(err);
        }
    }

    useEffect(()=>{
        readMenus();
    }, [])

    

    const renderMenus = () =>{
        return(
            menus.map((m)=> {
                return (
                    <Card>
                        <Card.Content>
                            <Card.Header>{m.name}</Card.Header>
                            <Button icon="pencil"/>
                            <Button icon="trash" color="red"/>
                        </Card.Content>
                    </Card>
                    
                )
            })
        )
    }

    return (
        <>
        <Header>Menus</Header>
        <Button>add</Button>
        {renderMenus()}
        </>
    )
}