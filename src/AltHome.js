import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
import './AltHome.css'

function AltHome() {
  const onClickEvent = () => {
    const navButtons = document.getElementById("navi-toggle");
    navButtons.checked = false;
  }

  return (
    <div className="alt-container">
      <div class="navigation">
        <input id="navi-toggle" type="checkbox" class="navigation__checkbox"></input>
        <label for="navi-toggle" class="navigation__button">
            <span class="navigation__icon">&nbsp;</span>
        </label>
        <div class="navigation__background">&nbsp;</div>
          <nav class="navigation__nav">
              <ul class="navigation__list">
                  <li class="navigation__item"><a href="#" class="navigation__link" onClick={onClickEvent}>Home</a></li>
                  <li class="navigation__item"><a href="#" class="navigation__link" onClick={onClickEvent}>Swipe</a></li>
                  <li class="navigation__item"><a href="#" class="navigation__link" onClick={onClickEvent}>Matches</a></li>
                  <li class="navigation__item"><Link to="/register" class="navigation__link" onClick={onClickEvent}>Log Out</Link></li>
              </ul>
          </nav>
        </div>
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
