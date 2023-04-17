import { useState, useEffect } from 'react';
import getData from './getData';
const JSON = '../../data/technologies.json';

const useTechnologies = () => {
  const [technologies, setTechnologies] = useState([]);

  useEffect(() => {
    getData(JSON).then((data) => {
      setTechnologies(data['technologies']);
    });
  }, []);

  const getTechnolgyById = (id) => {
    return technologies.find((tech) => tech.id === id);
  };

  return {
    technologies,
    getTechnolgyById
  };
};

export default useTechnologies;
