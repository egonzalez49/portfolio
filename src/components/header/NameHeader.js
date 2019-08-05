import React from 'react';
import LinkedInIcon from '../../images/linkedin-icon.svg';
import GithubIcon from '../../images/github-icon.svg';

const NameHeader = () => {
  return (
    <div className="header-container">
      <h2 className="header-name">elmer gonzalez</h2>
      <div className="header-icon-links">
        <ul className="icon-container">
          <li>
            <img src={GithubIcon} alt="github logo" />
          </li>
          <li>
            <img src={LinkedInIcon} alt="linkedin logo" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NameHeader;
