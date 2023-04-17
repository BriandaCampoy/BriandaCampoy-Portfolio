import React, { useState, useEffect } from 'react';
import ZoomImage from '../ZoomImage';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper';

const ImagesProject = ({ images }) => {
  const [photo, setPhoto] = useState(false);
  const $html = document.getElementById('html');

  useEffect(() => {
    unstopScroll();
  }, []);

  function stopScroll() {
    $html.classList.add('stop');
  }
  function unstopScroll() {
    $html.classList.remove('stop');
  }
  function handleShowPhoto(img) {
    setPhoto(img);
    stopScroll();
  }
  function handleClosePhoto() {
    setPhoto(false);
    unstopScroll();
  }
  return (
    <section className="main">
      <div className="main__content">
        <p className="section-project font-lg">Images</p>
        <div className="projectImages">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            {images?.map((img) => (
              <SwiperSlide key={img + Math.floor(Math.random() * 2000)}>
                <div
                  className="projectImages__img--container"
                  onClick={() => handleShowPhoto(img)}
                >
                  <img src={img} alt="" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      {photo && <ZoomImage img={photo} closeImage={handleClosePhoto} />}
    </section>
  );
};

export default ImagesProject;
