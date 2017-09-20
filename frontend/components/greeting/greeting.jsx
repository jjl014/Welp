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
          <h1 style={{color:'white'}}>Welcome to the Greeting Container, {this.props.currentUser.username} </h1>
          <Link to='/' onClick={this.signoff()}>Log Out</Link>
        </nav>
      );
    } else {
      display = (
        <nav>
          <Link to='/login'>Log In</Link>
          <Link to='/signup'>Sign Up</Link>
        </nav>
      );
    }
    return (
      <div className="homepage-splash">
        <div className="main-header">
          {display}
        </div>
        <div className="main-inner-container">
          <Link className="link-logo" to='/'>Welp</Link>
        </div>
      </div>
    );
  }
}
