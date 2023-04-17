import React from 'react';
import '@styles/element.css'

const Element = ({ img, name }) => {
  if (img) {
    return (
      <div className="element__content">
        <img
          src="https://res.cloudinary.com/dtn1pnbmu/image/upload/v1660261738/portfolio/assets/png-icons/Seleccion_nzywhj.png"
          className="selector"
          alt=""
        />
        <img src={img} alt={name} className="element" />
      </div>
    );
  } else {
    return (
      <div className="element__content empty">
        <img
          src="https://res.cloudinary.com/dtn1pnbmu/image/upload/v1660261738/portfolio/assets/png-icons/Seleccion_nzywhj.png"
          className="selector"
          alt=""
        />
        <div className="empty__element"></div>
      </div>
    );
  }
};

export default Element;
