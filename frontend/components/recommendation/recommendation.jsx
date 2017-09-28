import React from 'react';

export default class Recommentdation extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.businesses) {
      return (
        <div className="recommendation-container">
          <h1>Welcome to the Recommendation Container</h1>
        </div>
      );
    } else {
      return (
        <div>Loading</div>
      );
    }
  }
}
