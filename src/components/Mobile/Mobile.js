import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, MenuItem } from '@material-ui/core';

import Favorite from '../Favourite/Favourite';
import Watchlist from '../WatchList/WatchList';
import LoginIcon from '../Login/LoginIcon';
import RegisterIcon from '../Register/RegisterIcon';


export default function Mobile(props) {
  const {
    mobileMoreAnchorEl,
    mobileMenuId,
    isMobileMenuOpen,
    handleMobileMenuClose,
    handleProfileMenuOpen,
  } = props;
  return (
    <>
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        id={mobileMenuId}
        keepMounted
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMobileMenuOpen}
        onClose={handleMobileMenuClose}
      >
        <MenuItem>
          <Link to="/favourites">
            <Favorite />
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/watchlist">
            <Watchlist />
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/login">
            <LoginIcon />
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/register">
            <RegisterIcon />
          </Link>
        </MenuItem>
      </Menu>
    </>
  );
}
