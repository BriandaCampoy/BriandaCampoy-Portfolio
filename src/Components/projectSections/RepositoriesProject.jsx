import React from 'react';
import { NavLink } from 'react-router-dom';

const RepositoriesProject = ({ project }) => {
  return (
    <section className="main">
      <div className="main__content">
        <p className="section-project font-lg">
          GitHub repositorie & <br /> Figma
        </p>
        <div className="repositories">
          {project.GithubRepository && (
            <NavLink to={project.GithubRepository} target="_blank">
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
          {!project.FigmaDesign && !project.GithubRepository && 
          <>
            <h3 className='font-lg'>The access to Github and Figma of this project are private or does not exist.</h3>
          </>
          }
        </div>
      </div>
    </section>
  );
};

export default RepositoriesProject;
