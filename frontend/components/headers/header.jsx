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
          <Link to="/">Welp</Link>
        </header>
      </div>
    );
  }
}
