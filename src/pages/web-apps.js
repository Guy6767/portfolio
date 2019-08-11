import React from 'react';
import Layout from '../components/Layout';
import Skills from '../components/Skills';
import WebAppsGallery from '../components/WebAppsGallery';

const WebApps = () => {
  return (
    <div id="page" className="web-apps">
      <div className="background-color"></div>
      <Layout>
        <Skills type="web-apps" />
      </Layout>
    </div>
  );
};

export default WebApps;
