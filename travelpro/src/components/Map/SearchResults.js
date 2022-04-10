import React, { useState, useEffect, createRef } from 'react';
import ResultCard from './ResultCard';
import styled from "styled-components";
import { CircularProgress, Grid, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';

const SearchResults = ({ places, type, setType, rating, setRating, childClicked, isLoading }) => {
    const [elRefs, setElRefs] = useState([]);
  
    useEffect(() => {
      setElRefs((refs) => Array(places.length).fill().map((_, i) => refs[i] || createRef()));
    }, [places]);

    return (
    <ResultsDiv className="hero">
          {isLoading ? (
        <div className= "loading">
          <CircularProgress size="5rem" />
        </div>
      ) : (
    <div className="inner">
        <h1>Results for your Search</h1>

        <div className='mt-5'>
        <FormControl className="formControl">
            <InputLabel id="type">Type</InputLabel>
            <Select id="type" value={type} onChange={(e) => setType(e.target.value)}>
              <MenuItem value="hotels">Hotels</MenuItem>
              <MenuItem value="restaurants">Restaurants</MenuItem>
              <MenuItem value="attractions">Attractions</MenuItem>
            </Select>
          </FormControl>
          <FormControl className="formControl1">
            <InputLabel id="rating">Rating</InputLabel>
            <Select id="rating" value={rating} onChange={(e) => setRating(e.target.value)}>
              <MenuItem value="">All</MenuItem>
              <MenuItem value="3">Above 3.0</MenuItem>
              <MenuItem value="4">Above 4.0</MenuItem>
              <MenuItem value="4.5">Above 4.5</MenuItem>
            </Select>
          </FormControl>
          </div>

          <Grid container spacing={5} className="results">
            {places?.map((place, i) => (
              <Grid ref={elRefs[i]} key={i} item xs={12}>
                <ResultCard selected={Number(childClicked) === i} refProp={elRefs[i]} place={place} />
              </Grid>
            ))}
          </Grid>
      </div>)}
    </ResultsDiv>
    )
}

export default SearchResults;


const ResultsDiv = styled.section`
.formControl{
  width: 20vw;
  margin-right: 5vw;
}
.formControl1{
  width: 20vw;
}
.loading {
    height: '600px';
    display: 'flex';
    justify-content: 'center'; 
    align-items: 'center';
}
  height: fit-content;
  padding: 3rem var(--sidePadding);
  z-index: 1;
  position: relative;
  border-radius: 1.5rem 1.5rem 0 0;
  box-shadow: 0 -1rem 2rem -1rem #0003;
  background: var(--light);
  max-width: calc(var(--containerWidth) + 2 * var(--sidePadding));
  margin: 0 auto;

  .inner {
    display: flex;
    flex-direction: column;
  }
  h1 {
    font-weight: 800;
    font-size: clamp(1.5rem, 3vw, 2rem);
    line-height: 1.2;
    margin-top: 1rem;
  }

  .results {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
    padding: var(--sidePadding) 0;

    @media (min-width: 48rem) {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 36rem) {
    &::before {
      position: absolute;
      content: "";
      background: var(--dark);
      width: 3rem;
      height: 3px;
      border-radius: 3px;
      opacity: 0.25;
      top: 0.75rem;
      left: calc(50% - 1.5rem);
    }
    .details {
      font-size: 0.85rem;
    }
  }
`;
