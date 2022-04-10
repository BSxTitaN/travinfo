import React, { useState, useEffect } from 'react';
import { getPlacesData, getWeatherData } from '../api/travelApi';
import Travis from '../components/Naavbar/Header';
import Map from '../components/Map/Map';
import SearchResults from '../components/Map/SearchResults';
import Footer from '../components/Footer';

const SearchR = () => {
  const [type, setType] = useState('hotels');
  const [rating, setRating] = useState('');

  const [coords, setCoords] = useState({});
  const [bounds, setBounds] = useState(null);

  const [weatherData, setWeatherData] = useState([]);
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  const [places, setPlaces] = useState([]);

  const [autocomplete, setAutocomplete] = useState(null);
  const [childClicked, setChildClicked] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
      setCoords({ lat: latitude, lng: longitude });
    });
  }, []);

  useEffect(() => {
    const filtered = places.filter((place) => Number(place.rating) > rating);

    setFilteredPlaces(filtered);
  }, [rating]);

  useEffect(() => {
    if (bounds) {
      setIsLoading(true);

      getWeatherData(coords.lat, coords.lng)
        .then((data) => setWeatherData(data));

      getPlacesData(type, bounds.sw, bounds.ne)
        .then((data) => {
          setPlaces(data.filter((place) => place.name && place.num_reviews > 0));
          setFilteredPlaces([]);
          setRating('');
          setIsLoading(false);
        });
    }
  }, [bounds, type]);

  const onLoad = (autoC) => setAutocomplete(autoC);

  const onPlaceChanged = () => {
    const lat = autocomplete.getPlace().geometry.location.lat();
    const lng = autocomplete.getPlace().geometry.location.lng();

    setCoords({ lat, lng });
  };

  return (
    <>
    <Travis onPlaceChanged={onPlaceChanged} onLoad={onLoad}/>
    <main>
      <Map
              setChildClicked={setChildClicked}
              setBounds={setBounds}
              setCoords={setCoords}
              coords={coords}
              places={filteredPlaces.length ? filteredPlaces : places}
              weatherData={weatherData} 
      />
      <SearchResults
        isLoading={isLoading}
        childClicked={childClicked}
        places={filteredPlaces.length ? filteredPlaces : places}
        type={type}
        setType={setType}
        rating={rating}
        setRating={setRating} 
      />
    </main>
    <Footer />
    </>
  );
}

export default SearchR;
