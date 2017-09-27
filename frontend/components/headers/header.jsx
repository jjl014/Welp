import React from 'react';
import { Link } from 'react-router-dom';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="header-container">
        <header className="biz-header">
          <Link to="/">
            <div className="welp-logo-wrapper">
              <img className="welp-logo" src="https://res.cloudinary.com/jun/image/upload/v1506394573/Welp_Small_rubaei.png" alt="Welp Logo"/>
            </div>
          </Link>
        </header>
        <div className="main-header-nav-wrapper h-box">
          <div className="main-header-nav h-box">
            <div className="h-box">
              <Link className="header-nav-link" to='/businesses'><i className="fa fa-cutlery" aria-hidden="true"></i> Restuarants</Link>
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
