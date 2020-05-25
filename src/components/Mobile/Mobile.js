import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, MenuItem } from '@material-ui/core';

import Favorite from '../Favourite/Favourite';
import Watchlist from '../WatchList/WatchList';

export default function Mobile(props) {
  const {
    mobileMoreAnchorEl,
    mobileMenuId,
    isMobileMenuOpen,
    handleMobileMenuClose,
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
      </Menu>
    </>
  );
}
