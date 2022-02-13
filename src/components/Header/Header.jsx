/* eslint-disable no-undef */
import React from 'react';
import { AppBar } from '@material-ui/core';
import styled from 'styled-components';
// import { Autocomplete } from '@react-google-maps/api';
// import SearchIcon from '@material-ui/icons/Search';

import useStyles from './styles';
const Header = ({ setCoords }) => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <ToolBar className={classes.toolbar}>
        <h1 className={classes.title}>
          Travel Advisor
        </h1>
      </ToolBar>
    </AppBar>
  );
};

export default Header;

const ToolBar = styled.div`
  background-color: #fff;
  display: flex;
  `;
