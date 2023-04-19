import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import Header from '@components/Header';
import ElementHeader from '@components/ElementHeader';
import useProjects from '@hooks/useProjects';
import NavProject from '@components/NavProject';
import SwitchProjectSections from '@containers/SwitchProjectSections';

const Project = () => {
  const { id, section } = useParams();
  const { getProjectById } = useProjects();
  const project = getProjectById(id);
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
