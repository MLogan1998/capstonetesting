import React from 'react';
import IconButton from '@material-ui/core/IconButton';

import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';

import './Header.css';

function Header() {
    return (
      <div className="header">
          <IconButton>
              <PersonIcon className="header__icon" fontSize="large" />
          </IconButton>
          <img className="header__logo" src="https://cdn.worldvectorlogo.com/logos/tinder-2.svg" alt="tinder logo" />
          <IconButton>
              <ForumIcon className="header__icon" fontSize="large" />
          </IconButton>
      </div>
    )
}

export default Header
