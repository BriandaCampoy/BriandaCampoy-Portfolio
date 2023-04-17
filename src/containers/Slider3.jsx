import React, {useState} from 'react';
import '@styles/slider.css';

const Slider = ({ items }) => {

const scrollContainer = document.getElementById("slider1");

function handleScroll (evt){
    // evt.preventDefault();
    // evt.stopPropagation();
    scrollContainer.scrollLeft += evt.deltaY;
    document.scrollTop = document.scrollTop; 
};

 
  return (
    <section className="galerie__content slider" id='slider1' onWheel={handleScroll}>
      {/* <div className="galerie"> */}
        {/* <div className="slide"> */}
          <div className="element__content" id="project">
            <img
              src="https://res.cloudinary.com/dtn1pnbmu/image/upload/v1660261738/portfolio/assets/png-icons/Seleccion_nzywhj.png"
              className="itemSelector"
              alt=""
            />
            <img src="./assets/projects-icons/SFC.png" alt="" className="element" />
          </div>
          <div className="element__content">
            <img
              src="https://res.cloudinary.com/dtn1pnbmu/image/upload/v1660261738/portfolio/assets/png-icons/Seleccion_nzywhj.png"
              className="itemSelector"
              alt=""
            />
            <img
              src="./assets/projects-icons/AgendaHorario.png"
              alt=""
              className="element"
            />
          </div>
          <div className="element__content">
            <img
              src="https://res.cloudinary.com/dtn1pnbmu/image/upload/v1660261738/portfolio/assets/png-icons/Seleccion_nzywhj.png"
              className="itemSelector"
              alt=""
            />
            <img
              src="./assets/projects-icons/EnfocateJS.png"
              alt=""
              className="element"
            />
          </div>
          <div className="element__content">
            <img
              src="https://res.cloudinary.com/dtn1pnbmu/image/upload/v1660261738/portfolio/assets/png-icons/Seleccion_nzywhj.png"
              className=""
              alt=""
            />
            <img
              src="./assets/projects-icons/TepatuuriSoft.png"
              alt=""
              className="element"
            />
          </div>{' '}
          <div className="element__content">
            <img
              src="https://res.cloudinary.com/dtn1pnbmu/image/upload/v1660261738/portfolio/assets/png-icons/Seleccion_nzywhj.png"
              className=""
              alt=""
            />
            <img
              src="./assets/projects-icons/TepatuuriSoft.png"
              alt=""
              className="element"
            />
          </div>{' '}
          <div className="element__content">
            <img
              src="https://res.cloudinary.com/dtn1pnbmu/image/upload/v1660261738/portfolio/assets/png-icons/Seleccion_nzywhj.png"
              className=""
              alt=""
            />
            <img
              src="./assets/projects-icons/TepatuuriSoft.png"
              alt=""
              className="element"
            />
          </div>
          <div className="element__content">
            <img
              src="https://res.cloudinary.com/dtn1pnbmu/image/upload/v1660261738/portfolio/assets/png-icons/Seleccion_nzywhj.png"
              className=""
              alt=""
            />
            <img
              src="./assets/projects-icons/TepatuuriSoft.png"
              alt=""
              className="element"
            />
          </div>
          <div className="element__content">
            <img
              src="https://res.cloudinary.com/dtn1pnbmu/image/upload/v1660261738/portfolio/assets/png-icons/Seleccion_nzywhj.png"
              className=""
              alt=""
            />
            <img
              src="./assets/projects-icons/TepatuuriSoft.png"
              alt=""
              className="element"
            />
          </div>
          <div className="element__content">
            <img
              src="https://res.cloudinary.com/dtn1pnbmu/image/upload/v1660261738/portfolio/assets/png-icons/Seleccion_nzywhj.png"
              className=""
              alt=""
            />
            <img
              src="./assets/projects-icons/TepatuuriSoft.png"
              alt=""
              className="element"
            />
          </div>
          <div className="element__content">
            <img
              src="https://res.cloudinary.com/dtn1pnbmu/image/upload/v1660261738/portfolio/assets/png-icons/Seleccion_nzywhj.png"
              className=""
              alt=""
            />
            <img
              src="./assets/projects-icons/TepatuuriSoft.png"
              alt=""
              className="element"
            />
          </div>
          <div className="element__content">
            <img
              src="https://res.cloudinary.com/dtn1pnbmu/image/upload/v1660261738/portfolio/assets/png-icons/Seleccion_nzywhj.png"
              className=""
              alt=""
            />
            <img
              src="./assets/projects-icons/TepatuuriSoft.png"
              alt=""
              className="element"
            />
          </div>
          <div className="element__content">
            <img
              src="https://res.cloudinary.com/dtn1pnbmu/image/upload/v1660261738/portfolio/assets/png-icons/Seleccion_nzywhj.png"
              className=""
              alt=""
            />
            <img
              src="./assets/projects-icons/TepatuuriSoft.png"
              alt=""
              className="element"
            />
          </div>
          <div className="element__content">
            <img
              src="https://res.cloudinary.com/dtn1pnbmu/image/upload/v1660261738/portfolio/assets/png-icons/Seleccion_nzywhj.png"
              className=""
              alt=""
            />
            <img
              src="./assets/projects-icons/TepatuuriSoft.png"
              alt=""
              className="element"
            />
          </div>
          <div className="element__content">
            <img
              src="https://res.cloudinary.com/dtn1pnbmu/image/upload/v1660261738/portfolio/assets/png-icons/Seleccion_nzywhj.png"
              className=""
              alt=""
            />
            <img
              src="./assets/projects-icons/TepatuuriSoft.png"
              alt=""
              className="element"
            />
          </div>
          <div className="element__content">
            <img
              src="https://res.cloudinary.com/dtn1pnbmu/image/upload/v1660261738/portfolio/assets/png-icons/Seleccion_nzywhj.png"
              className=""
              alt=""
            />
            <img
              src="./assets/projects-icons/TepatuuriSoft.png"
              alt=""
              className="element"
            />
          </div>
          <div className="element__content">
            <img
              src="https://res.cloudinary.com/dtn1pnbmu/image/upload/v1660261738/portfolio/assets/png-icons/Seleccion_nzywhj.png"
              className=""
              alt=""
            />
            <img
              src="./assets/projects-icons/TepatuuriSoft.png"
              alt=""
              className="element"
            />
          </div>
          <div className="element__content empty">
            <img
              src="https://res.cloudinary.com/dtn1pnbmu/image/upload/v1660261738/portfolio/assets/png-icons/Seleccion_nzywhj.png"
              className=""
              alt=""
            />
            <div className="empty__element"></div>
          </div>
          <div className="element__content empty">
            <img
              src="https://res.cloudinary.com/dtn1pnbmu/image/upload/v1660261738/portfolio/assets/png-icons/Seleccion_nzywhj.png"
              className=""
              alt=""
            />
            <div className="empty__element"></div>
          </div>
      <img
        src="./assets/png-icons/right-arrow.png"
        alt=""
        className="right__arrow"
      />
      <img
        src="./assets/png-icons/right-arrow.png"
        alt=""
        className="left__arrow"
      />
    </section>
  );
};


export default Slider;
