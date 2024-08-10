import React from "react";
import Footer from "../Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useSelector } from "react-redux";

const Home = () => {
  const { product } = useSelector((s) => s.pro);

  const sortedProduct = [...product].sort((a, b) => b._id - a._id);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container max-[446px]:px-2">
      <div className="">
        <div className="flex items-center justify-center my-[30px] max-[446px]:my-[15px]">
          <div className="flex items-center gap-5">
            <div className="bg-[hsla(210,8%,74%,1)] w-[520px] max-[446px]:w-[100px] max-[1200px]:w-[380px] max-lg:w-[280px] h-[3px]" />
            <h1 className="text-white text-[30px] max-[446px]:text-[10px] max-[1200px]:text-[23px] max-lg:text-[17px] font-bold tracking-wider">
              NEW IN ENSCENT
            </h1>
            <div className="bg-[hsla(210,8%,74%,1)] w-[520px] max-[446px]:w-[100px] max-[1200px]:w-[380px] max-lg:w-[280px] h-[3px]" />
          </div>
        </div>

        <div className="">
          <div className="bg-[hsla(210,6%,85%,1)] w-full h-[432px] max-[446px]:h-[180px] max-[1200px]:h-[350px] max-lg:h-[300px]">
            <div className="">
              <Slider {...settings}>
                {sortedProduct.map((pro, index) => (
                  <div key={index} className="max-[446px]:px-1">
                    <img
                      src={pro.url}
                      alt={` ${index + 1}`}
                      className="w-full h-[300px] max-[446px]:h-[120px] max-[1200px]:h-[230px] max-lg:h-[160px] object-contain mt-10 max-[446px]:mt-2"
                    />
                    <h1 className="flex items-center justify-center text-[20px] font-semibold max-[446px]:text-[12px]">
                      {pro.title}
                    </h1>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>

        <div className="">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
