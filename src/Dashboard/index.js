import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import WeatherWidget from '../WeatherWidget';
import BarrelWidget from '../BarrelWidget';
import ActionWidget from '../ActionsWidget';
import ActionsChart from '../ActionsChart';

function Dashboard({ historicals }) {
  return (
    <Fragment>
      <WeatherWidget />
      {historicals && <ActionsChart data={historicals} />}
      <BarrelWidget />
      <ActionWidget />
    </Fragment>
  );
}

const mapStateToProps = state => ({
  historicals: state.actionsWidget.historicals,
})

export default connect(mapStateToProps, null)(Dashboard);
