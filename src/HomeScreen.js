import React from 'react';
import { Link } from 'react-router-dom';
import HomeHeader from './HomeHeader'
import HomeFooter from './HomeFooter'
import './HomeScreen.css'

function HomeScreen() {
  return (
    <div>
      <HomeHeader />
      <div className="homescreen__footer">
          <Link to="/login" class="btn">Log in</Link>
          <Link to="/register" class="btn">Register</Link>
      </div>
      <HomeFooter />
      </div>

  )
}

export default HomeScreen
