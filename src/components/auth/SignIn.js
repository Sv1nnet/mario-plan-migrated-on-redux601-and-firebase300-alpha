/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { signIn } from '../../store/actions/authActions';

class SignIn extends Component {
  state = {
    email: '',
    password: '',
  }

  handleChange = (e) => {
    const { target } = { ...e };
    const { id } = target;
    const { value } = target;

    this.setState(state => ({
      ...state,
      [id]: value,
    }));
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const props = { ...this.props };
    props.signIn(this.state);
  }

  render() {
    const { authError, auth } = this.props;

    if (auth.uid) {
      return <Redirect to="/" />;
    }

    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Sign In</h5>

          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handleChange} />
          </div>

          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.handleChange} />
          </div>

          <div className="input-field">
            <button type="submit" className="btn pink lighten-1 z-depth-0">Login</button>
            <div className="red-text center">
              {authError ? <p>{authError}</p> : null}
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  authError: state.auth.authError,
  auth: state.firebase.auth,
});

const mapDispatchToProps = dispatch => ({
  signIn: creds => dispatch(signIn(creds)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
