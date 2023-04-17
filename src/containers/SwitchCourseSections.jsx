import React from 'react'
import CertificationsCourse from '../Components/courseSections/CertificationsCourse';
import AboutTheCourse from '../Components/courseSections/AboutTheCourse';
import AboutTheInstitution from '../Components/courseSections/AboutTheInstitution';
import '@styles/course.css'

const SwitchCourseSections = ({path, course}) => {
  switch (path) {
    case 'certifications':
      return <CertificationsCourse certifications={course?.certifications}/>
    case 'aboutCourse':
      return <AboutTheCourse course={course}/>;
    case 'aboutInstitution':
      return <AboutTheInstitution institution={course?.institution}/>;
    default:
      break;
  }
}

export default SwitchCourseSections