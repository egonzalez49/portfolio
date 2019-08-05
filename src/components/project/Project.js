import React from 'react';

const Project = ({ project }) => {
  const renderButtons = () => {
    return (
      <div className="project-links">
        <a href={codeLink} className="button project-button">
          code
        </a>
        {liveLink ? (
          <a href={liveLink} className="button project-button-alt">
            demo
          </a>
        ) : null}
      </div>
    );
  };

  const { title, description, image, codeLink, liveLink } = project;

  return (
    <div className="project-item">
      <h2>{title}</h2>
      <img src={image} alt="personal project descriptor" />
      <p>{description}</p>
      {renderButtons()}
    </div>
  );
};

export default Project;
