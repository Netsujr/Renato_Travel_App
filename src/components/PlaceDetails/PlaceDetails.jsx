import React from 'react';
import { Box, Button, CardMedia, CardContent, Chip } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import Rating from '@material-ui/lab/Rating';
import LanguageIcon from '@material-ui/icons/Language';
import InfoIcon from '@material-ui/icons/Info';
import styled from 'styled-components';

const PlaceDetails = ({ place, selected, refProp }) => {

  if (selected) refProp?.current?.scrollIntoView({ behavior: "smooth", block: "start" })

  return (
    <CardContainer>
      <CardMedia
        style={{ height: 350 }}
        image={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
        title={place.name}
      />
      <CardContent>
        <NameRatingPrice>
          <NameRating>
            <h3>{place.name}</h3>
            <Box display="flex" flexDirection='column'>
              <h5>{place.num_reviews} reviews</h5>
              <Rating style={{ marginLeft: '-5px' }} value={Number(place.rating)} readOnly />
            </Box>
          </NameRating>
          <PriceChip>
            <h3>Price: </h3>
            <p style={{ margin: '0 .35em' }}>{place.price_level ? place.price_level : "No Price Info"}</p>
            <ChipContainer>
              {place?.cuisine?.map(({ name }) => (
                <Chip style={{margin: '3px 3px 3px 0'}} key={name} size="small" label={name}/>
              ))}
            </ChipContainer>
          </PriceChip>
        </NameRatingPrice>
        <LocationPhoneLinks>
          <Location>
            {place?.address && (
              <p>
                <LocationOnIcon /> {place.address}
              </p>
            )}
          </Location>
          <PhoneLinks>
            <Box display="flex">
              <Button size="small" color="primary" style={{ minWidth: 'fit-content' }} onClick={() => window.open(place.web_url, '_blank')}>
                <InfoIcon />
              </Button>
              <Button size="small" color="primary" style={{ minWidth: 'fit-content' }} onClick={() => window.open(place.website, '_blank')}>
                <LanguageIcon />
              </Button>
            </Box>
            {place?.phone && (
              <p>
                <PhoneIcon /> {place.phone}
              </p>
            )}
          </PhoneLinks>
        </LocationPhoneLinks>
      </CardContent>
    </CardContainer >
  );
};

export default PlaceDetails;

const CardContainer = styled.div`
        box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
        border: 1px solid #e0e0e0;

        h3 {
          margin: 2px 0px;
        }

        h5 {
          margin: 0;
        }

        `;
const NameRatingPrice = styled.div`

        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        margin-bottom: .5em;
        `;

const NameRating = styled.div`
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-left: 8px;
        `;

const PriceChip = styled.div`
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        `;


const ChipContainer = styled.div`
        display: flex;
        flex-wrap: wrap;
        margin-bottom: 1em;
        justify-content: flex-end;
        `;

const LocationPhoneLinks = styled.div`
        display: flex;
        justify-content: space-between;
        `;

const Location = styled.div`
        display: flex;
        max-width: 50%;

        p {
          margin: 0;
          display: flex;
          align-items: center;
        }
        `;

const PhoneLinks = styled.div`
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: flex-end;

        p {
          margin: 0;
          display: flex;
          align-items: center;
        }
        `;
