import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getBarrelData } from './actions';
import './styles.scss';

class BarrelWidget extends Component {

  componentDidMount() {
    const { getBarrelData } = this.props;
    getBarrelData();
  }

  render() {
    return (
      <div className="barrel">
        <div className="barrel__title">
          Crudo Brent
        </div>
        <div className="barrel__price">
          USD $60.40
        </div>
      </div>
    );
  }
}

export default connect(null, { getBarrelData })(BarrelWidget);