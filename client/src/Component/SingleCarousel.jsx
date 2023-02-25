import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

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
      <div style={{width:"70%", marginTop:"3rem",margin:"auto", border:"1px solid lightgrey"}}>
        <img  src="https://www.bigbasket.com/media/uploads/banner_images/hp_m_babycare_250123_400.jpg" />
      </div>
      <div style={{width:"70%", marginTop:"3rem",margin:"auto", border:"1px solid lightgrey"}}>
        <img src="https://www.bigbasket.com/media/uploads/banner_images/hp_m_petstore_250123_400.jpg" />
      </div>
      <div style={{width:"70%", marginTop:"3rem",margin:"auto", border:"1px solid lightgrey"}}>
        <img src="https://www.bigbasket.com/media/uploads/banner_images/hp_bcd_m_bcd_250123_400.jpg" />
      </div>
    </Carousel>
  );
};

export default MyCarousel;
