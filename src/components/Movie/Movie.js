import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
  },
});

const favouriteMovies = [];
export default function Movie({ movie }) {
  const classes = useStyles();

  const handleFavourites = (mov) => {
    const fav = {
      id: mov.id,
      title: mov.title,
      overview: mov.overview,
    };
    favouriteMovies.push(fav);
    window.localStorage.setItem('favourites', JSON.stringify(favouriteMovies));
  };

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="300"
          image={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          title="Contemplative Reptile"
        />
        <CardActions>
          <IconButton
            aria-label="add to favorites"
            onClick={() => handleFavourites(movie)}
          >
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <BookmarkIcon />
          </IconButton>
        </CardActions>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {movie.title}
          </Typography>

          <Typography variant="body2" color="textSecondary" component="p">
            {movie.overview}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}