import React, { useContext } from 'react';
import { Badge, IconButton } from '@material-ui/core';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import { StoreContext } from '../../provider/Provider';

export default function WatchList() {
  const { watchList } = useContext(StoreContext);

  return (
    <IconButton
    >
      <Badge badgeContent={String(watchList.length)} color="secondary">
        <BookmarkIcon />
      </Badge>
    </IconButton>
  );
}
