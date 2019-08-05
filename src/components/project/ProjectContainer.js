import React from 'react';
import TravelyImage from '../../images/projects/travely1.png';
import ChatroomImage from '../../images/projects/chatroom1.png';
import BeltlineImage from '../../images/projects/beltline1.jpg';
import Project from './Project';

const ProjectContainer = () => {
  const renderProjects = () => {
    return projects.map(project => {
      return <Project project={project} />;
    });
  };

  return (
    <div className="project-container">
      <div className="header">
        <h2 className="header-text">my projects</h2>
      </div>
      {renderProjects()}
    </div>
  );
};

const projects = [
  {
    title: 'travely',
    description: `Travely is a website dedicated to finding your next vacation spot and see what other people have rated locations.`,
    image: TravelyImage,
    codeLink: 'https://github.com/egonzalez49/travely'
  },
  {
    title: 'chatroom',
    description: 'Real-time chatroom website using the MERN stack.',
    image: ChatroomImage,
    codeLink: 'https://github.com/egonzalez49/chatroom',
    liveLink: 'https://calm-taiga-20685.herokuapp.com/'
  },
  {
    title: 'atlanta beltline gui',
    description:
      'A desktop application allowing users and admins to interact with a database via a GUI.',
    image: BeltlineImage,
    codeLink: 'https://github.com/egonzalez49/Beltline-Database'
  }
];

export default ProjectContainer;
