import React from 'react';
import { Badge, IconButton } from '@material-ui/core';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import useStyles from '../../hooks/useStyles';

export default function WatchList() {
  const classes = useStyles();

  return (
    <IconButton
      className={classes.textColor}
    >
      <Badge badgeContent={17} color="secondary">
        <BookmarkIcon />
      </Badge>
    </IconButton>
  );
}
