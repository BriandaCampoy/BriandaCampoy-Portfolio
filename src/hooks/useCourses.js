import { useState, useEffect } from 'react';
import getData from './getData';
// const JSON = '../../data/schools.json';
const JSON = 'schools'

const useCourses = () => {
  const [courses, setCourses] = useState([]);
  const [schools, setSchools] = useState([]);
  useEffect(() => {
    getData(JSON).then((data) => {
      setCourses(data['courses']);
      setSchools(data['schools']);
    });
  }, []);

  function getCourseById(name) {
    const courseFind = courses.find((course) => course.id == name);
    if (courseFind) {
      return courseFind;
    } else {
      let courseGroupFind = undefined;
      courses.find((course) => {
        if (course.group) {
          courseGroupFind = course.courses.find((group) => group.name === name);
        }
      });
      return courseGroupFind;
    }
  }
  function getSchoolById(id) {
    return schools.find((schools) => schools.id === id);
  }

  return { courses, getCourseById, getSchoolById };
};

export default useCourses;
