import React from 'react';

const DisplayFavourite = (props) => {
  const getFavourites = window.localStorage.getItem('favourites');
  const favourites = JSON.parse(getFavourites);
  console.log('local.......', props, favourites);

  return (
    <>
      {favourites.map((m) => (
        <p>
          {m.title} {m.overview}
        </p>
      ))}
    </>
  );
};

export default DisplayFavourite;
