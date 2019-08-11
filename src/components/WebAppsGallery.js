import React from 'react';
import noteworthyImg from '../assets/img/noteworthy.png';

const WebAppsGallery = () => {
  return (
    <div id="web-apps-gallery">
      <Noteworthy />
    </div> 
  );
};

const Noteworthy = () => {
  return (
    <div className="web-app noteworthy">
      <h1>Noteworthy</h1>
      <h2>An editor worthy of your notes.</h2>
      <p>Noteworthy is a rich text editor I created with React and DraftJS. I designed it with the goal to have an editor that will beautifuly style the notes I write.</p>
      <p>Noteworthy provides a lot of the classic inline styles as well as block styles like blockqoute and codeblocks. Noteworthy also provides many themes to choose from, both light and dark</p>
      <img src={noteworthyImg} alt="noteworthy"></img>
    </div>
  );
};

export default WebAppsGallery;