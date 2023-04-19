import React from 'react'
import { useParams, NavLink } from 'react-router-dom'
import useCourses from '../hooks/useCourses';
import Header from '@components/Header'
import ElementHeader from '@components/ElementHeader'
import NavCourse from '../Components/NavCourse';
import SwitchCourseSections from '../containers/SwitchCourseSections';

const Course = () => {
  const {id, section}=useParams();
  const {getCourseById} = useCourses()
  const course = getCourseById(id)
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