import React from 'react';
import { Link } from 'react-router-dom';
import SearchContainer from '../search/search_container';

export default class Greeting extends React.Component {
  constructor(props) {
    super(props);
  }

  signoff() {
    return (e) => {
      this.props.signout();
    };
  }

  handleClick() {
    return (e) => {
      this.props.searchBusinesses();
    };
  }

  render() {
    let nav;
    if (this.props.currentUser) {
      nav = (
        <nav>
          <div className="user-media-wrapper v-box">
            <img className="user-avatar" src={`${this.props.currentUser.img_url}`}/>
            <h4 style={{color:'white'}}>{this.props.currentUser.username} </h4>
          </div>
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
            <SearchContainer />
            <ul className="homepage-categories h-box">
              <div className="category-restuarants h-box">
                <i className="fa fa-cutlery" aria-hidden="true"></i><Link onClick={this.handleClick()} to="/businesses"><h3>Restuarants</h3></Link>
              </div>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
