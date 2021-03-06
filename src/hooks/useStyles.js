/* eslint-disable no-confusing-arrow */
import { fade, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 500,
    margin: '12px auto',
  },
  grow: {
    flexGrow: 1,

  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    color: 'white',
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
    color: 'white',
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    color: 'white',
    '& a': {
      textDecoration: 'none',
    },
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
  textColor: {
    color: 'white',
  },
  linkStyle: {
    color: 'white',
    '& a': {
      textDecoration: 'none',
    },
  },
  alighHeading: {
    textAlign: 'center',
    marginTop: 16,
    color: 'white',
  },
  favourite: {
    color: (props) => (props.isFavourite ? 'red' : null),
  },
  watchlist: {
    color: (props) => (props.isWatchList ? 'red' : null),
  },
  cardWidth: {
    width: '100%',
    margin: '12px auto',
    [theme.breakpoints.up('md')]: {
      width: (props) => !props.isFavouriteItem && !props.isWatchItem ? '15%' : '500px',
      float: (props) => !props.isFavouriteItem && !props.isWatchItem ? 'left' : null,
      height: (props) => !props.isFavouriteItem && !props.isWatchItem ? 450 : null,
      margin: (props) => !props.isFavouriteItem && !props.isWatchItem ? 8 : '12px auto',
      padding: (props) => !props.isFavouriteItem && !props.isWatchItem ? 2 : null,
      overflow: (props) => !props.isFavouriteItem && !props.isWatchItem ? 'scroll' : 'auto',
    },
  },
}));

export default useStyles;
