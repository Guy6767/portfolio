import React from 'react';
import ReactIcon from '../assets/svg/reactjs.svg';
import NodeJSIcon from '../assets/svg/nodejs.svg';
import MongoDBIcon from '../assets/svg/mongodb.svg';

const Skills = props => {

  return (
    <div id="skills">
      {
        props.type == 'web-apps'
        ?
        <div className="logos">
          <ReactIcon />
          <NodeJSIcon />
          <MongoDBIcon />
          <span>Express</span>
        </div>
        :
        <div className="logos">
          <p>logos of static websites</p>
        </div>
      }
      <div className="description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </div>
    </div>
  );
};

export default Skills;
