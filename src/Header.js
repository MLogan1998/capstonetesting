import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';

import './Header.css';

function Header() {
    return (
      <div className="header">
          <IconButton>
              <PersonIcon className="header__icon" fontSize="medium" />
          </IconButton>
          <RestaurantIcon className="header__icon header__logo" fontSize="large" />
          <IconButton>
              <ForumIcon className="header__icon" fontSize="medium" />
          </IconButton>
      </div>
    )
}

export default Header
