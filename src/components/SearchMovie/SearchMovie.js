import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from 'react-router-dom';
import { fade, makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
  Typography,
  Menu,
  MenuItem,
} from '@material-ui/core';

import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';

import MovieApi from '../MovieAPI/MovieApi';
import Favourite from '../Favourite/Favourite';
import WatchList from '../WatchList/WatchList';
import Profile from '../Profile/Profile';
import Mobile from '../Mobile/Mobile';
import Search from '../Search/Search';
import Login from '../Login/Login';
import DisplayFavourite from '../Favourite/DisplayFavourite';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

export default function PrimarySearchAppBar(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
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
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
      <MenuItem onClick={handleMenuClose}>Log Out</MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <Router>
        <AppBar position="static">
          <Toolbar>
            <Typography className={classes.title} variant="h6" noWrap>
              Leo Movies
            </Typography>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <Search handleOnChange={handleOnChange} classes={classes} />
            </div>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <Link to="/favourites">
                <Favourite />
              </Link>
              <Link to="/watchlist">
                <WatchList />
              </Link>
              <Profile
                menuId={menuId}
                handleProfileMenuOpen={handleProfileMenuOpen}
              />
              <Link to="/login">
                <Button color="inherit">Login</Button>
              </Link>
              <Button color="inherit">Join Us</Button>
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
        <MovieApi searchKeyword={searchKeyword} />
        <Mobile /* should pass props */ />
        {renderMenu}
        <div>
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/favourites">
              <DisplayFavourite {...props} />
            </Route>
            <Route path="/watchlist"></Route>
            <Route path="/about"></Route>
            <Route path="/users"></Route>
            <Route path="/"></Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}
