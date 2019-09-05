import React from 'react';
import { connect } from 'react-redux';
import WeatherWidget from '../WeatherWidget';
import BarrelWidget from '../BarrelWidget';
import ActionWidget from '../ActionsWidget';
import ActionsChart from '../ActionsChart';

import './styles.scss';

function Dashboard({ historicals }) {
  return (
    <div className="dashboard">
      <WeatherWidget />
      {historicals && <ActionsChart data={historicals} />}
      <div className="dashboard__cards">
        <BarrelWidget />
        <ActionWidget />
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  historicals: state.actionsWidget.historicals,
})

export default connect(mapStateToProps, null)(Dashboard);
