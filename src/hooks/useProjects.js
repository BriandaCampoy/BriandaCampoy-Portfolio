import { useEffect, useState } from 'react';
import getData from './getData';
// const JSON = '../../data/projects.json';
const JSON = 'projects';

const useProjects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    getData(JSON).then((data)=>{
      setProjects(data['projects']);
    })
  }, []);

  function getProjectByName(name){
    return projects.find((project) => project.name === name)
  }
  return {projects, getProjectByName};
};

export default useProjects;
