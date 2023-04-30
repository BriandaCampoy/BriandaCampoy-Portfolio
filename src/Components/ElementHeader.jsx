import React from 'react';

const ElementHeader = ({ element }) => {
  if (element && element !== 'none') {
    return (
      <div className="focus-element">
        <div className="element__content">
          <img src={element.icon} alt={element.name} className="element" />
        </div>
        <div className="element-title--container">
          <div className="element-title">
            <p>{element.name}</p>
          </div>
        </div>
      </div>
    );
  } else if (element === 'none') {
    return <></>;
  } else {
    return (
      <div className="header__title">
        <p className="name">Brianda Campoy</p>
        <p className="speciality">Software engineer</p>
      </div>
    );
  }
};

export default ElementHeader;
