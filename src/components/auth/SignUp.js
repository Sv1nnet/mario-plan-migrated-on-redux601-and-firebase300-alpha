/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { signUp } from '../../store/actions/authActions';

class SignUp extends Component {
  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
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
    props.signUp(this.state);
  }

  render() {
    const { auth, authError } = this.props;

    if (auth.uid) {
      return <Redirect to="/" />;
    }

    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Sign Up</h5>

          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handleChange} />
          </div>

          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.handleChange} />
          </div>

          <div className="input-field">
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" onChange={this.handleChange} />
          </div>

          <div className="input-field">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" onChange={this.handleChange} />
          </div>

          <div className="input-field">
            <button type="submit" className="btn pink lighten-1 z-depth-0">Sign up</button>
            <div className="red-text center">
              { authError ? <p>{authError}</p> : null}
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.firebase.auth,
  authError: state.auth.authError,
});

const mapDispatchToProps = dispatch => ({
  signUp: newUser => dispatch(signUp(newUser)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
