import React from 'react';
import ReactIcon from '../assets/svg/reactjs.svg';
import NodeJSIcon from '../assets/svg/nodejs.svg';
import MongoDBIcon from '../assets/svg/mongodb.svg';
import ExpressIcon from '../assets/svg/express.svg';
import GatsbyIcon from '../assets/svg/gatsby.svg';
import SassIcon from '../assets/svg/sass.svg';
import NetlifyIcon from '../assets/svg/netlify.svg';

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
          <ExpressIcon />
        </div>
        :
        <div className="logos">
          <ReactIcon />
          <GatsbyIcon />
          <SassIcon />
          <NetlifyIcon />
        </div>
      }
      {
        props.type == 'web-apps'
        ?
        <WebAppsDecription />
        :
        <WebsitesDecription />
      }
    </div>
  );
};

const WebAppsDecription = () => {
  return (
    <div className="description">
      <h1>Web Apps</h1>
      <h2>I use the <strong>MERN</strong> stack across all my web apps. This stack includes all the modern technologies needed to build both the <strong>front-end</strong> and <strong>back-end</strong> of the web applications.</h2>
      <ul>
        <li><span>MongoDB</span>, the most popular database for modern apps.</li>
        <li><span>Express</span>, a fast, unopinionated, minimalist web framework for Node.js.</li>
        <li><span>React</span>, a declarative, efficient, and flexible JavaScript library for building user interfaces.</li>
        <li><span>Node.js</span>, a JavaScript runtime built on Chrome's V8 JavaScript engine.</li>
      </ul>
    </div>
  );
};

const WebsitesDecription = () => {
  return (
    <div className="description">
      <h1>Static Websites</h1>
      <h2>I use the latest technologies to provide <strong>fast</strong>, <strong>accessible</strong> and <strong>beautiful</strong> wesbites, for both businesses and personal use.</h2>
      <ul>
        <li>I use <span>React</span> to develope modern, flexible websites.</li>
        <li>Together with React, I use <span>GatsbyJS</span>, a framework designed to deliever blazing fast performances on static websites as well as great <strong>SEO</strong>.</li>
        <li>Beautiful UIs are a top priority for me. I am constantly updating my websites with the latest design trends. I use modern CSS engines such as <strong>Flexbox</strong> and <strong>CSS Grid</strong>, as well as <span>SASS</span>, the popular CSS preprocessor.</li>
        <li>I use <span>Netlify</span>, a modern platform to deploy websites, with the practice of <strong>CI/CD</strong> (continuous integration and continuous deployment), to deliever code changes frequently and reliably.</li>
      </ul>
    </div>
  );
};

export default Skills;
