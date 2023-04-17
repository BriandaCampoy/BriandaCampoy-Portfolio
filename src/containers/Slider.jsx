import React, { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import '@styles/slider.css';
import Element from '../Components/Element';
import Folder from '../Components/Folder';

const Slider = ({ elements, hoverElement }) => {
  const scroll = useRef(null);
  function handleScroll(event) {
    event.preventDefault();
    if (event.target.name === 'right') {
      scroll.current.scrollTo({
        top: scroll.current.scrollTop + 400,
        behavior: 'smooth'
      });
    } else {
      scroll.current.scrollTo({
        top: scroll.current.scrollTop - 400,
        behavior: 'smooth'
      });
    }
  }
  const { pathname } = useLocation();
  return (
    <div className="iframe">
      <section className="galerie__content">
        <div className="galerie" id="slider" ref={scroll}>
          <div className="slide">
            {elements?.map((element) => (
              <div key={element.id}>
                {element.group && (
                  <Folder  key={element.group} group={element} hover={hoverElement} />
                )}
                {!element.group && (
                  <NavLink
                    to={{
                      pathname: `${pathname}/${element.name}/${
                        element.institution != undefined
                          ? 'certifications'
                          : 'information'
                      }`,
                      state: { element: element }
                    }}
                    onMouseOver={() => hoverElement(element)}
                  >
                    <Element
                      img={element.icon}
                      name={element.name}
                    />
                  </NavLink>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      <img
        src="https://res.cloudinary.com/dtn1pnbmu/image/upload/v1659479732/portfolio/assets/icons/right-arrow_sqzxno.svg"
        alt=""
        className="right__arrow arrow"
        onClick={handleScroll}
        name="right"
      />
      {scroll?.current?.scrollTop > 0 && (
        <img
          src="https://res.cloudinary.com/dtn1pnbmu/image/upload/v1659479732/portfolio/assets/icons/right-arrow_sqzxno.svg"
          alt=""
          className="left__arrow arrow"
          onClick={handleScroll}
          name="left"
        />
      )}
    </div>
  );
};

export default Slider;
