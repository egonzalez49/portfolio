import React from 'react';

import Skills from './Skills';

const AboutContainer = () => {
  return (
    <div id="about" className="about-container">
      <div className="header">
        <h2 className="header-text">about me</h2>
      </div>
      <p className="about-text">
        i am currently attending the Georgia Institute of Technology (Go
        Jackets!) to obtain a bachelor's degree in computer science. my expected
        graduation date is May 2020.
      </p>
      <p className="about-text">
        i enjoy creating full-stack web apps and also creating mobile apps with
        an emphasis on design. when i first began programming in high school, i
        absolutely despised web development, but after discovering React, i did
        a complete 180 and now thoroughly love it!
      </p>
      {/* <p className="about-text">
        in my free time when i am not programming, i love playing video games
        and watching t.v. shows and movies!
      </p> */}

      <Skills />
    </div>
  );
};

export default AboutContainer;
