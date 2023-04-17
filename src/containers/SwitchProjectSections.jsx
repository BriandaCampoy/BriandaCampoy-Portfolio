import React from 'react';
import InformationProject from '@components/projectSections/InformationProject';
import ImagesProject from '@components/projectSections/ImagesProject';
import TechnologiesProject from '@components/projectSections/TechnologiesProject';
import RepositoriesProject from '@components/projectSections/RepositoriesProject';

const SwitchProjectSections = ({ path, project }) => {
  switch (path) {
    case 'information':
      return <InformationProject project={project}/>
    case 'images':
      return <ImagesProject images={project?.images}/>;
    case 'technologies':
      return <TechnologiesProject technologies={project?.Technologies}/>;
    case 'repositories':
      return <RepositoriesProject project={project}/>;
    default:
      break;
  }
};

export default SwitchProjectSections;
