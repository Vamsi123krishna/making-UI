import "./index.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Homepage = () => {
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1.3,
    slidesToScroll: 1,
  };
  return (
    <div className="home-container">
      <h1 className="heading">Hi Tushar</h1>
      <div className="slider-container">
        <Slider {...settings}>
          <div className="slider-item"></div>
          <div className="slider-item"></div>
          <div className="slider-item"></div>
        </Slider>
      </div>
      <div className="new-item"></div>
      <p className="para">what do you want to learn today Tushar</p>
    </div>
  );
};
export default Homepage;
