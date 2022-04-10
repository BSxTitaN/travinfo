import React from 'react';
import styled from "styled-components";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import Rating from '@material-ui/lab/Rating';
import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip } from '@material-ui/core';

const ResultCard = ({ place, selected, refProp, offers }) => {
    if (selected) refProp?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    
    return (
      <Carddiv>
        <Card elevation={3} className="card">
      <CardMedia
        image={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
        title={place.name}
        className='photo'
      />
      <CardContent className='content'>
        <Typography gutterBottom variant="h5">{place.name}</Typography>
        <Box display="flex" justifyContent="space-between" my={2} className='box'>
          <Rating name="read-only" value={Number(place.rating)} readOnly />
          <Typography className='typo' component="legend">{place.num_reviews} review{place.num_reviews > 1 && 's'}</Typography>
        </Box>
        <Box display="flex" justifyContent="space-between" className='box'>
          <Typography component="legend">Price</Typography>
          <Typography gutterBottom variant="subtitle1">
            {place.price}
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between" className='box'>
          <Typography component="legend">Ranking</Typography>
          <Typography gutterBottom variant="subtitle1">
            {place.ranking}
          </Typography>
        </Box>
        {place?.awards?.map((award) => (
          <Box display="flex" justifyContent="space-between" my={1} alignItems="center" className='box1'>
            <img src={award.images.small} alt='none'/>
            <Typography variant="subtitle2" color="textSecondary">{award.display_name}</Typography>
          </Box>
        ))}
        {place?.cuisine?.map(({ name }) => (
          <Chip key={name} size="small" label={name} className="chip" />
        ))}
        {place.address && (
          <Typography  gutterBottom variant="body2" color="textSecondary" className="subtitle">
            <LocationOnIcon />{place.address}
          </Typography>
        )}
        {place.phone && (
          <Typography variant="body2" color="textSecondary" className="spacing">
            <PhoneIcon /> {place.phone}
          </Typography>
        )}
        {place?.hac_offers?.offers?.map((offer) => (
            <Button className="btn-l" size="small" onClick={() => window.open(offer.link, '_blank')}>
                <img className='logos' src={offer.logo} alt="" />
            </Button>
        ))}
        {place.web_url && (
              <CardActions className='link'>
              <Button className="btn-t" size="small" onClick={() => window.open(place.web_url, '_blank')}>
                Trip Advisor
              </Button>
              <Button className="btn-b" size="small" onClick={() => window.open(place.website, '_blank')}>
                Website
              </Button>
            </CardActions>
      )}
      </CardContent>
    </Card>
    </Carddiv>
      );
    }

export default ResultCard;
    
const Carddiv = styled.div`
.logos {
  width: 6vw;
  height: 5vh;
}
.card {
    border-radius: 1rem;
    position: relative;
    display: flex;
    width: 75vw;
    background: var(--light);
}
.photo{
  width: 25vw;
  height: 50vh;
  border-radius: 2vh;
  margin: 1rem;
}
.content {
  width: 50vw;
}
.btn-l {
  margin-right: 0.5vw;
  border-radius: 3vh;
  transition: .2s ease-in-out;
  background: var(--white);
  padding: 0 1vw 0 1vw;
  margin-top: 2vh;
}
.link {
  margin-top: 1vh;
  font-family: "Product Sans";
  font-weight: bold;
}
.link .btn-t {
  width: 10vw;
  height: 6vh;
  border-radius: 30px;
  background: #00AF87;
}
.link .btn-b {
  width: 7vw;
  height: 6vh;
  border-radius: 30px;
  background: #24a0ed;
  color: #ffffff;
}
    .chip {
      margin: 5px 5px 5px 0;
    }
    .subtitle {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 10px;
    }
    .spacing{
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    @media (max-width: 36rem) {
      display: flex;
    gap: 1.5rem;
    .card {
    width: 95vw;
    display: initial;
  }
  .logos {
    width: 15vw;
    height: 3vh;    
  }
  .btn-l {
  margin-right: 7vw;
  padding: 0 2vw 0 2vw;
  margin-top: 2vh;
}
  .photo{
    width: 90vw;
    height: 40vh;
    border-radius: 0vh;
    margin: 0rem;
  }
  .box1 {
    display: none;
  }
  .content {
    width: 87vw;
  }
  .link {
    justify-content: space-between;
    margin-top: 3vh;
  }
  .link .btn-t {
    width: 30vw;
    height: 5vh;
    border-radius: 5px;
  }
  .link .btn-b {
    width: 20vw;
    height: 5vh;
    border-radius: 5px;
  }
    }
    @media (min-width: 36rem) and (max-width: 62.5rem) {
    display: flex;
    gap: 1.5rem;
    .card {
    width: 85vw;
    display: initial;
  }
  .logos {
    width: 13vw;    
  }
  .btn-l {
  margin-right: 2vw;
  padding: 0 2vw 0 2vw;
  margin-top: 2vh;
}
  .photo{
    width: 85vw;
    height: 30vh;
    border-radius: 0vh;
    margin: 0rem;
  }
  .content {
    width: 82vw;
  }
  .link {
    justify-content: space-between;
    margin-top: 3vh;
  }
  .link .btn-t {
    width: 20vw;
    height: 5vh;
    border-radius: 10px;
  }
  .link .btn-b {
    width: 15vw;
    height: 5vh;
    border-radius: 10px;
  }
}
`