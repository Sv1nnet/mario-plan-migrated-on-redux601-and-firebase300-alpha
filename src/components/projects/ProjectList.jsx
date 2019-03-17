import React from 'react';

import ProjectSummary from './ProjectSummary';

const ProjectList = ({ projects }) => (
  <div className="project-list section">
    {projects && projects.map(project => <ProjectSummary project={project} key={project.id} />)}
  </div>
);

export default ProjectList;
