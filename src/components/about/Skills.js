import React from 'react';
import HtmlIcon from '../../images/skills/html.svg';
import CssIcon from '../../images/skills/css.svg';
import JavascriptIcon from '../../images/skills/javascript.svg';
import NodeIcon from '../../images/skills/nodejs.svg';
import ReactIcon from '../../images/skills/react.svg';
import JavaIcon from '../../images/skills/java.svg';
import GitIcon from '../../images/skills/git.svg';
import ExpressIcon from '../../images/skills/express.svg';
import MongoIcon from '../../images/skills/mongodb.svg';
import SassIcon from '../../images/skills/sass.svg';
import TypescriptIcon from '../../images/skills/typescript.svg';
import MySQLIcon from '../../images/skills/mysql.svg';

const Skills = () => {
  const renderIcons = () => {
    return icons.map(({ alt, icon }) => {
      return (
        <div key={alt} className="skills-icon-container">
          <img src={icon} alt="html logo" />
        </div>
      );
    });
  };

  return <div className="skills-container">{renderIcons()}</div>;
};

const icons = [
  {
    alt: 'html logo',
    icon: HtmlIcon
  },
  {
    alt: 'css logo',
    icon: CssIcon
  },
  {
    alt: 'javascript logo',
    icon: JavascriptIcon
  },
  {
    alt: 'nodejs logo',
    icon: NodeIcon
  },
  {
    alt: 'react logo',
    icon: ReactIcon
  },
  {
    alt: 'java logo',
    icon: JavaIcon
  },
  {
    alt: 'git logo',
    icon: GitIcon
  },
  {
    alt: 'express logo',
    icon: ExpressIcon
  },
  {
    alt: 'mongodb logo',
    icon: MongoIcon
  },
  {
    alt: 'mysql logo',
    icon: MySQLIcon
  },
  {
    alt: 'typescript logo',
    icon: TypescriptIcon
  },
  {
    alt: 'sass logo',
    icon: SassIcon
  }
];

export default Skills;
