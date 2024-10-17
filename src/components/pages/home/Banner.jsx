import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Banner.css';

const Banner = () => {
  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {/* Slide 1 */}
        <div className="slide slide-1">
          <div className="container flex items-center h-full">
            <div className="content">
              <h1>Slide 1 Title</h1>
              <p>This is a short description of the first slide. You can add more details here to describe the content.</p>
              <button>Learn More</button>
            </div>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="slide slide-2">
          <div className="container flex items-center h-full">
            <div className="content">
              <h1>Slide 2 Title</h1>
              <p>This is a short description of the second slide. Describe it with some engaging text.</p>
              <button>Discover More</button>
            </div>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="slide slide-3">
          <div className="container flex items-center h-full">
            <div className="content">
              <h1>Slide 3 Title</h1>
              <p>Here is another short description for the third slide. Add a compelling message.</p>
              <button>Get Started</button>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
