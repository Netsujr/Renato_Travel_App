import React from 'react';
// import styled from 'styled-components';
import GoogleMapReact from 'google-map-react';
import useStyles from './styles';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOutinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab/Rating';


const Map = ({ setCoords, setBounds, coords, places }) => {
  const classes = useStyles();
  const isDesktop = useMediaQuery('(min-width:600px)');


  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
        defaultCenter={coords}
        center={coords}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={''}
        onChange={(e) => {
          // console.log(e)
          setCoords({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={() => { '' }}
      >
        {places?.map((place, i) => (
          <div
            className={classes.marker}
            lat={Number{place.latitude}}
        lng={Number{place.longitude}}
        key={i}
        style={{}}
      >

        {
          isDesktop ?
            <LocationOutinedIcon color={primary} style={{ fontSize: '2rem' }} />
            :
            <Paper elevation={3} className={classes.paper}>
              <Typography className={classes.typography} variant='subtitle2' gutterBottom>
                {place.name}
              </Typography>
              <img className={classes.pointer} src={place.image_url} alt={place.name}
                src={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
                alt={place.name}

              />

            </Paper>
        }
    </div>
  ))
}

      </GoogleMapReact >
      </div >
      );
    };

export default Map;
