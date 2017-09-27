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
    let nav;
    if (this.props.currentUser) {
      nav = (
        <nav>
          <h2 style={{color:'white'}}>{this.props.currentUser.username} </h2>
          <a onClick={this.signoff()}>Log Out</a>
        </nav>
      );
    } else {
      nav = (
        <nav>
          <Link to='/login'>Log In</Link>
          <Link to='/signup'>Sign Up</Link>
        </nav>
      );
    }
    return (
      <div className="homepage-splash">
        <div className="main-body-responsive">
          <div className="main-header">
            {nav}
          </div>
          <div className="main-inner-container">
            <Link className="link-logo" to='/'>
              <div className="welp-logo-wrapper">
                <img className="welp-logo-2" src="https://res.cloudinary.com/jun/image/upload/v1506394576/Welp_vdjbyh.png" alt="Welp Logo"/>
              </div>
            </Link>
            <Link to="/businesses"><h2>Restuarants</h2></Link>
          </div>
        </div>
      </div>
    );
  }
}
