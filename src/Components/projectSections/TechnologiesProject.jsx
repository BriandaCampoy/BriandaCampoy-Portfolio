import React from 'react'
import TechnologyItem from '../TechnologyItem'

const TechnologiesProject = ({technologies}) => {
  return (
    <section className="main">
    <div className="main__content">
        <p className="section-project font-lg">Technologies</p>
        <div className="project-technologies">
          {technologies?.map((tech)=>(
            <TechnologyItem key={tech} idTechnology={tech}/>
          ))}  
        </div>
    </div>
</section>
  )
}

export default TechnologiesProject