import React from 'react'
import '@styles/mainData.css'
import useTechnologies from '../hooks/useTechnologies'

const MainData = () => {
  const {technologies} = useTechnologies();
  return (
    <section className="main">
    <div className="main__content">
        <p className="main__text">
        I am software engineer with a focus on web development. With experience in several projects as technological solutions for different businesses and organizations. 
        I can work with a full stack, but my specialty is front-end with React. 
        Developing and getting involved in projects is one of my favorite things, and I am always looking to learn new things and contribute to great projects.
            <br/>
            My interest in technology started a long time ago when I was a child and I knew about video games. I spent my youth playing video games on a Nintendo 3DS, which is why I based my portfolio on the interfaces of one of these consoles.
        </p>
        <p className="main__text">
            I can work with:
        </p>
        <div className="main__technologies">
            <div className="main__technologies__content">
              {technologies?.map((technology)=>(
                <div className="img__technology-container" key={technology.id}>
                  <img className="img__technology" src={technology.img}/>
                </div>
              ))}
            </div>
        </div>

    </div>
</section>
  )
}

export default MainData