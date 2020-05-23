import React from 'react';
import { Badge, IconButton } from '@material-ui/core';


export default function RegisterIcon() {
  return (
    <IconButton color="inherit">
      <Badge color="secondary">
        <img src={require('./user-plus.svg')} />
      </Badge>
    </IconButton>
  );
}
