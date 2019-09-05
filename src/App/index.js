import React, { Fragment } from 'react';

import './styles.scss';
import NavbarComponent from '../NavbarComponent';
// import Login from '../Login';

function App({ children }) {
  return (
      <Fragment>
        <NavbarComponent />
        <main>
          {children}
        </main>
      </Fragment>
  );
}

export default App;