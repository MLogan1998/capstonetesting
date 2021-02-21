import React from 'react';

import './HomeHeader.css'

function HomeHeader() {
  return (
    <div className="homescreen">
      <div className="homescreen__header">
          <div className="heading__box">
          <h1 className="homescreen__heading">Hangry</h1>
          <p className="footer__slogan primary__blue">Whats for Dinner?</p>
          </div>
      </div>    
    </div>
  )
}

export default HomeHeader
