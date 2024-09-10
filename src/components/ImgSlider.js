import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ImgSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Optional: Adjust autoplay speed
    arrows: true, // Ensures arrows are visible for navigation
  };

  return (
    <Carousel {...settings}>
      <Wrap>
        <a href="#slider1" aria-label="Slide 1">
          <img src="/images/slider-badging.jpg" alt="Slide 1" />
        </a>
      </Wrap>

      <Wrap>
        <a href="#slider2" aria-label="Slide 2">
          <img src="/images/slider-scale.jpg" alt="Slide 2" />
        </a>
      </Wrap>

      <Wrap>
        <a href="#slider3" aria-label="Slide 3">
          <img src="/images/slider-badag.jpg" alt="Slide 3" />
        </a>
      </Wrap>

      <Wrap>
        <a href="#slider4" aria-label="Slide 4">
          <img src="/images/slider-scales.jpg" alt="Slide 4" />
        </a>
      </Wrap>
    </Carousel>
  );
};

const Carousel = styled(Slider)`
  margin-top: 20px;

  & > button {
    opacity: 0;
    height: 100%;
    width: 5vw;
    z-index: 1;

    &:hover {
      opacity: 1;
      transition: opacity 0.2s ease;
    }
  }

  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }

  li.slick-active button:before {
    color: white;
  }

  .slick-list {
    overflow: visible; // Adjust for better visibility of overflow
  }

  .slick-prev {
    left: 10px; // Adjusted for better positioning
  }

  .slick-next {
    right: 10px; // Adjusted for better positioning
  }
`;

const Wrap = styled.div`
  border-radius: 4px;
  cursor: pointer;
  position: relative;

  a {
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    display: block;
    position: relative;
    padding: 4px;

    img {
      width: 100%;
      height: auto; // Adjust for aspect ratio preservation
      display: block; // Ensures images fill their container
    }

    &:hover {
      padding: 0;
      border: 4px solid rgba(249, 249, 249, 0.8);
      transition: border 300ms;
    }
  }
`;

export default ImgSlider;