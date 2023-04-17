import React from 'react';
import { NavLink } from 'react-router-dom';

const NavIcon = ({
  name,
  className,
  img,
  selected,
  handleClick,
  destination
}) => {
  return (
    <NavLink className={className} to={destination}>
      <div className={className} onClick={handleClick}>
        {selected && (
          <img
            src="https://res.cloudinary.com/dtn1pnbmu/image/upload/v1660261759/portfolio/assets/png-icons/Select_p0ecmt.png"
            className="navSelector--selected"
            alt=""
          />
        )}
        <img
          src={
            name === 'homesettings' || name === 'size'
              ? 'https://res.cloudinary.com/dtn1pnbmu/image/upload/v1660261755/portfolio/assets/png-icons/NavSeleccionV_lcd5s4.png'
              : 'https://res.cloudinary.com/dtn1pnbmu/image/upload/v1660261738/portfolio/assets/png-icons/NavSeleccion_pqxej5.png'
          }
          className="navSelector"
          alt=""
        />
        <img className="icon" src={img} alt={name} />
      </div>
     </NavLink>
  );
};

export default NavIcon;
