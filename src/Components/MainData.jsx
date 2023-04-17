import React from 'react'
import '@styles/mainData.css'
import useTechnologies from '../hooks/useTechnologies'

const MainData = () => {
  const {technologies} = useTechnologies();
  return (
    <section className="main">
    <div className="main__content">
        <p className="main__text">
            I am a Software Engineer Student, since 2019. I have worked in several projects in and out of school, and I am ready to work in more.<br/>
            At the begenning of my education I was part of a software development workshop and where I learned basic skills on database and development of software desktop applications. 
            Then I started to learn web development and now I can work in both.
            <br/>
            My interest in technology started a long time ago when I was a child and I knew the videogames, I spent my younghood playing videogames in a Nintendo 3DS that is because I based my portfolio in the interfaces of one of this consoles.
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