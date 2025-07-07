import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router";
import { IoIosArrowRoundForward } from "react-icons/io";
import SingleCategory from "./common/SingleCategory";
import CommonHead from "./common/CommonHead";

function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      }
    ]

  };
  return (
    <>
       <div className="container py-[88px]">
         <CommonHead commonH={'Start exploring.'} commonS={'Good things are waiting for you'} />


        <div className="slider-container">
       <Slider {...settings}>
        <div>
             <SingleCategory Cname={"For Men's"} Cprice={'Starting at $24'}/>
        </div>


        <div>
             <SingleCategory Cname={"For Women's"} Cprice={'Starting at $19'}/>
        </div>


        <div>
             <SingleCategory Cname={"Accessories"} Cprice={'Explore accessories'}/>
        </div>


        <div>
            <SingleCategory Cname={"For Men's"} Cprice={'Starting at $24'}/>
        </div>


        <div>
             <SingleCategory Cname={"For Women's"} Cprice={'Starting at $19'}/>
        </div>


        <div>
          <SingleCategory Cname={"Accessories"} Cprice={'Explore accessories'}/>
        </div>


      </Slider>
    </div>
       </div>
    </>
  );
}

export default SimpleSlider;