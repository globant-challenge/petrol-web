import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getActions } from './actions';
import './styles.scss';

class ActionsWidget extends Component {

  componentDidMount() {
    const { getActions } = this.props;
    getActions();
  }

  render() {
    const {
      price,
    } = this.props;
    return (
      <div className="actions">
        <div className="actions__title">
          Acción Ecopetrol
        </div>
        <div className="actions__price">
          <div className="actions__price-type">NYSE</div>
          <div className="actions__price-price">USD ${price}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  price: state.actionsWidget.price,
})

export default connect(mapStateToProps, { getActions })(ActionsWidget);