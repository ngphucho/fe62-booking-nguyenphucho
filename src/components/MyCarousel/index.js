import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { changeSelectedMovie } from "../../actions/selectedMovie";

export default function MyCarousel() {
  const dispatch = useDispatch();
  const handleClick = (item) => {
    dispatch(
      changeSelectedMovie({
        maPhim: 1329,
        tenPhim: "Bố Già",
        biDanh: "bo-gia",
        trailer: item.trailer,
        hinhAnh: "http://movie0706.cybersoft.edu.vn/hinhanh/bo-gia_gp01.jpg",
        moTa: "Tui Chưa Coi Nên Chưa Biết",
        maNhom: "GP13",
        ngayKhoiChieu: "2021-04-03T00:00:00",
        danhGia: 10,
      })
    );
  };

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
      interval={4000}
      autoPlay={true}
    >
      {items.map((item, index) => (
        <div key={index} className="myCarouselImgageBox">
          <img className="myCarouselImage" src={item.src} alt={item.altText} />
          {/* <Link to="/"> */}
          <p
            onClick={() => {
              handleClick(item);
            }}
            className="legend cursorPointer"
          >
            {item.caption}
          </p>
          {/* </Link> */}
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
    trailer: "https://www.youtube.com/embed/WDkg3h8PCVU",
  },
  {
    src: "./images/avengers_endgame.jpg",
    altText: "Slide 3",
    caption: "Avenger endgame (2019)",
    trailer: "https://www.youtube.com/embed/4CbLXeGSDxg",
  },
  {
    src: "./images/avenger.jpg",
    altText: "Slide 3",
    caption: "Avenger 10",
    trailer: "https://www.youtube.com/embed/WDkg3h8PCVU",
  },
  {
    src: "./images/lion-king.jpg",
    altText: "Slide 3",
    caption: "lion king",
    trailer: "https://www.youtube.com/embed/4CbLXeGSDxg",
  },
  {
    src: "./images/mat_biec.jpg",
    altText: "Slide 1",
    caption: "Mắt Biếc",
    trailer: "https://www.youtube.com/embed/WDkg3h8PCVU",
  },
  {
    src: "./images/mortal-kompat.jpg",
    altText: "Slide 3",
    caption: "mortal kompat",
    trailer: "https://www.youtube.com/embed/4CbLXeGSDxg",
  },
];
