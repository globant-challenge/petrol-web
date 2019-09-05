import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { geolocated } from "react-geolocated";

import './styles.scss';
import * as actions from './actions';
import cloudy from '../Assets/Icons/cloudy.png';

function WeatherWidget({ getWeather }) {
  // function handleMount() {
  //   getWeather();
  // }

  // useEffect(handleMount, []);

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
};

export default connect(null, actions)(WeatherWidget);