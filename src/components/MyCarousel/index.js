import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default function MyCarousel() {
  return (
    // react-responsive-carousel library
    <Carousel
      className="myCarousel"
      showArrows={false}
      showStatus={false}
      emulateTouch={true}
      infiniteLoop={true}
      showThumbs={false}
      stopOnHover={true}
      dynamicHeight={false}
    >
      {items.map((item, index) => (
        <div key={index} className="myCarouselImgageBox">
          <img className="myCarouselImage" src={item.src} alt={item.altText} />
          <p className="legend">{item.caption}</p>
        </div>
      ))}
    </Carousel>
  );
}

const items = [
  {
    src: "./images/Aquaman.jpg",
    altText: "Slide 2",
    caption: "Aquaman",
  },
  {
    src: "./images/avengers_endgame.jpg",
    altText: "Slide 3",
    caption: "Avenger endgame (2019)",
  },
  {
    src: "./images/avenger.jpg",
    altText: "Slide 3",
    caption: "Avenger 10",
  },
  {
    src: "./images/lion-king.jpg",
    altText: "Slide 3",
    caption: "lion king",
  },
  {
    src: "./images/mat_biec.jpg",
    altText: "Slide 1",
    caption: "Mắt Biếc",
  },
  {
    src: "./images/mortal-kompat.jpg",
    altText: "Slide 3",
    caption: "mortal kompat",
  },
];
