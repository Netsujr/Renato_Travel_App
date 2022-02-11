/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab/Rating';
import mapStyles from './mapStyles';
import styled from 'styled-components';

const Map = ({ coords, places, setCoords, setBounds, setChildClicked, weatherData }) => {
  const matches = useMediaQuery('(min-width:600px)');


  return (

    <MapContainer>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
        defaultCenter={coords}
        center={coords}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={{ disableDefaultUI: true, zoomControl: true, styles: mapStyles }}
        onChange={(e) => {
          setCoords({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={(child) => setChildClicked(child)}
      >
        {places.length && places.map((place, i) => (
          <MarkerContainer
            lat={Number(place.latitude)}
            lng={Number(place.longitude)}
            key={i}
          >
            {!matches
              ? <LocationOnOutlinedIcon color="primary" fontSize="large" />
              : (
                <LocationOnOutlinedIcon fontSize="large" />
                // <Card>
                //   <Typography className={classes.typography} style={{ fontSize: '.7rem' }} gutterBottom> {place.name}</Typography>
                //   <Rating name="read-only" size="small" value={Number(place.rating)} readOnly />
                //   <img
                //     src={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
                //   />
                // </Card>
              )}
          </MarkerContainer>
        ))}
        {weatherData?.list?.length && weatherData.list.map((data, i) => (
          <div key={i} lat={data.coord.lat} lng={data.coord.lon}>
            <img src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`} height="70px" />
          </div>
        ))}
      </GoogleMapReact>
    </MapContainer>
  );
};


export default Map;

const MapContainer = styled.div`
          height: 90vh;
          width: 100%;
          `;

const MarkerContainer = styled.div`
          position: 'absolute';
          transform: 'translate(-50%, -50%)';
          z-index: 1;

          &:hover: {
            z-index: 2;
            color: red;
          }
`;


const Card = styled.div`
          padding: 10px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          width: 100%;
          background: #fff;
          box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
          border-radius: 5px;
          font-size: .2rem;

          img {
            width: 100%;
            height: auto;
            object-fit: cover;
          }
          `;
