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
    const { faqs } = this.props;
    return (
      <div className="faq-widget">
        {faqs.map(faq => (
          <FaqItem
            question={faq.question}
            answer={faq.answer}
            id={faq.id}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  faqs: state.faqsWidget.faqs,
})

export default connect(mapStateToProps, { getFaqs })(FaqWidget);