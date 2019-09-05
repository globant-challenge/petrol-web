import React, { Fragment } from 'react';

import WeatherWidget from '../WeatherWidget';
import BarrelWidget from '../BarrelWidget';

function Dashboard() {
  return (
    <Fragment>
      <WeatherWidget />
      <BarrelWidget />
    </Fragment>
  );
}

export default Dashboard;
