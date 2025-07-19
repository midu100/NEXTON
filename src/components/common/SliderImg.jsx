import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import product from '../../assets/img/product.png'
import product1 from '../../assets/img/product1.jpg'
import product2 from'../../assets/img/product2.jpg'
import product3 from '../../assets/img/product3.jpg'

// Dummy image URLs (change to your actual image paths)
const images = [
  product,product1,product2,product3]

function WatchSlider() {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);

  // Main big image settings
  const mainSettings = {
    asNavFor: nav2,
    ref: (slider) => setNav1(slider),
    arrows: false,
    fade: true,
  };

  // Thumbnail settings
  const thumbSettings = {
    asNavFor: nav1,
    ref: (slider) => setNav2(slider),
    slidesToShow: 4,
    swipeToSlide: true,
    focusOnSelect: true,
    vertical: true,
  };

  return (
    <div className="flex justify-center items-center gap-4">
      {/* Thumbnails */}
      <div className="w-24">
        <Slider {...thumbSettings}>
          {images.map((img, i) => (
            <div key={i} className="p-1">
              <img src={img} alt={`thumb-${i}`} className="w-full h-auto border rounded" />
            </div>
          ))}
        </Slider>
      </div>

      {/* Main Image */}
      <div className="w-80">
        <Slider {...mainSettings}>
          {images.map((img, i) => (
            <div key={i}>
              <img src={img} alt={`main-${i}`} className="w-full h-auto rounded-lg" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default WatchSlider;