import React from 'react';

import Header from './Header';
import Links from './Links';
import CyclingWord from './CyclingWord';
import Quote from './Quote';
import Scroll from './Scroll';

const HomeContainer = () => {
  return (
    <div>
      <Header />
      <Links />
      <CyclingWord />
      <Quote />
      <Scroll />
    </div>
  );
};

export default HomeContainer;
