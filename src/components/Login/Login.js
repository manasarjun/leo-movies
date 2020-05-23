import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

export default function Login() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField label="Size" id="filled-size-normal" defaultValue="Normal" variant="filled" />
      </div>
      <div>
        <TextField label="Size" id="filled-size-normal" defaultValue="Normal" variant="filled" />
      </div>
    </form>
  );
}
