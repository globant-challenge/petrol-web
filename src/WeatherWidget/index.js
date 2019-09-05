import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { geolocated } from "react-geolocated";

import './styles.scss';
import * as actions from './actions';
import cloudy from '../Assets/Icons/cloudy.png';
import {
  getName, 
  getMain,
  // getWeather,
} from './selectors';

function WeatherWidget({
  // coords,
  getWeather,
  main,
  name,
  // weather,
}) {
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);

  function handleUpdate() {
    // if (coords) {
    //   getWeather({
    //     lat: coords.latitude,
    //     lon: coords.longitude,
    //   });
    // }
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(displayLocationInfo);
    }

    function displayLocationInfo(position) {
      const lng = position.coords.longitude;
      const lat = position.coords.latitude;
      setLat(lat);
      setLng(lng);
      getWeather({
        lat: lat,
        lon: lng,
      });
    }
  }

  useEffect(handleUpdate, [lat || lng]);

  const city = name;
  const celcius = main && (main.temp - 273.15).toFixed(2);
  const fahrenheit = main && ((main.temp - 273.15) * 9/5 + 32).toFixed(2);
  // const weatherToShow = weather && weather[0].main;

  return (
    <div className="weather-widget">
      <div className="weather-widget__container">
        <div className="weather-widget__temp-container">
          <img src={cloudy} className="weather-widget__icon" alt="weather" />
          {/* El clima esta {weatherToShow} */}
          <div className="weather-widget__temp-container">
            <h4 className="weather-widget__temp">{celcius} C</h4>
            <h5 className="weather-widget__subtemp">/ {fahrenheit}F</h5>
          </div>
        </div>
        <div className="weather-widget__text-container">
          <h4 className="weather-widget__text">Estás en</h4>
          <h5 className="weather-widget__subtext">{city}</h5>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  name: getName(state),
  main: getMain(state),
  // weather: getWeather(state),
});

WeatherWidget.propTypes = {
  // coords: {},
  main: {},
  name: '',
  weather: [],
};

WeatherWidget.propTypes = {
  // coords: PropTypes.object,
  getWeather: PropTypes.func.isRequired,
  main: PropTypes.object,
  name: PropTypes.string,
  weather: PropTypes.array,
};

// export default (connect(mapStateToProps, actions)(geolocated({
//   positionOptions: {
//       enableHighAccuracy: false,
//   },
//   userDecisionTimeout: 5000,
// })(WeatherWidget)));
export default connect(mapStateToProps, actions)(WeatherWidget);