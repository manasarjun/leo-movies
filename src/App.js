import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Link,
} from 'react-router-dom';
import {
  AppBar, Button, IconButton, Toolbar, Typography, Menu, MenuItem,
} from '@material-ui/core';

import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';
import {
  Favourite, WatchList, Profile, Mobile, Search, Routes,
} from './components';
import useStyles from './hooks/useStyles';
import Provider from './provider/Provider';


function App() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const [searchKeyword, setSearchKeyword] = useState('');
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const menuId = 'primary-search-account-menu';
  const mobileMenuId = 'primary-search-account-menu-mobile';

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };
  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleOnChange = (e) => {
    const keyword = e.target.value;
    setSearchKeyword(keyword);
  };


  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>My Account</MenuItem>
      <MenuItem onClick={handleMenuClose}>Log Out</MenuItem>
    </Menu>
  );

  return (
    <Provider>
      <div className={classes.grow}>
        <Router>
          <AppBar
            position='static'
            color='secondary'
          >
            <Toolbar className={classes.linkStyle}>
              <Link to="/">
                <Typography className={classes.title} variant="h4" noWrap>
                  Leo Movies
            </Typography>
              </Link>

              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <Link to='/search'>
                  <Search handleOnChange={handleOnChange} classes={classes} />
                </Link>
              </div>
              <div className={classes.grow} />
              <div className={classes.sectionDesktop}>
                <Link to="/favourites">
                  <Favourite />
                </Link>
                <Link to="/watchlist">
                  <WatchList />
                </Link>
                <Link to="/login">
                  <Button className={classes.textColor}>Login</Button>
                </Link>
                <Link to="/register">
                  <Button className={classes.textColor}>Register</Button>
                </Link>

              </div>
              <div className={classes.sectionMobile}>
                <IconButton
                  aria-label="show more"
                  aria-controls={mobileMenuId}
                  aria-haspopup="true"
                  onClick={handleMobileMenuOpen}
                  color="inherit"
                >
                  <MoreIcon />
                </IconButton>
              </div>
            </Toolbar>
          </AppBar>
          <Routes searchKeyword={searchKeyword} />
          <Mobile
            mobileMoreAnchorEl={mobileMoreAnchorEl}
            isMobileMenuOpen={isMobileMenuOpen}
            handleMobileMenuClose={handleMobileMenuClose}
          />
          {renderMenu}
        </Router>
      </div>
    </Provider>
  );
}

export default App;
