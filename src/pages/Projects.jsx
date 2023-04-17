import React, { useEffect, useState } from 'react'
import SliderView from '@containers/SliderView'
import useProjects from '../hooks/useProjects'

const Projects = () => {
  const {projects} = useProjects()
  return (
    <SliderView elements={projects}/>
  )
}

export default Projects