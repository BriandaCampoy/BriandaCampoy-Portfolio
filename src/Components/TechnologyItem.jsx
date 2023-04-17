import React from 'react';
import useTechnologies from '../hooks/useTechnologies';
import TechnologyItem_skeleton from '../skeletons/TechnologyItem_skeleton';

const TechnologyItem = ({ idTechnology, TechnologyItem }) => {
  const { getTechnolgyById } = useTechnologies();
  const technology = getTechnolgyById(idTechnology);

  if (!technology?.img) {
    return <TechnologyItem_skeleton />;
  } else {
    return <img src={technology.img} alt="" />;
  }
};

export default TechnologyItem;
