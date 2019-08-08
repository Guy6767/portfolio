import React from 'react';
import Layout from '../components/Layout';
import Skills from '../components/Skills';

const Websites = () => {
  return (
    <div id="page" className="websites">
      <div className="background-color"></div>
      <Layout>
        <Skills 
          type="websites"
        />
      </Layout>
    </div>
  );
};

export default Websites;