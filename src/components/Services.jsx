import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/3.jpg";
import img2 from "../assets/4.jpg";
const Services = () => {
  return (
    <div>
      <Carousel
        infiniteLoop
        autoPlay
        showStatus={false}
        interval={1000}
        showArrows={false}
        showThumbs={false}
      >
        <div>
          <img src={img1} alt="img" />
          <p className="legend">Full Stack</p>
        </div>
        <div>
          <img src={img2} alt="img" />
          <p className="legend">Your Solution on just one tap.</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Services;
