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

  function getProjectById(name){
    return projects.find((project) => project.id == name)
  }
  return {projects, getProjectById};
};

export default useProjects;
