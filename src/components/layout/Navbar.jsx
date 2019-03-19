import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

const Navbar = () => (
  <nav className="nav-wrapper grey darken-3">
    <div className="container">
      <Link to="/" className="brand-logo">MarioPlan</Link>
      <SignedInLinks />
      <SignedOutLinks />
    </div>
  </nav>
);

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps)(Navbar);
