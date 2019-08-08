import React from 'react';
import Layout from '../components/Layout';
import Profile from '../components/Profile';
import '../styles/styles.scss';

const indexPage = () => {
  return (
    <div id="page">
      <div className="background-color"></div>
      <Layout>
        <Profile />
      </Layout>
    </div>
  );
};

export default indexPage;
