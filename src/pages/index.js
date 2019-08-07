import React from 'react';
import Layout from '../components/Layout';
import Profile from '../components/Profile';
import '../styles/base.scss';

const indexPage = () => {
  return (
    <div id="index-page">
      <Layout>
        <Profile />
      </Layout>
    </div>
  );
};

export default indexPage;
