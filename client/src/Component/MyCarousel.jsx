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
      interval={5000}
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
        <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtZtULxydOaNFubaBQJzqbVr73Laek28TYE4Vk2Zp-zg&s" />
      </div>
      <div className={styles.slider}>
        <img src="https://i.pcmag.com/imagery/articles/00Cx7vFIetxCuKxQeqPf8mi-23.fit_lim.v1643131202.jpg" />
      </div>
      <div className={styles.slider}>
        <img src="https://i.pcmag.com/imagery/articles/00Cx7vFIetxCuKxQeqPf8mi-23.fit_lim.v1643131202.jpg" />
      </div>
    </Carousel>
  );
};

export default MyCarousel;
