import React from 'react';
import profilePicture from '../assets/img/profile.jpg';
import FiverrIcon from '../assets/svg/fiverr.svg';
import FacebookIcon from '../assets/svg/facebook.svg';
import GithubIcon from '../assets/svg/github.svg';
import EmailIcon from '../assets/svg/email.svg';

const Profile = () => {

  const changePrimaryColor = () => {
    const colors = ['#8EE000', '#1CB0F6', '#D33131', '#FFB020', '#FF9400', '#8549BA', '#DEAC5F', '#4C4C4C'];
    const { style } = document.documentElement;
    style.setProperty('--primary', colors[Math.floor(Math.random() * colors.length)]);
  };

  return (
    <div id="profile">
      <img src={profilePicture} alt="profile" onClick={changePrimaryColor}></img>
      <div className="description">
        <h1>Hello.</h1>
        <h2>I'm Guy, a full-stack <strong>web</strong> developer.</h2>
        <p>I live in israel and study <strong>Computer Science</strong>.</p>
        <p>
          I love programming, learning and developing for the web. 
          I develop <strong>static websites</strong> as well as <strong>web apps</strong>.
          I always use the <strong>latest</strong> technologies, 
          such as React, GatsbyJS, NodeJS, MongoDB, Express, Sass, ES6 and more.
        </p>
        <div className="social-profiles">
          <a><FiverrIcon /></a>
          <a><GithubIcon /></a>
          <a><FacebookIcon /></a>
          <a href="mailto: guyarieli1997@gmail.com"><EmailIcon /></a>
          <cite>Icons made and published by Abhishek Pipalva on 'https://www.iconfinder.com/abhishekpipalva' and licenced under "Creative Commons (Attribution-Share Alike 3.0 Unported)".</cite>
        </div>
      </div>
    </div>
  );
};

export default Profile;
