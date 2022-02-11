import React from 'react';
import { Box, Typography, Button, CardMedia, CardContent, CardActions, Chip } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import Rating from '@material-ui/lab/Rating';
import LanguageIcon from '@material-ui/icons/Language';
import InfoIcon from '@material-ui/icons/Info';
import styled from 'styled-components';

import useStyles from './styles';

const PlaceDetails = ({ place, selected, refProp }) => {
  const classes = useStyles();

  if (selected) refProp?.current?.scrollIntoView({ behavior: "smooth", block: "start" })

  return (
    <CardContainer>
      <CardMedia
        style={{ height: 350 }}
        image={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
        title={place.name}
      />
      <CardContent>
        <Box display="flex" justifyContent="space-between" alignItems='flex-start'>
          <Typography gutterBottom variant="h6">{place.name}</Typography>
          <Box display="flex" flexDirection='column' marginTop='.2em'>
            <Rating value={Number(place.rating)} readOnly />
            <Typography style={{ marginLeft: '.35em' }} gutterBottom variant="subtitle2">{place.num_reviews} reviews</Typography>
          </Box>
        </Box>
        <Box display="flex" alignItems='center'>
          <Typography variant="subtitle1">Price: </Typography>
          <Typography style={{ margin: '0 .35em' }} gutterBottom variant="subtitle1">{place.price_level ? place.price_level : "No Price Info"}</Typography>
        </Box>
        {place?.cuisine?.map(({ name }) => (
          <Chip key={name} size="small" label={name} className={classes.chip} />
        ))}

        {place?.awards?.map((award) => (
          <Box my={1} display="flex" justifyContent={'space-between'}>
            <img src={award.images.small} alt={award.display_name} />
            <Typography variant="subtitle2" color="textSecondary">{award.display_name}</Typography>
          </Box>
        ))}
        {place?.address && (
          <Typography gutterBottom variant="body2" color="textSecondary" className={classes.subtitle}>
            <LocationOnIcon /> {place.address}
          </Typography>
        )}
        <Box display="flex" justifyContent="space-between" alignItems='flex-end'>
          {place?.phone && (
            <Typography gutterBottom variant="body2" color="textSecondary" className={classes.spacing}>
              <PhoneIcon /> {place.phone}
            </Typography>
          )}
          <Box display="flex">
            <Button size="small" color="primary" style={{ minWidth: 'fit-content' }} onClick={() => window.open(place.web_url, '_blank')}>
              <InfoIcon />
            </Button>
            <Button size="small" color="primary" style={{ minWidth: 'fit-content' }} onClick={() => window.open(place.website, '_blank')}>
              <LanguageIcon />
            </Button>
          </Box>
        </Box>
      </CardContent>
    </CardContainer >
  );
};

export default PlaceDetails;

const CardContainer = styled.div`
          box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
          border: 1px solid #e0e0e0;
          `;
