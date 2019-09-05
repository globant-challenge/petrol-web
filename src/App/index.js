import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './styles.scss';
import NavbarComponent from '../NavbarComponent';
// import Login from '../Login';

function App({ children, user }) {
  return (
    // <div className="container">
    //   {user && user.email ? (
      <Fragment>
        <NavbarComponent />
        <main>
          {children}
        </main>
      </Fragment>
      //   ) : (
      //     <Login />
      //   )
      // }
    // </div>
  );
}

App.propTypes = {
  user: PropTypes.object,
};

const mapStateToProps = ({ login: { user } }) => ({ user });

export default connect(mapStateToProps)(App);
// export default App;