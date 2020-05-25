import React from 'react';
import PropTypes from 'prop-types';
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

Search.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  handleOnChange: PropTypes.func.isRequired,
};
