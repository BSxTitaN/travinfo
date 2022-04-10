import React from 'react';
import { useEffect, useRef } from "react";
import styled from "styled-components";
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab/Rating';

import mapStyles from '../../mapStyles';

function Map({ coords, places, setCoords, setBounds, setChildClicked, weatherData }) {
  const containerRef = useRef(null);
  const matches = useMediaQuery('(min-width:600px)');
  const handleScroll = () => {
    if (window.scrollY < window.innerHeight * 1.2) {
      containerRef.current.style.transform =
        "translateY(" + window.scrollY * 0.2 + "px)";
    }
  };

  useEffect(() => {
    const containerRefCurr = containerRef.current;
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <MapContainer ref={containerRef}>
    <GoogleMapReact
      bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
      defaultCenter={coords}
      center={coords}
      defaultZoom={14}
      margin={[0]}
      options={{ disableDefaultUI: false, zoomControl: true, styles: mapStyles }}
      className="mapgl-container"
      onChange={(e) => {
        setCoords({ lat: e.center.lat, lng: e.center.lng });
        setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
      }}
      onChildClick={(child) => setChildClicked(child)}
    >
      {places.length && places.map((place, i) => (
        <div className="markerContainer"
        lat={Number(place.latitude)}
        lng={Number(place.longitude)}
        key={i}>
            {!matches
              ? <LocationOnOutlinedIcon color="primary" fontSize="large" />
              : (
                <Paper elevation={3} className="paper">
                  <Typography className="typography" variant="subtitle2" gutterBottom> {place.name}</Typography>
                  <Rating name="read-only" size="small" value={Number(place.rating)} readOnly />
                </Paper>
              )}
          </div>
        ))}
        {weatherData?.list?.length && weatherData.list.map((data, i) => (
          <div key={i} lat={data.coord.lat} lng={data.coord.lon}>
            <img src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`} height="70px" alt='none' />
          </div>
        ))}
    </GoogleMapReact>
  </MapContainer>
  );
}

export default Map;

const MapContainer = styled.div`
  width: 100%;
  height: 90vh;
  z-index: 1;
  margin-bottom: -35vh;
  background: var(--gray);
  position: relative;
  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(to top, var(--light) 30%, transparent);
    z-index: 3;
    height: 20vh;
    pointer-events: none;
  }

  .paper {
      padding: 10px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 150px;
  }

  .markerContainer {
      position: absolute;
      transform: translate(-50%, -50%);
      z-index: 1;
      &:hover: {
          z-index: 2;
      }
  }

  @media (min-width: 48rem) {
    margin-bottom: -50vh;
    height: calc(100vh + 10rem);
  }
`;