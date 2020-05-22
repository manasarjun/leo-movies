import React from "react";
import { Badge, IconButton } from "@material-ui/core";
/* import Badge from "@material-ui/core/Badge";
import IconButton from "@material-ui/core/IconButton"; */
import BookmarkIcon from "@material-ui/icons/Bookmark";

export default function WatchList() {
  return (
    <IconButton aria-label="show 17 new notifications" color="inherit">
      <Badge badgeContent={17} color="secondary">
        <BookmarkIcon />
      </Badge>
    </IconButton>
  );
}
