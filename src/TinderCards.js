import React, { useState, useEffect, useContext } from 'react';

// import YelpContext from "./cardprovider";
import NavButton from './NavButton'
import TinderCard from 'react-tinder-card';
// import database from './firebase';

import './TinderCards.css';

function TinderCards() {
  const [ profile, setProfile ] = useState([
    {
      project_name: 'Not The Office Again',
      project_screenshot: 'https://i.imgur.com/OlhvzRA.jpg',
      project_description: 'Not The Office is an app built for people addicted to The Office. Use the random movie generator to search for movies featuring your favorite characters from the office.',
      github_username: 'MLogan1998',
      bio: 'I love the create and problem solving aspects of coding. I also love working on a team with my peers to accomplish a goal'
    },
    {
      project_name: 'Tomagotchi',
      project_screenshot: 'https://i.imgur.com/bnHcIBw.jpg',
      project_description: 'Not The Office is an app built for people addicted to The Office. Use the random movie generator to search for movies featuring your favorite characters from the office.',
      github_username: 'MLogan1998',
      bio: 'I love the create and problem solving aspects of coding. I also love working on a team with my peers to accomplish a goal'
    },
    {
      project_name: 'Bozo University',
      project_screenshot: 'https://i.imgur.com/dajJQW0.jpgg',
      project_description: 'Not The Office is an app built for people addicted to The Office. Use the random movie generator to search for movies featuring your favorite characters from the office.',
      github_username: 'MLogan1998',
      bio: 'I love the create and problem solving aspects of coding. I also love working on a team with my peers to accomplish a goal'
    }
  ])

  const onSwipe = (direction) => {
    if (direction == 'right') {
      console.log('Right')
    } if (direction == 'left') {
      console.log('Left')
    }
  }

  const onClick = () => {
    console.log('click')
  }

  return (
    <div>
      <NavButton />
        <div className="tinderCards__cardContainer">
          {profile.map(pro => (
                <TinderCard className="swipe" key={pro.name} preventSwipe={['up', 'down']} onSwipe={onSwipe}>
                  <div className="card">
                    
                  <div className="img-container" style={{backgroundImage: `url(${pro.project_screenshot})`}}></div>
                  
                    <div className="project__info" onClick={onClick}>
                      <div className="icon-circle"><i class="fas fa-info"></i> </div>
                      
                      <h3 className="pro__name">{pro.project_name}</h3>
                      <o className="pro__des">{pro.project_description}</o>
                    </div>
                  </div>
                </TinderCard>
          ))}
        </div>
    </div>
  )
}

export default TinderCards
