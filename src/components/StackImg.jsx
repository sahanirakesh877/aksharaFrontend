import React, { useState } from "react";
import "../css/StackImg.css";
import { useNavigate } from "react-router-dom";

const RainData = [
  {
    id: 1,
    img: "/a.jpg",
    alt: "Children 1",
  },
  {
    id: 2,
    img: "/b.jpg",
    alt: "banner2",
  },


];

const imageData = [
  {
    id: 1,
    img:
      "https://img.freepik.com/free-photo/front-view-young-female-taking-picture-with-camera-pink-background-woman-photo-model_140725-70988.jpg?t=st=1720549381~exp=1720552981~hmac=38ea0afc5a6ef7a87958d4c7b2c5a1b85c725bcba39fcc684d34193e1588f0c8&w=826",
    alt: "Children 1",
  },
  {
    id: 2,
    img:
      "https://img.freepik.com/free-photo/front-view-young-female-student-white-t-shirt-with-bag-earphones-posing-smiling-holding-coffee-pink-background-lesson-university-college-study-book_140725-35072.jpg?t=st=1720549407~exp=1720553007~hmac=39e20dfb17d9fc229feee405a54ae86efb635c5d5def21fc9a674a999b8325d2&w=826",
    alt: "banner2",
  },

 
];

const childData = [
  {
    id: 1,
    img: "/gallery/children-1.jpg",
    alt: "Children 1",
  },
  {
    id: 2,
    img: "/gallery/children-2.jpg",
    alt: "banner2",
  },


];

const StackImg = () => {
  const navigate = useNavigate();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (

    <>

    
    <div className="container">
      <div className="row justify-content-between d-flex align-items-center  py-5">
        <div className="col-md-4 ">
          <h5
            className="text-center  fw-semibold border-bottom-title w-100 text-success"
            onClick={() => navigate("/photo")}
          >
            Annual Days
          </h5>
          <div className="image-stack position-relative  ">
            {imageData.map((ph, index) => (
              <div
                className={`image-container ${
                  hoveredIndex === index ? "hovered" : ""
                }`}
                key={index}
                onClick={() => setHoveredIndex(index)}
                style={{ zIndex: hoveredIndex === index ? 10 : 5 - index }}
              >
                <img src={ph.img} alt={ph.alt} className="stack-image" />
              </div>
            ))}
          </div>
        </div>

        <div className="col-md-4 ">
          <h5 className="text-center  fw-semibold border-bottom-title w-100 text-success">
            Swimming & Raining Days
          </h5>

          <div className="image-stack position-relative ">
            {RainData.map((ph, index) => (
              <div
                className={`image-container ${
                  hoveredIndex === index ? "hovered" : ""
                }`}
                key={index}
                onClick={() => setHoveredIndex(index)}
                style={{ zIndex: hoveredIndex === index ? 10 : 5 - index }}
              >
                <img src={ph.img} alt={ph.alt} className="stack-image" />
              </div>
            ))}
          </div>
        </div>

        <div className="col-md-4 ">
          <h5 className="text-center  fw-semibold border-bottom-title w-100 text-success">
            Sports Days
          </h5>

          <div className="image-stack position-relative ">
            {childData.map((ph, index) => (
              <div
                className={`image-container ${
                  hoveredIndex === index ? "hovered" : ""
                }`}
                key={index}
                onClick={() => setHoveredIndex(index)}
                style={{ zIndex: hoveredIndex === index ? 10 : 5 - index }}
              >
                <img src={ph.img} alt={ph.alt} className="stack-image" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default StackImg;
