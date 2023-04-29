import React, { useState } from 'react'
import Nav from '@components/Nav'
import Header from '@components/Header'
import Slider from '@containers/Slider'
import ElementHeader from '@components/ElementHeader'

const SliderView = ({ elements }) => {
  const [elementSelected, setElementSelected] = useState();
  function handleHoverElement(element) {
    if (element.name !== '') {
      setElementSelected(element);
    } else {
      setElementSelected();
    }
  }

  return (
    <>
      <Header>
        <ElementHeader element={elementSelected} />
      </Header>
      <Nav />
      <Slider elements={elements} hoverElement={handleHoverElement} />
    </>
  );
};

export default SliderView;
