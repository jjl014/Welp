import React from 'react';
import {Link} from 'react-router-dom';

const FourZeroFour = () => (
  <div className="four-o-four">
    <h1>404</h1>
    <h2>The page you are looking for can't be found.</h2>
    <Link to='/'>Go Home</Link>
  </div>
);

export default FourZeroFour;
