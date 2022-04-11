/* eslint-disable consistent-return */
import axios from 'axios';

export const getPlacesData = async (type, sw, ne) => {
  try {
    const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
      params: {
        bl_latitude: sw.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
        tr_latitude: ne.lat,
        currency: 'INR',
        checkin: '2022-04-30',
      },
      headers: {
        'x-rapidapi-key': process.env.REACT_APP_RAPID_API_TRAVEL_API_KEY,
        'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
      },
    });
    // var usefulData = {}
    // for(let i =0; i < data.length; i++){
    //   let name = data[i]['name']
    //   var impdata = data[i]['hac_offers']['offers'];
    //   usefulData[name] = impdata;
    // }
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getWeatherData = async (lat, lng) => {
  try {
    if (lat && lng) {
      const { data } = await axios.get('https://community-open-weather-map.p.rapidapi.com/find', {
        params: { lat, lon: lng },
        headers: {
          'x-rapidapi-key': process.env.REACT_APP_RAPID_API_WEATHER_API_KEY,
          'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
        },
      });

      return data;
    }
  } catch (error) {
    console.log(error);
  }
};
