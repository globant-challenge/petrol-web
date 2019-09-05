import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Toast, ToastBody, ToastHeader } from 'reactstrap';

import './styles.scss';
import petrol from '../Assets/Icons/petrol.png';
import * as actions from './actions';

function Login ({ loginUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showToast, setShowToast] = useState(false);


  if (showToast) {
    setTimeout(() => setShowToast(false), 3000);
  }


  function handleSubmit() {
    const emailArray = email.split('@');
    const indexOf = emailArray.indexOf('@');
    const emailDomain = emailArray.slice(indexOf)[0];
    const typeUser = emailArray.slice(0, indexOf)[0];

    if (emailDomain === 'ecopetrol.com') {
      if (typeUser === 'admin') {
        // localStorage.setItem('user', JSON.stringify({
        //   email: email,
        //   password: password,
        //   isAdmin: true,
        // }));
        loginUser({
          email: email,
          password: password,
          isAdmin: true,
        });
      } else {
        // localStorage.setItem('user', JSON.stringify({
        //   email: email,
        //   password: password,
        //   isAdmin: false,
        // }));
        loginUser({
          email: email,
          password: password,
          isAdmin: false,
        });
      }
    } else {
      setShowToast(true);
    }
  }

  return (
    <div className="login">
      {showToast && (
        <div className="p-3 my-2 rounded login__toast">
          <Toast>
            <ToastHeader>
              Error
            </ToastHeader>
            <ToastBody>
              Tu email debe contener <strong>@ecopetrol.</strong><br/>
              Tu password debe ser mayor a 8 caracteres.
            </ToastBody>
          </Toast>
        </div>
      )}
      <div className="login__container">
        <div className="login__icon-container">
          <img className="login__icon" src={petrol} alt="app logo" />
        </div>
        <div className="login__input-container">
          <div className="login__input">
            <label htmlFor="input-email" className="login__input-label">Correo electrónico</label>
            <input
              className="login__input-component"
              id="input-email"
              minlength="8"
              onChange={(e) => setEmail(e.target.value)}
              required
              value={email}
            />
          </div>
          <div className="login__input">
            <label htmlFor="input-password" className="login__input-label">Contraseña</label>
            <input
              className="login__input-component"
              id="input-password"
              minlength="8"
              onChange={(e) => setPassword(e.target.value)}
              required
              type="password"
              value={password}
            />
          </div>
          <div className="login__button-container">
            <button className="login__button" onClick={handleSubmit}>Iniciar sesión</button>
          </div>
        </div>
      </div>
    </div>
  )
}

Login.propTypes = {
  userLogin: () => undefined,
};

Login.propTypes = {
  userLogin: PropTypes.func.isRequired,
};

export default connect(null, actions)(Login);