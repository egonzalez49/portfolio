import React from 'react';

import GithubIcon from '../../images/github-icon.svg';
import LinkedInIcon from '../../images/linkedin-icon.svg';

const Links = () => {
  return (
    <div>
      <ul className="links-container">
        <li>
          <a href="https://www.github.com/egonzalez49">
            <img className="links-icon" src={GithubIcon} alt="github" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/egonzalez49">
            <img className="links-icon" src={LinkedInIcon} alt="linkedin" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Links;
