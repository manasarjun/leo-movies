import React from "react";

import FavoriteIcon from "@material-ui/icons/Favorite";
import Badge from "@material-ui/core/Badge";
import IconButton from "@material-ui/core/IconButton";

export const Favourite = () => {
  return (
    <IconButton aria-label="show 4 new mails" color="inherit">
      <Badge badgeContent={4} color="secondary">
        <FavoriteIcon />
      </Badge>
    </IconButton>
  );
};
