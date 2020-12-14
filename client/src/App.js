import logo from './logo.svg';
import './App.css';
import {Container, Header} from "semantic-ui-react";
import axios from 'axios';
import { useEffect, useState } from 'react';
import RestaurantList from './components/RestaurantList';

function App() {

  const [restaurants, setRestaurants] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    getRestaurants();
  }, []);

  const getRestaurants = async () =>{
    try{
      //get restaurants from db
      let res = await axios.get('/api/restaurants');
      setRestaurants(res.data);
    }catch(err){
      setError(true);
      console.log(err);
    }finally{
      setLoading(false);
    }
  };

  const renderRestaurants = () =>{
    if(loading) return <p>loading...</p>;
    if(error) return <p>error</p>;
    return(
      <>
      <Header as="h1" textAlign="center">Restaurant App</Header>
      <RestaurantList restaurants={restaurants} />
      <br/>
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
