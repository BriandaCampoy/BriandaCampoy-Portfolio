import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const RepositoriesProject = ({ project }) => {
  return (
    <section className="main">
      <div className="main__content">
        <p className="section-project font-lg">
          GitHub repositorie & <br /> Figma
        </p>
        <div className="repositories">
          {project.GithubRepository && (
            <NavLink to={project?.GithubRepository} target="_blank">
              <div className="repositorie">
                <img
                  src="https://res.cloudinary.com/dtn1pnbmu/image/upload/v1657843906/portfolio/assets/img_technologies/GitHub-Mark_iufykf.png"
                  alt=""
                />
              </div>
            </NavLink>
          )}
          {project.FigmaDesign && (
            <NavLink to={project.FigmaDesign} target="_blank">
              <div className="repositorie">
                <img
                  src="https://res.cloudinary.com/dtn1pnbmu/image/upload/v1660261178/portfolio/assets/img_technologies/figma_1_1_iwebw2.png"
                  alt=""
                />
              </div>
            </NavLink>
          )}
          {!project.FigmaDesign && !project.GithubRepository && (
            <>
              <h3 className="font-lg">
                The access to GitHub and Figma from this project are either
                private or does not exist.
              </h3>
            </>
          )}
        </div>
        <div className="collaborators-container">
          {project.Collaborators.length > 0 && (
            <>
              <p className="font-md">Collaborators</p>
              <div className="collaborators">
                {project.Collaborators.map((collaborator) => (
                  <Link
                    to={collaborator.profile}
                    target="_blank"
                    className="collaborator"
                    key={collaborator.name}
                  >
                    <img src={collaborator.icon} alt={collaborator.name} />
                    <p>{collaborator.name}</p>
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default RepositoriesProject;
