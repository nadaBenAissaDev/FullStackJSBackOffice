import React from "react";
import { Carousel } from "react-bootstrap";
import img1 from "../../assets/images/DISC.jpg";
import D from "../../assets/images/DISC-D.jpg";
import I from "../../assets/images/DISC-I.jpg";
import S from "../../assets/images/DISC-S.jpg";
import C from "../../assets/images/DISC-C.jpg";
import RED0 from "../../assets/images/0.jpg";
import RED from "../../assets/images/1.jpg";
import RED2 from "../../assets/images/2.jpg";
import RED3 from "../../assets/images/3.jpg";

const CarouselPersonalityTest = () => (
  <Carousel>
    <Carousel.Item interval={1000}>
      <img
      style={{width:'400px',height:'250px', marginLeft:'70px'}}
        className="d-block w-60"
        src={RED0}
        alt="First slide"
      />
    </Carousel.Item>
    <Carousel.Item interval={1000}>
      <img
        style={{width:'400px',height:'250px', marginLeft:'70px'}}
        className="d-block w-60"
        src={RED}
        alt="First slide"
      />
    </Carousel.Item>
    <Carousel.Item interval={1000}>
      <img
        style={{width:'400px',height:'250px', marginLeft:'70px'}}
        className="d-block w-60"
        src={RED2}
        alt="First slide"
      />
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          style={{width:'400px',height:'250px', marginLeft:'70px'}}
          className="d-block w-60"
          src={RED3}
          alt="First slide"
        />
    </Carousel.Item>

    
  </Carousel>
);

export default CarouselPersonalityTest;