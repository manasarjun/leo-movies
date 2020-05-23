import React from 'react';
import { Badge, IconButton } from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';


export default function LoginIcon() {
  return (
    <IconButton color="inherit">
      <Badge color="secondary">
        <ExitToAppIcon />
      </Badge>
    </IconButton>
  );
}
