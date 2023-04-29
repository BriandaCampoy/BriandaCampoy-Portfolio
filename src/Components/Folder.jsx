import React, { useContext } from 'react';
import '@styles/folderElement.css';
import FolderModalContext from '../context/FolderModalContext';

const Folder = ({ group, hover }) => {
  const { handleOpenModal } = useContext(FolderModalContext);
  function handleOnClick(e) {
    hover('none');
    handleOpenModal(group);
  }
  return (
    <div
      className="folder-container"
      onClick={handleOnClick}
      onMouseOver={() => hover({ icon: group.icon, name: group.group })}
    >
      <img
        src="https://res.cloudinary.com/dtn1pnbmu/image/upload/v1660261738/portfolio/assets/png-icons/Seleccion_nzywhj.png"
        className="selector folder-selector"
        alt=""
      />
      <div className="folder-content">
        <div className="folder-Element">
          <div className="folder__tab"></div>
          <div className="folder__page"></div>
          <div className="folder__face">
            <img className="folder__face__icon" src={group.icon} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Folder;
