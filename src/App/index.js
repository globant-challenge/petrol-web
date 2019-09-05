import React from 'react';

import './styles.scss';
import NavbarComponent from '../NavbarComponent';

function App({ children }) {
  return (
    <div className="container">
      <NavbarComponent />
      <main>
        {children}
      </main>
    </div>
  );
}

export default App;
