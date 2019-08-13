import React from 'react';
import { Helmet } from "react-helmet";
import Layout from '../components/Layout';
import Profile from '../components/Profile';
import '../styles/styles.scss';

const indexPage = () => {
  return (
    <div id="page">
      <Helmet>
        <title>Guy Arieli</title>
      </Helmet>
      <div className="background-color"></div>
      <Layout>
        <Profile />
      </Layout>
    </div>
  );
};

export default indexPage;
