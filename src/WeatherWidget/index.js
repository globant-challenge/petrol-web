import React from 'react';

import cloudy from '../Assets/Icons/cloudy.png';
import './styles.scss';

function WeatherWidget() {
  return (
    <div className="weather-widget">
      <div className="weather-widget__container">
        <img src={cloudy} className="weather-widget__icon" alt="weather" />
        <h4 className="weather-widget__text">22º C - 45F</h4>
      </div>
    </div>
  );
}

export default WeatherWidget;