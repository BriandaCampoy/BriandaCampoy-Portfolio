import React from 'react';
import { useContext } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import FolderModalContext from '../context/FolderModalContext';

const FolderElement = ({ element, setHover }) => {
  const {pathname} = useLocation();
  const {unstopScroll} = useContext(FolderModalContext)
  return (
    <>
      {element.name !== '' && (
        <NavLink
          to={{
            pathname: `${pathname}/${element.name}/certifications`,
            state: { element: element }
          }}
          onMouseOver={() => setHover(element)}
          onPointerOver={() => setHover(element)}
          onClick={unstopScroll}
        >
          <div className="modal__element__content">
            <img
              src="https://res.cloudinary.com/dtn1pnbmu/image/upload/v1660261738/portfolio/assets/png-icons/Seleccion_nzywhj.png"
              className="modalSelector selector"
              alt=""
            />
            <img
              src={element.icon}
              alt={element.name}
              className="modal__element"
            />
          </div>
        </NavLink>
      )}
      {element.name === '' && (
        <div className="modal_empty__content empty"  onMouseOver={() => setHover(element)}>
          <img
            src="https://res.cloudinary.com/dtn1pnbmu/image/upload/v1660261738/portfolio/assets/png-icons/Seleccion_nzywhj.png"
            className="modalSelector selector"
            alt=""
          />
          <div className="modal__empty__element"></div>
        </div>
      )}
    </>
  );
};

export default FolderElement;
