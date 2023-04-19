import React from 'react';
import NavIcon from './NavIcon';
import { useLocation, useParams } from 'react-router-dom';

const NavCourse = () => {
  const {pathname} =useLocation()
  const {id} = useParams()
  return (
    <nav className="navAlternative">
      <ul className="nav__sections">
        <li>
          <NavIcon
            name="courseCertifications"
            className="icon"
            img="https://res.cloudinary.com/dtn1pnbmu/image/upload/v1659479731/portfolio/assets/icons/bxs-id-card_myetof.svg"
            destination={`/courses/${id}/certifications`}
            selected={pathname===`/courses/${id}/certifications`}
          />
        </li>
        <li>
          <NavIcon
            name="courseCertifications"
            className="icon"
            img="https://res.cloudinary.com/dtn1pnbmu/image/upload/v1659479725/portfolio/assets/icons/bxs-book-content_i8yev1.svg"
            destination={`/courses/${id}/aboutCourse`}
            selected={pathname===`/courses/${id}/aboutCourse`}
          />
        </li>
        <li>
          <NavIcon
            name="courseCertifications"
            className="icon"
            img="https://res.cloudinary.com/dtn1pnbmu/image/upload/v1659479729/portfolio/assets/icons/bxs-school_duws2m.svg"
            destination={`/courses/${id}/aboutInstitution`}
            selected={pathname===`/courses/${id}/aboutInstitution`}
          />
        </li>
      </ul>
    </nav>
  );
};

export default NavCourse;
