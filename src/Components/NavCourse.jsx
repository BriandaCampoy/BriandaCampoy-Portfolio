import React from 'react';
import NavIcon from './NavIcon';
import { useLocation, useParams } from 'react-router-dom';

const NavCourse = () => {
  const {pathname} =useLocation()
  const {name} = useParams()
  return (
    <nav className="navAlternative">
      <ul className="nav__sections">
        <li>
          <NavIcon
            name="courseCertifications"
            className="icon"
            img="https://res.cloudinary.com/dtn1pnbmu/image/upload/v1659479731/portfolio/assets/icons/bxs-id-card_myetof.svg"
            destination={`/courses/${name}/certifications`}
            selected={pathname===`/courses/${name.replaceAll(' ','%20')}/certifications`}
          />
        </li>
        <li>
          <NavIcon
            name="courseCertifications"
            className="icon"
            img="https://res.cloudinary.com/dtn1pnbmu/image/upload/v1659479725/portfolio/assets/icons/bxs-book-content_i8yev1.svg"
            destination={`/courses/${name}/aboutCourse`}
            selected={pathname===`/courses/${name.replaceAll(' ','%20')}/aboutCourse`}
          />
        </li>
        <li>
          <NavIcon
            name="courseCertifications"
            className="icon"
            img="https://res.cloudinary.com/dtn1pnbmu/image/upload/v1659479729/portfolio/assets/icons/bxs-school_duws2m.svg"
            destination={`/courses/${name}/aboutInstitution`}
            selected={pathname===`/courses/${name.replaceAll(' ','%20')}/aboutInstitution`}
          />
        </li>
      </ul>
    </nav>
  );
};

export default NavCourse;
