import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
import NavButton from './NavButton'
import './AltHome.css'

function AltHome() {
  const onClickEvent = () => {
    const navButtons = document.getElementById("navi-toggle");
    navButtons.checked = false;
  }

  return (
    <div className="alt-container">
        <NavButton />
        <div className="alt__homescreen__header">
          <h1 className="alt__homescreen__heading">seekr</h1>
          <p className="alt__footer__slogan primary__blue">swipe then hire</p>
        </div>
        <div className="login__container">
        </div>    
    </div>

  )
}

export default AltHome;
