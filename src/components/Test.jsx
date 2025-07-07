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
    slidesToScroll: 1
  };
  return (
    <>
       <div className="container">
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