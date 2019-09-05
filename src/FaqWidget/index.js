import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Input } from 'reactstrap';
import FaqItem from '../FaqItem';
import circle from '../Assets/Icons/circle.svg';

import { getFaqs } from './actions';
import './styles.scss';

class FaqWidget extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      newAsk: undefined,
      newAnswer: undefined,
    };
  }

  componentDidMount() {
    const { getFaqs } = this.props;
    getFaqs();
  }

  render() {
    const { faqs } = this.props;
    const { open, newAsk, newAnswer } = this.state;
    return (
      <div className="faq-widget">
        {faqs.map(faq => (
          <FaqItem
            question={faq.question}
            answer={faq.answer}
            id={faq.id}
          />
        ))}
        <div className="faq-widget__add">
          <img
            className="faq-widget__add-img"
            src={circle}
            alt=""
            height={20}
            width={20}
            onClick={(e) => this.handleDelete(e)}
          />
          <div
            className="faq-widget__add-text"
            onClick={() => this.setState({ open: true })}
          >
            Agregar pregunta
          </div>
          <Modal isOpen={open} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Agregar FAQ</ModalHeader>
          <ModalBody>
              <Form>
              <FormGroup>
                <Input
                  type="text"
                  placeholder="Pregunta"
                  onChange={ev => this.setState({
                    newAsk: ev.target.value
                  })}  
                />
              </FormGroup>
              <FormGroup>
                <Input
                  type="textarea"
                  name="text"
                  placeholder="Respuesta"
                  onChange={ev => this.setState({
                    newAnswer: ev.target.value
                  })}  
                />
                </FormGroup>
              </Form>
          </ModalBody>
          <ModalFooter>
            <Button
              disabled={!(newAsk && newAnswer)}
              color="primary"
              onClick={() => this.setState({ open: !this.state.open })}>Agregar</Button>{' '}
            <Button
              color="secondary"
              onClick={() => this.setState({ open: !this.state.open })}>Cancelar</Button>
          </ModalFooter>
        </Modal>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  faqs: state.faqsWidget.faqs,
})

export default connect(mapStateToProps, { getFaqs })(FaqWidget);