import React from 'react';
import ExploreProducts from '../../ExploreProducts/ExploreProducts';
import Banner from '../Banner/Banner';
import MainContent from '../MainContent/MainContent';
import Review from '../Review/Review';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <MainContent></MainContent>
      <ExploreProducts home={true} />
      <Review></Review>
    </div>
  );
};

export default Home;
