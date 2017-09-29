import React from 'react';
import GreetingContainer from '../greeting/greeting_container';
import RecommendationContainer from '../recommendation/recommendation_container';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  componenentWillMount() {
    
  }

  render() {
    return (
      <div className="home-container">
        <GreetingContainer />
        <RecommendationContainer />
      </div>
    );
  }
}
