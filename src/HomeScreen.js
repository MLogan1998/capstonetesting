import React from 'react';

import './HomeScreen.css'

function HomeScreen() {
  return (
    <div className="homescreen">
      <div className="homescreen__header">
          <div className="heading__box">
          <h1 className="homescreen__heading">Hangry?</h1>
          </div>
      </div>
      <div className="homescreen__footer">
          <a class="btn">Log in</a>
          <a class="btn">Register</a>
      </div>
    </div>
  )
}

export default HomeScreen
