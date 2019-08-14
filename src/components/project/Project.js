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
      <p className="project-title sub-header-text">{title}</p>
      {/* <div
        style={{ backgroundImage: `url(${image})` }}
        className="project-image"
      /> */}
      <img src={image} alt="project showcase" />
      <div className="about-text">
        <p>{description}</p>
      </div>
      {renderButtons()}
    </div>
  );
};

export default Project;
