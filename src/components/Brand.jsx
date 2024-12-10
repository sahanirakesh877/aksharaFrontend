import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const brandImg = [
  "/brand/brand1.jpg",
  "/brand/brand3.jpg",
  "/brand/brand4.jpg",
  "/brand/brand1.jpg",
  "/brand/brand5.jpg",
  "/brand/brand6.jpg",
];

const responsive = {
  0: { items: 2 },
  568: { items: 3 },
  768: { items: 3 },
  1024: { items: 4 },
  1200: { items: 5 },
};

const items = brandImg.map((img, index) => (
  <div className="item py-2" key={index}>
    <img src={img} alt={`Brand ${index + 1}`} className="brand-image border border-info img-fluid" />
  </div>
));

const Brand = () => {
  return (
    <div className="brand py-5 ">
      <div className="container ">
        <h2 className="text-center head-color border-bottom-title w-100 mb-5">
          <span className="addcolor">Our Educational</span> Partners
        </h2>
        <AliceCarousel
          mouseTracking
          items={items}
          autoPlay={true}
          infinite={true}
          responsive={responsive}
          controlsStrategy="alternate"
          animationDuration={2000}
          disableButtonsControls={true}
          disableDotsControls={true}
        />
      </div>
    </div>
  );
};

export default Brand;
