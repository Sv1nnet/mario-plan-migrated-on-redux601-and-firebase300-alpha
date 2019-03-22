/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { createProject } from '../../store/actions/projectActions';

class CreateProject extends Component {
  state = {
    title: '',
    content: '',
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
    props.createProject(this.state);
    props.history.push('/');
  }

  render() {
    console.log('Create project\'s props:', this.props);
    const { auth } = this.props;

    if (!auth.uid) {
      return <Redirect to="/signin" />;
    }

    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">

          <h5 className="grey-text text-darken-3">Create new project</h5>

          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" onChange={this.handleChange} />
          </div>

          <div className="input-field">
            <label htmlFor="content">Content</label>
            <textarea id="content" className="materialize-textarea" onChange={this.handleChange} />
          </div>

          <div className="input-field">
            <button type="submit" className="btn pink lighten-1 z-depth-0">Create</button>
          </div>

        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.firebase.auth,
});

const mapDispatchToProps = dispatch => ({
  createProject: project => dispatch(createProject(project)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject);
