import React, { useState } from 'react';
// import styled from 'styled-components';
import useStyles from './styles';
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';


const List = () => {
  const classes = useStyles();
  const [type, setType] = useState('Restaurants');
  const [rating, setRating] = useState('Rating');

  const places = [
    {name: 'Pizza Hut', rating: 4.5, location: 'New York, NY', type: 'restaurants'},
    {name: 'McDonalds', rating: 4.5, location: 'New York, NY', type: 'restaurants'},
];

  return (
    <div className={classes.container}>
      <Typography variant="h6">Restaurants, Hotels & Attractions</Typography>
      <FormControl className={classes.formControl}>
        <InputLabel>Type</InputLabel>
        <Select value={type} onChange={(event) => setType(event.target.value)}>
          <MenuItem value="restaurants">Restaurants</MenuItem>
          <MenuItem value="hotels">Hotels</MenuItem>
          <MenuItem value="attractions">Attractions</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel>Rating</InputLabel>
        <Select value={rating} onChange={(event) => setRating(event.target.value)}>
          <MenuItem value={0}>All</MenuItem>
          <MenuItem value={3}>Above 3.0</MenuItem>
          <MenuItem value={4}>Above 4.0</MenuItem>
          <MenuItem value={4.5}>Above 4.5</MenuItem>
        </Select>
      </FormControl>
      <Grid container spacing={3} className={classes.list}>
        {places?.map((place, i) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={i}>
            {/* <CARD/> */}
          </Grid>

        ))}
      </Grid>
    </div>
  );
};

export default List;
