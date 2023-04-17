import React from 'react'
import '@styles/zoomImage.css'

const ZoomImage = ({img, closeImage}) => {
  return (
    <div className='imgContainer' onClick={closeImage}>
      <img className='imgZoom' src={img} alt="" />
      <img className='closeImage' src="https://res.cloudinary.com/dtn1pnbmu/image/upload/v1659479733/portfolio/assets/icons/bx-x_vb0ij7.svg" alt="closeImage" />
    </div>
  )
}

export default ZoomImage