import React from 'react';
import { getStore } from '../../utils/store';

const DisplayFavourite = () => {
  const renderFavourites = () => {
    const movies = getStore('favourites');
    if (!movies) {
      return <p>No favourites yet !</p>;
    }
    return (
      <>
        {getStore('favourites').map((m) => (
          <p>
            {m.title} {m.overview}
          </p>
        ))}
      </>
    );
  };
  return renderFavourites();
};

export default DisplayFavourite;
