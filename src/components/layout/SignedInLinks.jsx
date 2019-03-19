/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firebaseConnect } from 'react-redux-firebase';
import { signOut } from '../../store/actions/authActions';

const SignedInLinks = (props) => {
  // As in SignIn.jsx we need to use a function that gets as an argument firebase object
  const handleSignOut = () => {
    const { firebase } = props;
    props.signOut(firebase);
  };

  const { profile } = props;
  return (
    <ul className="right">
      <li><NavLink to="/create">New Project</NavLink></li>
      <li><NavLink to="/" onClick={handleSignOut}>Log Out</NavLink></li> {/* I left NavLink instead of anchor tag because I'm using airbnb eslint rules */}
      <li><NavLink to="/" className="btn btn-floating pink lighten-1">{profile.initials}</NavLink></li>
    </ul>
  );
};

const mapDispatchToProps = dispatch => ({
  signOut: firebase => dispatch(signOut(firebase)),
});

export default compose(
  firebaseConnect(),
  connect(null, mapDispatchToProps),
)(SignedInLinks);
