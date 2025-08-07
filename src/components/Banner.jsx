import React from "react";
import bannerBg from "../assets/img/bannerBg.png";
import { Link, useNavigate } from "react-router";
import { CiSearch } from "react-icons/ci";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useDispatch } from "react-redux";
import { incrementByAmount } from "../SrcSlice";

const Banner = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const handleExplore = ()=>{
    dispatch(incrementByAmount(null))
    navigate('/allreco')
  }

  return (
    <>
      <div className="slider-container">
        <Slider {...settings}>
          <div>
            <section
              id="banner"
              style={{
                background: `url(${bannerBg})`,
                backgroundRepeat: "no-repeat",
                // backgroundPosition: "center",
                backgroundSize: "cover",
              }}
              className="lg:py-[148px] pt-[163px] pb-[199px] bg-left lg:bg-center"
            >
              <div className="container">
                <div className="bannerText">
                  <h2 className="text-[20px] font-medium font-poppins text-primary">
                    Starting from: $49.99
                  </h2>
                  <h1 className="text-[30px] lg:text-[64px] font-semibold font-poppins text-second w-full lg:w-[632px] leading-[38px] lg:leading-[72px] mb-[40px] lg:my-[24px]">
                    Exclusive collection for everyone
                  </h1>
                  <button onClick={handleExplore}
                    className="BannerEXPLORE flex gap-[10px] items-center py-[12px] px-[24px] lg:py-[20px] lg:px-[36px] bg-second rounded-full w-fit text-[16px] font-poppins font-medium text-white cursor-pointer"
                  >
                    Explore now{" "}
                    <CiSearch className="text-[20px] text-[#F8FAFC]" />
                  </button>
                </div>
              </div>
            </section>
          </div>
          <div>
            <section
              id="banner"
              style={{
                background: `url(${bannerBg})`,
                backgroundRepeat: "no-repeat",
                // backgroundPosition: "center",
                backgroundSize: "cover",
              }}
              className="lg:py-[148px] pt-[163px] pb-[199px] bg-left lg:bg-center"
            >
              <div className="container">
                <div className="bannerText">
                  <h2 className="text-[20px] font-medium font-poppins text-primary">
                    Starting from: $49.99
                  </h2>
                  <h1 className="text-[30px] lg:text-[64px] font-semibold font-poppins text-second w-full lg:w-[632px] leading-[38px] lg:leading-[72px] mb-[40px] lg:my-[24px]">
                    Exclusive collection for everyone
                  </h1>
                  <Link
                    className="flex gap-[10px] items-center py-[12px] px-[24px] lg:py-[20px] lg:px-[36px] bg-second rounded-full w-fit text-[16px] font-poppins font-medium text-white"
                    to={"#"}
                  >
                    Explore now{" "}
                    <CiSearch className="text-[20px] text-[#F8FAFC]" />
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default Banner;
