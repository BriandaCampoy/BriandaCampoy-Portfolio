import React from 'react';
import NavIcon from './NavIcon';
import { useLocation, useParams } from 'react-router-dom';

const NavProject = () => {
  const {pathname} = useLocation()
  const {id} = useParams()
  return (
    <nav className="navAlternative">
      <ul className="nav__sections">
        <li>
          <NavIcon
            name="projectInfo"
            className="icon"
            img="https://res.cloudinary.com/dtn1pnbmu/image/upload/v1659479729/portfolio/assets/icons/bxs-info-square_ht4i65.svg"
            destination={`/projects/${id}/information`}
            selected={pathname===`/projects/${id}/information`}
         />
        </li>
        <li>
          <NavIcon
            name="projectImages"
            className="icon"
            img="https://res.cloudinary.com/dtn1pnbmu/image/upload/v1659479729/portfolio/assets/icons/bxs-image_qkbctj.svg"
            destination={`/projects/${id}/images`}
            selected={pathname===`/projects/${id}/images`}
          />
        </li>
        <li>
        <NavIcon
            name="projectTechnologies"
            className="icon"
            img="https://res.cloudinary.com/dtn1pnbmu/image/upload/v1659479720/portfolio/assets/icons/bx-code_hy9mnw.svg"
            destination={`/projects/${id}/technologies`}
            selected={pathname===`/projects/${id}/technologies`}
          />
        </li>
        <li>
        <NavIcon
            name="projectRepositorie"
            className="icon"
            img="https://res.cloudinary.com/dtn1pnbmu/image/upload/v1659479723/portfolio/assets/icons/bxl-github_fv5rvh.svg"
            destination={`/projects/${id}/repositories`}
            selected={pathname===`/projects/${id}/repositories`}
          />
        </li>
      </ul>
    </nav>
  );
};

export default NavProject;
