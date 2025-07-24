import React, { useEffect, useState } from "react";
import axios from "axios";
import SingleReco from "./common/SingleReco";
import CommonHead from "./common/CommonHead";
import { Link, useNavigate } from "react-router";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Reco = () => {
  const [Product, setProduct] = useState([]);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products`)
      .then((res) => {
        setProduct(res.data);
      })

      .catch((err) => {console.log("error")});
  }, []);
  // console.log(Product)


// slick
var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  // Navigate details page
  const navigate =useNavigate()
  const handleShow = (productInfo)=>{
    navigate(`/productdetails/${productInfo.id}`)
    // console.log(productInfo)
  }


  // add to cart
  const handleCart = (data)=>{
    let existId = JSON.parse(localStorage.getItem('Name')) || []
    existId.push(data)
    localStorage.setItem('Name',JSON.stringify(existId))
    console.log(existId)

  }

  return (
    <>
      <section id="reco" className="mt-[88px] mb-[88px]">
        <div className="container">
          <CommonHead
            commonH={"Recommendations."}
            commonS={" Best matching products for you"}/>


          <div className="slider-container">
              <Slider {...settings}>
                     
                  {
                        Product.map((item,i)=>{
                            return(
                                 <SingleReco cartClick={()=>handleCart(item.id)} showDetails={()=>handleShow(item)} key={i} proImg={item.image} proName={item.title} proPrice={item.price} proDis={"$199.99"} />
                            )
                        })
                  }   
              </Slider>
          </div>


          <div className="mt-[50px] flex justify-center">
            <Link to='/allreco' className="py-[10px] px-[30px] bg-sky-600 rounded-2xl text-[20px] text-white font-poppins cursor-pointer hover:tracking-[1px] duration-[.4s]">See More</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Reco;
