import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { geolocated } from "react-geolocated";

import './styles.scss';
import * as actions from './actions';
import cloudy from '../Assets/Icons/cloudy.png';

function WeatherWidget({ coords, getWeather }) {

  function handleUpdate() {
    if (coords) {
      getWeather({
        lat: coords.latitude,
        lon: coords.longitude,
      });
    }
  }

  useEffect(handleUpdate, [coords]);

  return (
    <div className="weather-widget">
      <div className="weather-widget__container">
        <img src={cloudy} className="weather-widget__icon" alt="weather" />
        <h4 className="weather-widget__text">22º C - 45F</h4>
      </div>
    </div>
  );
}

WeatherWidget.propTypes = {
  getWeather: PropTypes.func.isRequired,
  coords: {},
};

export default (connect(null, actions)(geolocated({
  positionOptions: {
      enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000,
})(WeatherWidget)));