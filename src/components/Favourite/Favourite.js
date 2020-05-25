import React, { useContext } from 'react';

import FavoriteIcon from '@material-ui/icons/Favorite';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import { StoreContext } from '../../provider/Provider';

export default function Favourite() {
  const { favourites } = useContext(StoreContext);

  return (
    <IconButton
    >
      <Badge badgeContent={String(favourites.length)} color="secondary" >
        <FavoriteIcon />
      </Badge>
    </IconButton>
  );
}
