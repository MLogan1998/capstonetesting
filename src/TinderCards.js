import React, { useState, useEffect, useContext } from 'react';

// import YelpContext from "./cardprovider";

import TinderCard from 'react-tinder-card';
import database from './firebase';

import './TinderCards.css';

function TinderCards() {
  const { restaurants, setRestaurants } = useState([])

  useEffect(() => {
    getRestaurants();
  }, [])

  const getRestaurants = () => {
    return fetch("https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=Nashville", {
      headers: {
        "Authorization": 'Bearer**',
        "Content-Type": 'application/json'
      }
    })
    .then(response => response.json())
    .then(setRestaurants)
    .then(console.log(restaurants))
  }

  return (
    <div>
        {/* <div className="tinderCards__cardContainer">
          {restaurants.map(restaurant => (

                <TinderCard className="swipe" key={restaurant.name} preventSwipe={['up', 'down']}>
                  <div className="card" style={{backgroundImage: `url(${restaurant.image_url})`}}>
                      <h3>{restaurant.name}</h3>
                  </div>
                </TinderCard>
          ))}
        </div> */}
    </div>
  )
}

export default TinderCards
