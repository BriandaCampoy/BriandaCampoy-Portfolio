import React from 'react';
import '@styles/element.css';
import { NavLink, useLocation } from 'react-router-dom';

const Element = ({ element, onMouseOver }) => {
  const {pathname} = useLocation();
  if (element.icon) {
    return (
      <NavLink
      to={{
        pathname: `${pathname}/${element.id}/${
          element.institution != undefined
            ? 'certifications'
            : 'information'
        }`,
        state: { element: element }
      }}
      onMouseOver={() => onMouseOver(element)}
      onPointerOver={() => onMouseOver(element)}
    >
        <div className="element__content">
          <img
            src="https://res.cloudinary.com/dtn1pnbmu/image/upload/v1660261738/portfolio/assets/png-icons/Seleccion_nzywhj.png"
            className="selector"
            alt=""
          />
          <img src={element.icon} alt={element.name} className="element" />
        </div>
      </NavLink>
    );
  } else {
    return (
      <div className="element__content empty"  onMouseOver={() => onMouseOver(element)}>
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
