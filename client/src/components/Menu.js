import Axios from "axios"
import { useEffect, useState } from "react";
import { Button, Card, Header } from "semantic-ui-react";
import MenuForm from "./MenuForm";


const Menu = (props) =>{
    const [menus, setMenus] = useState([]);
    const [showForm, setShowForm] = useState(false);

    // console.log(props.id);
    const readMenus = async ()=>{
        try{
            let res = await Axios.get(`/api/restaurants/${props.id}/menus`);
            setMenus(res.data);
            console.log(res.data);
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
                            <Button icon="trash" color="red" onClick={()=>deleteMenu(m.id)}/>
                        </Card.Content>
                    </Card>
                    
                )
            })
        )
    }

    const addMenu = async (menu) =>{
        try{
            let res = await Axios.post(`/api/restaurants/${props.id}/menus`, menu);
            setMenus([...menus, res.data]);
            // console.log(res.data);
        }catch(err){
            console.log(err);
        }
    }

    const deleteMenu = async (id)=>{
        try{
            let res = await Axios.delete(`/api/restaurants/${props.id}/menus/${id}`);
            let newMenus = menus.filter((m)=> m.id !== id);
            setMenus(newMenus);
        }catch(err){
            console.log(err);
        }
    }

    return (
        <>
        <Header>Menus</Header>
        <Button onClick={()=>setShowForm(!showForm)}>add</Button>
        {showForm && <MenuForm addMenu={addMenu}/>}
        {renderMenus()}
        </>
    )
}
export default Menu;