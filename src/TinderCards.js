import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom'
import InfoModal from './InfoModal'

// import YelpContext from "./cardprovider";
import NavButton from './NavButton'
import TinderCard from 'react-tinder-card';
// import database from './firebase';
import Popup from 'reactjs-popup';

import './TinderCards.css';

function TinderCards() {
  const [ profile, setProfile ] = useState([
    {
      project_name: 'Not The Office Again',
      project_screenshot: 'https://i.imgur.com/OlhvzRA.jpg',
      project_description: 'Not The Office is an app built for people addicted to The Office. Use the random movie generator to search for movies featuring your favorite characters from the office.',
      github_username: 'MLogan1998',
      bio: 'NTOA ABOUT'
    },
    {
      project_name: 'Tomagotchi',
      project_screenshot: 'https://i.imgur.com/bnHcIBw.jpg',
      project_description: 'Tomagotchi is a app made with Vanilla JS based on the classic 90s game. Check it out! Bea sure to eat healthy... and no fighting!',
      github_username: 'MLogan1998',
      bio: 'GOTCHI BIO'
    },
    {
      project_name: 'Bozo University',
      project_screenshot: 'https://i.imgur.com/dajJQW0.jpgg',
      project_description: 'Bozo University admin panel was a group project at NSS. The technologies used were Vanilla JS, CSS, Firebase, and SCSS. It is a full CRUD single page application.',
      github_username: 'MLogan1998',
      bio: 'BOZO BIO'
    }
  ])

  const [ modalShow, setModalShow ] = useState(false)

  const handleModalClose = () => setModalShow(false);
  const handleModalShow = () =>  setModalShow(true);


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
                  <div id="card" className="card2">
                    <div className="img-container" style={{backgroundImage: `url(${pro.project_screenshot})`}}></div>
                    <div className="project__info">
                      <div className="icon-circle" onClick={handleModalShow}><i class="fas fa-info"></i></div>
                      <h3 className="pro__name">{pro.project_name}</h3>
                      <p className="pro__des">{pro.project_description}</p>
                    </div>
                    <InfoModal key={pro.bio} handleModalShow={handleModalShow} handleModalClose={handleModalClose} modalShow={modalShow} pro={pro}/>
                  </div>
                </TinderCard>
          ))}
        </div>
    </div>
  )
}

export default TinderCards
