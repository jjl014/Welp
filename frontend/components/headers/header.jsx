import React from 'react';
import { Link } from 'react-router-dom';
import SearchContainer from '../search/search_container';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick() {
    return (e) => {
      this.props.businessesSearch();
    };
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
      <div className="header-container">
        <header className="biz-header">
          <Link to="/">
            <div className="welp-logo-wrapper">
              <img className="welp-logo" src="https://res.cloudinary.com/jun/image/upload/v1506394573/Welp_Small_rubaei.png" alt="Welp Logo"/>
            </div>
          </Link>
          <SearchContainer />
          <div className="main-header">
            { nav }
          </div>
        </header>
        <div className="main-header-nav-wrapper h-box">
          <div className="main-header-nav h-box">
            <div className="h-box">
              <Link onClick={this.handleClick()} className="header-nav-link" to='/businesses'><i className="fa fa-cutlery" aria-hidden="true"></i> Restuarants</Link>
              <Link className="header-nav-link new-biz-link" to='/businesses/new'>New Business</Link>
            </div>
            <div className="h-box">
            </div>
          </div>
        </div>
      </div>
    );
  }
}
