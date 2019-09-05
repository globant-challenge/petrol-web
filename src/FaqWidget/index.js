import React, { Component } from 'react';
import { connect } from 'react-redux';
import FaqItem from '../FaqItem';

import { getFaqs } from './actions';
import './styles.scss';

class FaqWidget extends Component {

  componentDidMount() {
    const { getFaqs } = this.props;
    getFaqs();
  }

  render() {
    return (
      <div className="faq-widget">
        <FaqItem />
        <FaqItem />
        <FaqItem />
      </div>
    );
  }
}

export default connect(null, { getFaqs })(FaqWidget);