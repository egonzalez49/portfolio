import React from 'react';

import Navbar from './navbar/Navbar';
import HomeContainer from './home/HomeContainer';
import AboutContainer from './about/AboutContainer';
import ProjectContainer from './project/ProjectContainer';

const App = () => {
  return (
    <>
      <div className="site-container">
        <Navbar />
        <HomeContainer />
        <AboutContainer />
        <ProjectContainer />
      </div>
    </>
  );
};

export default App;
