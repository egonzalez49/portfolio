import React from 'react';

import ScrollIcon from '../../images/caret-down.svg';

const Scroll = () => {
  return (
    <div className="scroll-container hide-mobile">
      <img src={ScrollIcon} alt="scroll animation" />
    </div>
  );
};

export default Scroll;
