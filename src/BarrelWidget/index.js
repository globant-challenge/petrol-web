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
    const {
      price,
    } = this.props;
    return (
      <div className="barrel">
        <div className="barrel__title">
          Crudo Brent
        </div>
        <div className="barrel__price">
          USD ${price}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  price: state.barrelWidget.price,
})

export default connect(mapStateToProps, { getBarrelData })(BarrelWidget);