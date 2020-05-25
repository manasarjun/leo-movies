import React, { useState, useEffect, useContext } from 'react';
import Typography from '@material-ui/core/Typography';

import apicall from '../../utils/apicall';
import Movie from '../Movie/Movie';
import { StoreContext } from '../../provider/Provider';
import useStyles from '../../hooks/useStyles';

export default function Home() {
  const [trending, setTrending] = useState([]);
  const { favourites, watchList } = useContext(StoreContext);
  const classes = useStyles();

  useEffect(() => {
    async function fetchTrending() {
      const result = await apicall();
      setTrending(result.data.results);
    }
    fetchTrending();
  }, []);

  const renderHome = () => {
    return (<>
      <Typography variant="h5" component="h2" color='inherit' className={classes.alighHeading} >
        Trending Movies
      </Typography>
      {
        trending
          .filter((movie) => movie.poster_path && movie.title)
          .map((mov) => {
            let isFavourite = false;
            let isWatchList = false;

            const checkFavourite = favourites.filter((s) => s.id === mov.id);
            const checkWatchList = watchList.filter((s) => s.id === mov.id);

            if (checkFavourite.length === 1) {
              isFavourite = true;
            }
            if (checkWatchList.length === 1) {
              isWatchList = true;
            }
            return (<Movie key={mov.id} movie={mov} isFavourite={isFavourite} isWatchList={isWatchList} isTrending={true} />);
          })}
    </>);
  };

  return renderHome();
}
