import React from 'react';
import ReactMarkdown from 'react-markdown';
import '@styles/project.css';
import { NavLink } from 'react-router-dom';

const InformationProject = ({ project }) => {
  return (
    <section className="main main__content">
      <div className="main__content">
        <p className="section-project font-lg">Description</p>
        <p className="title-project font-md">{project?.name}</p>
        {project?.deploy && (
          <NavLink to={project.deploy} className='deploy-project-container' target='_blank'>
            <div className="btn-secondary deploy-project">Deploy</div>
          </NavLink>
        )}
        <div className="font-sm">
          <ReactMarkdown>{project?.description}</ReactMarkdown>
        </div>
      </div>
    </section>
  );
};

export default InformationProject;
