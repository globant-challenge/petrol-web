import React from 'react';
import FaqItem from '../FaqItem';

import './styles.scss';

function FaqWidget() {
  return (
    <div className="faq-widget">
      <FaqItem />
      <FaqItem />
      <FaqItem />
    </div>
  );
}

export default FaqWidget;