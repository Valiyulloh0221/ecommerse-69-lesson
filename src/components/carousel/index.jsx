import "./index.scss";
import emg from "../../assets/r-24.png";
import emg1 from "../../assets/r-25.png";
import emg2 from "../../assets/r-41.png";
import Slider from "react-slick";
const Carousel = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 2,
    slidesToScroll: 1,
  };
  return (
    <>
      <section className="carausel">
        <div className="container">
          <div className="carausel_w">
            <div className="carausel_left">
              <div>
                <h2>50+ Beautiful rooms inspiration</h2>
                <p>
                  Our designer already made a lot of beautiful <br /> prototipe
                  of rooms that inspire you
                </p>
                <button>Explore More</button>
              </div>
            </div>
            <div className="carausel_right">
              <Slider {...settings}>
                <div className="carusel_item">
                  <img src={emg} alt="" />
                </div>
                <div className="carusel_item">
                  <img src={emg1} alt="" />
                </div>
                <div className="carusel_item">
                  <img src={emg2} alt="" />
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Carousel;
