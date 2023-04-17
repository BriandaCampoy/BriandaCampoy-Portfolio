import React, { useRef } from 'react';
import '@styles/folderSlide.css';
import FolderElement from '../Components/FolderElement';
import { useContext } from 'react';
import FolderModalContext from '../context/FolderModalContext';
const FolderSlide = ({ setHover }) => {
  const { modal } = useContext(FolderModalContext);
  const scroll = useRef(null);
  function handleScroll(event) {
    event.preventDefault();
    if (event.target.name === 'right') {
      scroll.current.scrollTo({
        left: scroll.current.scrollLeft + 120,
        behavior: 'smooth'
      });
    } else {
      scroll.current.scrollTo({
        left: scroll.current.scrollLeft - 120,
        behavior: 'smooth'
      });
    }
  }
  return (
    <div className="modal__slide">
      <div className="modalSlideColor">
        <section className="galerie__content">
          <div className="galerie">
            <div
              className="slide gridSlide modal__slide"
              ref={scroll}
              id="modal--slide"
            >
              {modal.courses.map((course) => (
                <FolderElement
                  element={course}
                  setHover={setHover}
                  key={course.id}
                />
              ))}
            </div>
          </div>
          <img
            src="https://res.cloudinary.com/dtn1pnbmu/image/upload/v1659479749/portfolio/assets/png-icons/modal-right-arrow_jqjupw.png"
            alt=""
            className="modal__arrow right"
            name="right"
            onClick={handleScroll}
          />
          <img
            src="https://res.cloudinary.com/dtn1pnbmu/image/upload/v1659479749/portfolio/assets/png-icons/modal-right-arrow_jqjupw.png"
            alt=""
            className="modal__arrow left"
            name="left"
            onClick={handleScroll}
          />
        </section>
      </div>
    </div>
  );
};

export default FolderSlide;
