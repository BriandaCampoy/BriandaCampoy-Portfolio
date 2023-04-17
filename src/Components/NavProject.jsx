import React from 'react';
import NavIcon from './NavIcon';
import { useLocation, useParams } from 'react-router-dom';

const NavProject = () => {
  const {pathname} = useLocation()
  const {name} = useParams()
  return (
    <nav className="navAlternative">
      <ul className="nav__sections">
        <li>
          <NavIcon
            name="projectInfo"
            className="icon"
            img="https://res.cloudinary.com/dtn1pnbmu/image/upload/v1659479729/portfolio/assets/icons/bxs-info-square_ht4i65.svg"
            destination={`/projects/${name}/information`}
            selected={pathname===`/projects/${name.replaceAll(' ','%20')}/information`}
         />
        </li>
        <li>
          <NavIcon
            name="projectImages"
            className="icon"
            img="https://res.cloudinary.com/dtn1pnbmu/image/upload/v1659479729/portfolio/assets/icons/bxs-image_qkbctj.svg"
            destination={`/projects/${name}/images`}
            selected={pathname===`/projects/${name.replaceAll(' ','%20')}/images`}
          />
        </li>
        <li>
        <NavIcon
            name="projectTechnologies"
            className="icon"
            img="https://res.cloudinary.com/dtn1pnbmu/image/upload/v1659479720/portfolio/assets/icons/bx-code_hy9mnw.svg"
            destination={`/projects/${name}/technologies`}
            selected={pathname===`/projects/${name.replaceAll(' ','%20')}/technologies`}
          />
        </li>
        <li>
        <NavIcon
            name="projectRepositorie"
            className="icon"
            img="https://res.cloudinary.com/dtn1pnbmu/image/upload/v1659479723/portfolio/assets/icons/bxl-github_fv5rvh.svg"
            destination={`/projects/${name}/repositories`}
            selected={pathname===`/projects/${name.replaceAll(' ','%20')}/repositories`}
          />
        </li>
      </ul>
    </nav>
  );
};

export default NavProject;
