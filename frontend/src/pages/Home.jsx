import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ChartSerengan from "../components/ChartSerengan";
import ChartDanukusuman from "../components/ChartDanukusuman";
import ChartJayengan from "../components/ChartJayengan";
import ChartKemlayan from "../components/ChartKemlayan";
import ChartJoyontakan from "../components/ChartJoyontakan";
import ChartKratonan from "../components/ChartKratonan";
import ChartTipes from "../components/ChartTipes";

function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="bg-blue-500 min-h-screen flex items-center justify-center">
      <div className="max-w-4xl p-4">
        <Slider {...settings}>
          <div>
            <div className="bg-white rounded-lg p-4">
              <ChartSerengan />
            </div>
          </div>
          <div>
            <div className="bg-white rounded-lg p-4">
              <ChartDanukusuman />
            </div>
          </div>
          <div>
            <div className="bg-white rounded-lg p-4">
              <ChartJayengan />
            </div>
          </div>
          <div>
            <div className="bg-white rounded-lg p-4">
              <ChartKemlayan />
            </div>
          </div>
          <div>
            <div className="bg-white rounded-lg p-4">
              <ChartJoyontakan />
            </div>
          </div>
          <div>
            <div className="bg-white rounded-lg p-4">
              <ChartKratonan />
            </div>
          </div>
          <div>
            <div className="bg-white rounded-lg p-4">
              <ChartTipes />
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Home;
