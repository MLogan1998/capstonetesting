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
      id: 1,
      project_name: 'Not The Office Again',
      project_screenshot: 'https://i.imgur.com/OlhvzRA.jpg',
      project_description: 'Not The Office is an app built for people addicted to The Office. Use the random movie generator to search for movies featuring your favorite characters from The Office. Built with React, TMDb API, Firebase, Axios, and SCSS.',
      github_username: 'MLogan1998',
      bio: 'NTOA ABOUT',
      modalShow: false
    },
    {
      id: 2,
      project_name: 'Evicore',
      project_screenshot: 'https://res-5.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco/v1456736322/re9rkz4rmisyvtlzborl.png',
      project_description: 'Seeking a junior developer to be part of an agile development team building and working on enterprise grade software systems on top of the Microsoft .NET development stack.',
      github_username: 'MLogan1998',
      bio: 'GOTCHI BIO',
      modalShow: false
    },
    {
      id: 3,
      project_name: 'Bozo University',
      project_screenshot: 'https://i.imgur.com/dajJQW0.jpgg',
      project_description: 'Bozo University admin panel was a group project at NSS. The technologies used were Vanilla JS, CSS, Firebase, and SCSS. It is a full CRUD single page application.',
      github_username: 'MLogan1998',
      bio: 'BOZO BIO',
      modalShow: false
    }
  ])

  const [ modalShow, setModalShow ] = useState(false)
  // const [ iconShow, setIconShow ] = useState()

  // const handleModalClose = () => setModalShow(false);

  const handleModalClose = (profileid) =>  {
    const prof = profile.find(({id}) => id == profileid)
    prof.modalShow = false;
    setModalShow(prof.modalShow)
  }


  const handleModalShow = (profileid) =>  {
    const prof = profile.find(({id}) => id == profileid)
    prof.modalShow = true;
    setModalShow(prof.modalShow)
  }


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
                      <div className="icon-circle" onClick={() => handleModalShow(pro.id) }><i class="fas fa-info"></i></div>
                      <h3 className="pro__name">{pro.project_name}</h3>
                      <p className="pro__des">{pro.project_description}</p>
                    </div>
                    <InfoModal key={pro.id} handleModalShow={handleModalShow} handleModalClose={handleModalClose} modalShow={pro.modalShow} pro={pro}/>
                  </div>
                </TinderCard>
          ))}
        </div>
    </div>
  )
}

export default TinderCards
