/* eslint-disable no-undef */
import React from 'react';
import { AppBar } from '@material-ui/core';
import styled from 'styled-components';

import useStyles from './styles';
const Header = ({ setCoords }) => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <ToolBar>
        <h1 className={classes.title}>
          Travel Advisor
        </h1>
      </ToolBar>
    </AppBar>
  );
};

export default Header;

const ToolBar = styled.div`
  background-color: #d6fff8;
  display: flex;

  h1 {
    color: #3f51b5;
  }
  `;
