import React from 'react';
import moment from 'moment';

const ProjectSummary = ({ project }) => (
  <div className="card z-depth-0 project-summary">
    <div className="card-content text-darken">
      <span className="card-title grey-text text-darken-3">{project.title}</span>
      <p className="grey-text text-darken-3">Posted by {project.authorFirstName} {project.authorLastName}</p>
      <p className="grey-text">{moment(project.createAt.toDate()).calendar()}</p>
    </div>
  </div>
);

export default ProjectSummary;
