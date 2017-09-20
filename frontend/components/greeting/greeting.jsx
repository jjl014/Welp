import React from 'react';
import { Link } from 'react-router-dom';

export default class Greeting extends React.Component {
  constructor(props) {
    super(props);
  }

  signoff() {
    return (e) => {
      this.props.signout();
    };
  }

  render() {
    let display;
    if (this.props.currentUser) {
      display = (
        <nav>
          <h1>Welcome to the Greeting Container, {this.props.currentUser.username} </h1>
          <button onClick={this.signoff()}>Log Out</button>
        </nav>
      );
    } else {
      display = (
        <nav>
          <Link to='/signup'>Sign Up</Link>
          <Link to='/signin'>Sign In</Link>
        </nav>
      );
    }
    return (
      <div className="homepage-splash">
        <div className="main-header">
          <Link to='/'>Welp</Link>
          {display}
        </div>
      </div>
    );
  }
}
