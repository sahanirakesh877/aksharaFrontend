import React from "react";



const imageData = [
  { id: 1, src: "/a.jpg", alt: "Children 1" },
  { id: 2, src: "/b.jpg", alt: "banner2" },
  { id: 3, src: "/c.jpg", alt: "banner3" },
  { id: 4, src: "/d.jpg", alt: "banner4" },
  { id: 5, src: "/e.jpg", alt: "banner5" },
  { id: 6, src: "/school/home11.JPG", alt: "Banner1" },
  { id: 7, src: "/school/home33.JPG", alt: "Banner 2" },
  { id: 8, src: "/school/home77.JPG", alt: "Banner77" },
];

const Gallery = () => {
  return (
    <>
      <div className="bggallery mission-color ">
        <h2 className="text-center w-100 border-bottom-title addcolor">
          Explore <span className="head-color">Gallery</span>
        </h2>
        <div className="container mx-auto ">
          <div className="row galleryitems  py-5 ">
            <div className="gallery">
              {imageData.map((image, index) => (
                <span key={image.id} style={{ "--i": index + 1 }}>
                  <img src={image.src} alt={image.alt} />
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
