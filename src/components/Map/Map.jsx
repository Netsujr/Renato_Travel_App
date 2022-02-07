import React from 'react';
import styled from 'styled-components';
import GoogleMapReact from 'google-map-react';
import useStyles from './styles';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LoccationOutinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab/Rating';


const Map = () => {
  const classes = useStyles();
  const isMobile = useMediaQuery('(min-width:600px)');
  const coords = { lat: 0, lng: 0 };

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyCjWT17GUQKLm6fx9bLBuTDqQokbNr2Bkg' }}
        defaultCenter={coords}
        center={coords}
        defaultZoom={14}
        margin={50, 50, 50, 50}
        options={''}
        onChange={() => { '' }}
        onChildClick={() => { '' }}
      >

      </GoogleMapReact>
    </div>
  );
};

export default Map;
