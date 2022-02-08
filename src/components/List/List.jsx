import React, { useState } from 'react';
// import styled from 'styled-components';
import useStyles from './styles';
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';
import PlaceDetails from '../PlaceDetails/PlaceDetails';

const List = () => {
  const classes = useStyles();
  const [type, setType] = useState('Restaurants');
  const [rating, setRating] = useState('Rating');

  const places = [
    {name: 'Pizza Hut', rating: 4.5, location: 'New York, NY', type: 'restaurants'},
    {name: 'McDonalds', rating: 4.5, location: 'New York, NY', type: 'restaurants'},
    {name: 'Burger King', rating: 4.5, location: 'New York, NY', type: 'restaurants'},
    {name: 'Pizza Hut', rating: 4.5, location: 'New York, NY', type: 'restaurants'},
    {name: 'McDonalds', rating: 4.5, location: 'New York, NY', type: 'restaurants'},
    {name: 'Burger King', rating: 4.5, location: 'New York, NY', type: 'restaurants'},

];

  return (
    <div className={classes.container}>
      <Typography variant="h6">Restaurants, Hotels & Attractions</Typography>
      <FormControl className={classes.formControl}>
        <InputLabel>Type</InputLabel>
        <Select id='type' value={type} onChange={(event) => setType(event.target.value)}>
          <MenuItem value="restaurants">Restaurants</MenuItem>
          <MenuItem value="hotels">Hotels</MenuItem>
          <MenuItem value="attractions">Attractions</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel>Rating</InputLabel>
        <Select id="rating" value={rating} onChange={(event) => setRating(event.target.value)}>
          <MenuItem value={0}>All</MenuItem>
          <MenuItem value={3}>Above 3.0</MenuItem>
          <MenuItem value={4}>Above 4.0</MenuItem>
          <MenuItem value={4.5}>Above 4.5</MenuItem>
        </Select>
      </FormControl>
      <Grid container spacing={3} className={classes.list}>
        {places?.map((place, i) => (
          <Grid item key={i} xs={12}>
            <PlaceDetails place={place}/>
          </Grid>

        ))}
      </Grid>
    </div>
  );
};

export default List;
