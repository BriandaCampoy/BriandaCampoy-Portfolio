import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import Header from '@components/Header';
import ElementHeader from '@components/ElementHeader';
import useProjects from '@hooks/useProjects';
import NavProject from '@components/NavProject';
import SwitchProjectSections from '@containers/SwitchProjectSections';

const Project = () => {
  const { name, section } = useParams();
  const { getProjectByName } = useProjects();
  const project = getProjectByName(name);
  return (
    <>
      <Header>
        <ElementHeader element={project} />
      </Header>
      <NavProject />
      <SwitchProjectSections path={section} project={project} />
      <NavLink to={'/projects'}>
        <button className="primary-btn back">Volver</button>
      </NavLink>
    </>
  );
};

export default Project;
