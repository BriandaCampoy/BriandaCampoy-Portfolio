import React, { useEffect } from 'react';
import useCourses from '../hooks/useCourses';
import SliderView from '@containers/SliderView';
import { useState } from 'react';
import FolderModal from '../containers/FolderModal';
import FolderModalContext from '../context/FolderModalContext';

const Schools = () => {
  const [modal, setModal] = useState(false)
  const { courses } = useCourses();
  const $html = document.getElementById('html'); 

  useEffect(()=>{
    unstopScroll();
  },[])
  
  function stopScroll(){
    $html.classList.add("stop");
  }
  function unstopScroll(){
    $html.classList.remove("stop");
  }

  function handleOpenModal(elements){
    setModal(elements);
    stopScroll()
  }
  function handleCloseModal(){
      setModal(false)
      unstopScroll();
  }
  return (
    <>
    <FolderModalContext.Provider value={{handleCloseModal, handleOpenModal, modal, unstopScroll}}>
      {modal && <FolderModal elements={modal}/>}
      <SliderView elements={courses} />
    </FolderModalContext.Provider>
    </>
  );
};

export default Schools;
