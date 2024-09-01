import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Download from "yet-another-react-lightbox/plugins/download";
import Counter from "yet-another-react-lightbox/plugins/counter";
import Share from "yet-another-react-lightbox/plugins/share";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import { Thumbnails } from "yet-another-react-lightbox/plugins";

const Gallery = () => {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
  
    { src: "school/banner2.jpg", alt: "School Banner 2" },
    { src: "school/banner3.jpg", alt: "School Banner 3" },
    { src: "school/banner4.jpg", alt: "School Banner 4" },
    { src: "school/banner5.jpg", alt: "School Banner 5" },
    { src: "school/banner1.jpg", alt: "School Banner 1" },
    {src:'/school/school1.JPG'},
    {src:'/school/school2.JPG'},
    {src:'/school/school3.JPG'},
    {src:'/school/school4.JPG'},
    {src:'/school/school5.JPG'},
    { src: "school/banner1.jpg", alt: "School Banner 1" },
  
  ];

  const handleOpen = (index) => {
    setCurrentIndex(index); 
    setOpen(true);
  };

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4 border-bottom-title w-100 ">Gallery</h2>
      <div className="row">
        {images.map((image, index) => (
          <div
            key={index}
            className={`col-lg-3 col-md-12 mb-4`}
            onClick={() => handleOpen(index)}
          >
            <img src={image.src} alt={image.alt} className="img-fluid rounded shadow" />
          </div>
        ))}
      </div>
      <Lightbox
        open={open}
        slides={images.map((img) => ({ src: img.src, alt: img.alt }))}
        currentIndex={currentIndex}
        close={() => setOpen(false)}
        plugins={[Zoom, Download, Share, Counter, Thumbnails]}
        counter={{ container: { style: { top: "unset", bottom: 0 } } }}
        zoom={{
          maxZoom: 5,
          zoomInLabel: 'Zoom In',
          zoomOutLabel: 'Zoom Out'
        }}
      />
    </div>
  );
};

export default Gallery;
