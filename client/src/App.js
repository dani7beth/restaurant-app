import logo from './logo.svg';
import './App.css';
import {Container, Header} from "semantic-ui-react";
import axios from 'axios';
import { useEffect, useState } from 'react';
import RestaurantList from './components/RestaurantList';
import RestaurantForm from './components/RestaurantForm';

function App() {

  const [restaurants, setRestaurants] = useState([]);
  const [menus, setMenus] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    getRestaurants();
  }, []);

  //path for menus /api/restaurants/:restaurant_id/menus(.:format)
  

  const getRestaurants = async () =>{
    try{
      //get restaurants from db
      let res = await axios.get('/api/restaurants');
      setRestaurants(res.data);
      res.data.map((m) => {
        let men = axios.get(`/api/restaurants/${m.id}/menus`);
        setMenus(men);
      })
      
    }catch(err){
      setError(true);
      console.log(err);
    }finally{
      setLoading(false);
    }
  };

  //add a new restaurant
  const addRestaurant = async (restaurant) =>{
    try{
      let res = await axios.post("/api/restaurants", restaurant);
      setRestaurants([...restaurants, res.data])
    }catch(err){
      console.log(err);
    }
  }

  //update db
  const updateRestaurant = async (id) =>{
    try{
      let res = await axios.put(`/api/restaurants/${id}`);
      let newRestaurants = restaurants.map((r)=>
        r.id !== id ? r : {...r}
      )
      setRestaurants(newRestaurants)
    }catch(err){
      console.log(err);
    }
  };

  //delete from db
  const deleteRestaurant = async (id) =>{
    try{
      let res = await axios.delete(`/api/restaurants/${id}`)
      let newRestaurants = restaurants.filter((r)=> r.id !== id);
      setRestaurants(newRestaurants);
    }catch(err){
      console.log(err);
    }
  };

  const renderRestaurants = () =>{
    if(loading) return <p>loading...</p>;
    if(error) return <p>error</p>;
    return(
      <>
      <Header as="h1" textAlign="center">Restaurant App</Header>
      <RestaurantForm addRestaurant={addRestaurant} />
      <RestaurantList 
      updateRestaurant={updateRestaurant}
      deleteRestaurant={deleteRestaurant}
      restaurants={restaurants} 
      menus={menus}
      />
      </>
    )
  }

  return (
    <Container>
      {renderRestaurants()}
    </Container>
  );
}

export default App;
