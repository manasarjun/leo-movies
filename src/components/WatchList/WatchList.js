import React, { useContext } from 'react';
import { Badge, IconButton } from '@material-ui/core';
import BookmarkIcon from '@material-ui/icons/Bookmark';

import useStyles from '../../hooks/useStyles';
import { StoreContext } from '../../provider/Provider';

export default function WatchList() {
  const classes = useStyles();
  const { watchList } = useContext(StoreContext);

  return (
    <IconButton
      className={classes.textColor}
    >
      <Badge badgeContent={String(watchList.length)} color="secondary">
        <BookmarkIcon />
      </Badge>
    </IconButton>
  );
}
