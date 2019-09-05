import React from 'react';
import { connect } from 'react-redux';
import WeatherWidget from '../WeatherWidget';
import BarrelWidget from '../BarrelWidget';
import ActionWidget from '../ActionsWidget';
import ActionsChart from '../ActionsChart';

import './styles.scss';

function Dashboard({ data, categories }) {
  return (
    <div className="dashboard">
      <WeatherWidget />
      {data && <ActionsChart data={data} categories={categories} />}
      <div className="dashboard__cards">
        <BarrelWidget />
        <ActionWidget />
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  categories: state.actionsWidget.categories,
  data: state.actionsWidget.data,
})

export default connect(mapStateToProps, null)(Dashboard);
