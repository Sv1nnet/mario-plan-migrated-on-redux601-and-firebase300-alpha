import React from 'react';
import { Link } from 'react-router-dom';

import ProjectSummary from './ProjectSummary';

const ProjectList = ({ projects }) => (
  <div className="project-list section">
    {projects && projects.map(project => (
      <Link to={`/project/${project.id}`} key={project.id}>
        <ProjectSummary project={project} />
      </Link>
    ))}
  </div>
);

export default ProjectList;
