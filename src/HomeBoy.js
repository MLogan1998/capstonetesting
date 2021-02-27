import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
import NavButton from './NavButton'
import './HomeBoy.css'

function HomeBoy() {
  const onClickEvent = () => {
    const navButtons = document.getElementById("navi-toggle");
    navButtons.checked = false;
  }

  return (
    <div className="homeboy-container">
      <NavButton />
      <div className="list-container">
        <h1 className="list__screen__heading">What now?</h1>
        <div className="list-item">
          <div className="list-heading">
            <div className="list-number number-text">1</div>
            <h1 className="heading-text">Create Your Profile</h1>
          </div>
          <div className="list-text-container">
            <p className="list-text">Show employers your best work! Seekr is designed for employers to match with you based only on your work, experience, and code.</p>
          </div>
        </div>
        <div className="list-item">
          <div className="list-heading">
            <div className="list-number number-text">2</div>
            <h1 className="heading-text">Start Swiping</h1>
          </div>
          <div className="list-text-container">
            <p className="list-text">Let the search begin! Start swiping through employers. Swipe right if you think the company is a great fit.</p>
          </div>
        </div>
        <div className="list-item">
          <div className="list-heading">
            <div className="list-number number-text">3</div>
            <h1 className="heading-text">Match</h1>
          </div>
          <div className="list-text-container">
            <p className="list-text">Whoohoo! Seekr will let you know when you have matched with an employer, and you will begin communicating with them.</p>
          </div>
        </div>
        <Link className="list__screen__link" to="/swipe">Get Started &rarr;</Link>
      </div>
    </div>

  )
}

export default HomeBoy;
