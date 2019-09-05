import React from 'react';

import nublado from '../Assets/Icons/nublado.png';
import './styles.scss';

function WeatherWidget() {
  return (
    <div className="weather-widget">
      <div className="weather-widget__container">
        <img src={nublado} className="weather-widget__icon" alt="weather" />
        <h4 className="weather-widget__text">22º C - 45F</h4>
      </div>
    </div>
  );
}

export default WeatherWidget;