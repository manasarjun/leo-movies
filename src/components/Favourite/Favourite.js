import React from 'react';

import FavoriteIcon from '@material-ui/icons/Favorite';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';

export default function Favourite() {
  const handleClick = () => {
    console.log('hello....');
    console.log(JSON.parse(window.localStorage.getItem('favourites')));
  };

  return (
    <IconButton
      aria-label="show 4 new mails"
      color="inherit"
      onClick={() => handleClick()}
    >
      <Badge badgeContent={4} color="secondary">
        <FavoriteIcon />
      </Badge>
    </IconButton>
  );
};
