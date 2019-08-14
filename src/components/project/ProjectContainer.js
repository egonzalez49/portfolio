import React from 'react';
import StrackerImage from '../../images/projects/stracker1.png';
import TravelyImage from '../../images/projects/travely1.png';
import ChatroomImage from '../../images/projects/chatroom1.png';
import BeltlineImage from '../../images/projects/beltline1.jpg';
import Project from './Project';

const ProjectContainer = () => {
  const renderProjects = () => {
    return projects.map(project => {
      return <Project key={project.title} project={project} />;
    });
  };

  return (
    <div id="projects" className="project-container">
      <div className="header">
        <h2 className="header-text">my projects</h2>
      </div>
      {renderProjects()}
    </div>
  );
};

const projects = [
  {
    title: 'stracker',
    description:
      'an account stats tracker and in-game shop updates for the popular game Fortnite.',
    image: StrackerImage,
    codeLink: 'https://github.com/egonzalez49/Stracker',
    liveLink: 'https://still-gorge-96879.herokuapp.com'
  },
  {
    title: 'travely',
    description: `website dedicated to finding your next vacation spot and seeing what other people have rated locations.`,
    image: TravelyImage,
    codeLink: 'https://github.com/egonzalez49/travely'
  },
  {
    title: 'chatroom',
    description:
      'real-time chatroom website allowings users to create their personalized chat experiences.',
    image: ChatroomImage,
    codeLink: 'https://github.com/egonzalez49/chatroom',
    liveLink: 'https://calm-taiga-20685.herokuapp.com/'
  },
  {
    title: 'atlanta beltline gui',
    description:
      'a database GUI dedicated to information input related to activities, sites, and transportation around the Atlanta Betline by visitors or staff.',
    image: BeltlineImage,
    codeLink: 'https://github.com/egonzalez49/Beltline-Database'
  }
];

export default ProjectContainer;
