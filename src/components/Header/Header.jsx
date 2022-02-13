/* eslint-disable no-undef */
import React from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
// import { Autocomplete } from '@react-google-maps/api';
// import SearchIcon from '@material-ui/icons/Search';

import useStyles from './styles';
const Header = ({ setCoords }) => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <h1 className={classes.title}>
          Travel Advisor
        </h1>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
