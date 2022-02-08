import React from 'react';
// import styled from 'styled-components';
import GoogleMapReact from 'google-map-react';
import useStyles from './styles';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOutinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab/Rating';


const Map = ({ setCoords, setBounds, coords}) => {
  const classes = useStyles();
  const isMobile = useMediaQuery('(min-width:600px)');


  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.MAPS_API_KEY }}
        defaultCenter={coords}
        center={coords}
        defaultZoom={14}
        margin={ [50, 50, 50, 50] }
        options={''}
        onChange={(e) => {
          // console.log(e)
          setCoords({lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={() => { '' }}
      >

      </GoogleMapReact>
    </div>
  );
};

export default Map;
