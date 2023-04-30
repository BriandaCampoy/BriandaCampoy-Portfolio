import React, { useContext, useState } from 'react';
import FolderSlide from './FolderSlide';
import '@styles/folderModal.css';
import FolderModalContext from '../context/FolderModalContext';

const FolderModal = () => {
  const { handleCloseModal } = useContext(FolderModalContext);
  const [hoverElement, setHoverElement] = useState();
  return (
    <div className="foldel-container">
      {(hoverElement?.name!=='' && hoverElement!==undefined) && (
        <div className="focus-element--folder">
          <div className="element__content">
            <img
              src={
                hoverElement?.icon
              }
              alt={hoverElement?.name}
              className="element"
            />
          </div>
          <div className="element-title">
            <p>{hoverElement?.name}</p>
          </div>
        </div>
      )}
      <div className="modal-folder">
        <button
          className="return return__btn"
          id="return"
          onClick={handleCloseModal}
        >
          <img
            src="https://res.cloudinary.com/dtn1pnbmu/image/upload/v1659479733/portfolio/assets/icons/bx-undo_ewve3n.svg"
            alt=""
            className="return__arrow"
          />
        </button>
        <FolderSlide setHover={setHoverElement} />
      </div>
    </div>
  );
};

export default FolderModal;
