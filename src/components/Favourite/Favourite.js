import React from 'react';

import FavoriteIcon from '@material-ui/icons/Favorite';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import useStyles from '../../hooks/useStyles';
import { getStore } from '../../utils/store';

export default function Favourite() {
  const classes = useStyles();

  const displayCount = () => {
    const count = getStore('favourites').length;
    return String(count);
  };

  return (
    <IconButton
      className={classes.textColor}
    >
      <Badge badgeContent={displayCount()} color="secondary" >
        <FavoriteIcon />
      </Badge>
    </IconButton>
  );
}
