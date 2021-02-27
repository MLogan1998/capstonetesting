import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
import './NavButton.css'

function NavButton() {
  const onClickEvent = () => {
    const navButtons = document.getElementById("navi-toggle");
    navButtons.checked = false;
  }

  return (
      <div class="navigation">
        <input id="navi-toggle" type="checkbox" class="navigation__checkbox"></input>
        <label for="navi-toggle" class="navigation__button">
            <span class="navigation__icon">&nbsp;</span>
        </label>
        <div class="navigation__background">&nbsp;</div>
          <nav class="navigation__nav">
              <ul class="navigation__list">
                  <li class="navigation__item"><a href="/homeboy" class="navigation__link" onClick={onClickEvent}>Home</a></li>
                  <li class="navigation__item"><a href="/swipe" class="navigation__link" onClick={onClickEvent}>Swipe</a></li>
                  <li class="navigation__item"><a href="#" class="navigation__link" onClick={onClickEvent}>Matches</a></li>
                  <li class="navigation__item"><Link to="/register" class="navigation__link" onClick={onClickEvent}>Log Out</Link></li>
              </ul>
          </nav>
        </div>
  )
}

export default NavButton;
