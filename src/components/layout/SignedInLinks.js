/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import { signOut } from '../../store/actions/authActions';

const SignedInLinks = props => (
  <ul className="right">

    <li>
      <NavLink to="/create">
        New Project
      </NavLink>
    </li>

    <li>
      <a onClick={props.signOut}>Log Out</a>
    </li>

    <li>
      <NavLink to="/" className="btn btn-floating pink lighten-1">
        {props.profile.initials}
      </NavLink>
    </li>

  </ul>
);

const mapDispatchToProps = dispatch => ({
  signOut: () => dispatch(signOut()),
});

export default connect(null, mapDispatchToProps)(SignedInLinks);
