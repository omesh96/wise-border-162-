import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styles from "../Styles/MyCarousel.module.css";
const MyCarousel = () => {
  return (
    <Carousel
      showArrows={true}
      showThumbs={false}
      autoPlay={true}
      interval={2000}
      infiniteLoop={true}
      stopOnHover={true}
      swipeable={true}
      dynamicHeight={false}
      showStatus={false}
      transitionTime={500}
      emulateTouch={true}
      centerMode={false}
      centerSlidePercentage={80}
      selectedItem={0}
      responsive={[
        {
          breakpoint: 768,
          settings: {
            centerMode: true,
            centerSlidePercentage: 70,
          },
        },
        {
          breakpoint: 480,
          settings: {
            centerMode: false,
            centerSlidePercentage: 80,
          },
        },
      ]}
    >
      <div className={styles.slider}>
        <img height={[300,350,400,450]}  src="https://www.bigbasket.com/media/uploads/banner_images/hp_m_bcd_paneer_460px-020122.jpg" />
      </div>
      <div className={styles.slider}>
        <img height={[300,350,400,450]} src="https://www.bigbasket.com/media/uploads/banner_images/HP_EMF_M_T1-1600x460_221012.jpg" />
      </div>
      <div className={styles.slider}>
        <img height={[300,350,400,450]} src="https://www.bigbasket.com/media/uploads/banner_images/hp_m_FMCG-PL_iDFreshoStore_460px-250123.jpg" />
      </div>
    </Carousel>
  );
};

export default MyCarousel;
