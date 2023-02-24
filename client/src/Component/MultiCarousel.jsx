import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function MultiCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    // autoplay: true,
    // autoplaySpeed: 2000,
    // pauseOnHover: true,
  };

  return (
    <Slider {...settings}>
      <div>
        <h3>Slide 1</h3>
      </div>
      <div>
        <h3>Slide 2</h3>
      </div>
      <div>
        <h3>Slide 3</h3>
      </div>
      <div>
        <h3>Slide 4</h3>
      </div>
      <div>
        <h3>Slide 5</h3>
      </div>
    </Slider>
  );
}
