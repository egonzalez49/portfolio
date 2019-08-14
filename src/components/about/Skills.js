import React from 'react';
import HtmlIcon from '../../images/skills/html5.svg';
import CssIcon from '../../images/skills/css3.svg';
import JavascriptIcon from '../../images/skills/javascript.svg';
import NodeIcon from '../../images/skills/nodejs.svg';
import ReactIcon from '../../images/skills/react.svg';
import JavaIcon from '../../images/skills/java.svg';
import GitIcon from '../../images/skills/git.svg';
import AdobeIcon from '../../images/skills/xd.svg';
import MongoIcon from '../../images/skills/mongo.svg';
import SassIcon from '../../images/skills/sass.svg';
import TypescriptIcon from '../../images/skills/typescript.svg';
import MySQLIcon from '../../images/skills/mysql.svg';

const Skills = () => {
  const renderSkills = icons => {
    return icons.map(({ alt, icon, name }) => {
      return (
        <div key={alt} className="skill">
          <img className="skill-logo" src={icon} alt="programming language" />
          <p>{name}</p>
        </div>
      );
    });
  };

  return (
    <div>
      <div className="skills-list">
        <div>
          <h3 className="sub-header-text">frontend</h3>
          <div className="skill-set">{renderSkills(frontend)}</div>
        </div>
        <div>
          <h3 className="sub-header-text">backend</h3>
          <div className="skill-set">{renderSkills(backend)}</div>
        </div>
        <div>
          <h3 className="sub-header-text">other</h3>
          <div className="skill-set">{renderSkills(other)}</div>
        </div>
      </div>
    </div>
  );
};

const frontend = [
  {
    alt: 'html logo',
    name: 'HTML',
    icon: HtmlIcon
  },
  {
    alt: 'css logo',
    name: 'CSS',
    icon: CssIcon
  },
  {
    alt: 'javascript logo',
    name: 'Javascript',
    icon: JavascriptIcon
  },
  {
    alt: 'react logo',
    name: 'React',
    icon: ReactIcon
  },
  {
    alt: 'typescript logo',
    name: 'Typescript',
    icon: TypescriptIcon
  },
  {
    alt: 'sass logo',
    name: 'Sass',
    icon: SassIcon
  }
];

const backend = [
  {
    alt: 'node logo',
    name: 'NodeJS',
    icon: NodeIcon
  },
  {
    alt: 'mongodb logo',
    name: 'MongoDB',
    icon: MongoIcon
  },
  {
    alt: 'mysql logo',
    name: 'MySQL',
    icon: MySQLIcon
  }
];

const other = [
  {
    alt: 'java logo',
    name: 'Java',
    icon: JavaIcon
  },
  {
    alt: 'git logo',
    name: 'Git',
    icon: GitIcon
  },
  {
    alt: 'adobe xd logo',
    name: 'Adobe XD',
    icon: AdobeIcon
  }
];

export default Skills;
