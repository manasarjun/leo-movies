import React from 'react';
import { InputBase } from '@material-ui/core';

export default function Search(props) {
  const { classes, handleOnChange } = props;

  return (
    <>
      <InputBase
        placeholder="Search…"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ 'aria-label': 'search' }}
        type="text"
        onChange={handleOnChange}
      />

    </>
  );
}
