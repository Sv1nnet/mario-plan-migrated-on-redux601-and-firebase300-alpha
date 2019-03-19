import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { compose } from 'redux';
import { firebaseConnect } from 'react-redux-firebase';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

const Navbar = (props) => {
  const { auth } = props;
  let links;

  // if auth is loaded then we can decide which component to render.
  // But if not then we doesn't render anyone
  if (auth.isLoaded) {
    links = auth.uid ? <SignedInLinks /> : <SignedOutLinks />;
  } else {
    links = null;
  }
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">MarioPlan</Link>
        {links}
      </div>
    </nav>
  );
};

const mapStateToProps = state => ({
  auth: state.firebase.auth,
});

export default compose(
  firebaseConnect(),
  connect(mapStateToProps),
)(Navbar);
