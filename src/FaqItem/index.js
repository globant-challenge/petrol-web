import React, { Component } from 'react';
import { Collapse } from 'reactstrap';

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
    const { question, answer } = this.props;
    return (
      <div>
        <div color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>
         {question}
        </div>
        <Collapse isOpen={this.state.collapse}>
          <div className="faq-item__container-content">
            {answer}
          </div>
        </Collapse>
      </div>
    );
  }
}

export default FaqItem;