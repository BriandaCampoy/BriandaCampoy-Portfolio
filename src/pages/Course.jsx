import React from 'react'
import { useParams, NavLink } from 'react-router-dom'
import useCourses from '../hooks/useCourses';
import Header from '@components/Header'
import ElementHeader from '@components/ElementHeader'
import NavCourse from '../Components/NavCourse';
import SwitchCourseSections from '../containers/SwitchCourseSections';

const Course = () => {
  const {name, section}=useParams();
  const {getCourseByName} = useCourses()
  const course = getCourseByName(name)
  return (
    <>
    <Header>
      <ElementHeader element={course} />
    </Header>
    <NavCourse />
    <SwitchCourseSections path={section} course={course} />
    <NavLink to={'/courses'}>
      <button className="primary-btn back">Volver</button>
    </NavLink>
  </>
  )
}

export default Course