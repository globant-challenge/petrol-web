import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Collapse } from 'reactstrap';
import downArrow from '../Assets/Icons/arrow-down.svg';
import upArrow from '../Assets/Icons/arrow-up.svg';
import trash from '../Assets/Icons/trash-outline.svg';
import { deleteFaqs } from '../FaqWidget/actions';

import './styles.scss';

class FaqItem extends Component {
  constructor(props) {
    super(props);
    this.state = { collapse: false };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(state => ({ collapse: !state.collapse }));
  }

  render() {
    const { question, answer, deleteFaqs, id } = this.props;
    const { collapse } = this.state;
    return (
      <div>
        <div
          className="faq-item__question"
          color="primary"
          onClick={this.toggle}
          style={{ marginBottom: '1rem' }
        }>
         {question}
         <img
            className="faq-item__question-trash"
            src={trash}
            alt=""
            height={20}
            width={20}
            onClick={() => deleteFaqs(id)}
          />
         <img
            className="faq-item__question-arrow"
            src={collapse ? upArrow : downArrow}
            alt=""
            height={20}
            width={20}
          />
        </div>
        <Collapse isOpen={collapse}>
          <div className="faq-item__container-content">
            {answer}
          </div>
        </Collapse>
      </div>
    );
  }
}

const actions = {
  deleteFaqs,
};

export default connect(null, {...actions})(FaqItem);