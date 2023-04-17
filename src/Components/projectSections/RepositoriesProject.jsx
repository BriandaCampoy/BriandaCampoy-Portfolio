import React from 'react';

const RepositoriesProject = ({ project }) => {
  return (
    <section className="main">
      <div className="main__content">
        <p className="section-project font-lg">
          GitHub repositorie & <br /> Figma
        </p>
        <div className="repositories">
          {project.GithubRepository && (
            <div className="repositorie">
              <img
                src="https://res.cloudinary.com/dtn1pnbmu/image/upload/v1657843906/portfolio/assets/img_technologies/GitHub-Mark_iufykf.png"
                alt=""
              />
            </div>
          )}
          {project.FigmaDesign && (
            <div className="repositorie">
              <img
                src="https://res.cloudinary.com/dtn1pnbmu/image/upload/v1660261178/portfolio/assets/img_technologies/figma_1_1_iwebw2.png"
                alt=""
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default RepositoriesProject;
