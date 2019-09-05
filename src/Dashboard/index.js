import React, { Fragment } from 'react';

import WeatherWidget from '../WeatherWidget';
import BarrelWidget from '../BarrelWidget';
import ActionWidget from '../ActionsWidget';

function Dashboard() {
  return (
    <Fragment>
      <WeatherWidget />
      <BarrelWidget />
      <ActionWidget />
    </Fragment>
  );
}

export default Dashboard;
