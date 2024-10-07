import React from "react";
import "../css/Learning.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import a from "./a.jpg";
import b from "./b.jpg";
import c from "./c.jpg";
import d from "./d.jpg";
import e from "./e.jpg";

import topPic1 from "/banner1.jpg";
import topPic2 from "/banner2.jpg";
import topPic3 from "/banner3.jpg";

const LRPA = () => {
  const brandImg = [a, b, c, d, e];
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 2 },
  };

  const carouselItems = brandImg.map((img, index) => (
    <div className="academic-itemk" key={index}>
      <img src={img} alt={`Brand ${index + 1}`} className="" />
    </div>
  ));

  const lrpaSections = [
    {
      title: "Continuous Assessment",
      text: `Continuous Assessment is integral to our educational strategy, 
      allowing for ongoing evaluation of students' performance throughout their learning journey. 
      This approach provides regular feedback and supports personalized learning by identifying 
      areas for improvement and adapting instruction to meet individual needs.`,
      image: topPic1,
      numberClass: "number",
      number: "1",
    },
    {
      title: "Active Observation and Recording",
      text: `Active Observation and Recording involve educators closely monitoring students 
      during their activities and lessons. This hands-on approach enables teachers to gain valuable 
      insights into students' engagement, behaviors, and learning styles. Detailed records from these 
      observations inform instructional decisions.`,
      image: topPic2,
      numberClass: "number1",
      number: "2",
      reverse: true,
    },
    {
      title: "Assignment",
      text: `Assignments play a crucial role in applying classroom learning to real-world scenarios. 
      They help students develop essential skills such as critical thinking, research, and independent problem-solving. 
      By providing meaningful and practical tasks, assignments reinforce knowledge and offer opportunities for growth.`,
      image: topPic3,
      numberClass: "number",
      number: "3",
    },
    {
      title: "Time Bound Written Assessment",
      text: `Time-Bound Written Assessments are designed to evaluate students' knowledge and problem-solving 
      abilities under timed conditions. These assessments simulate real-world pressures and help students develop 
      effective time management skills, offering a comprehensive view of students' understanding and readiness.`,
      image: topPic1,
      numberClass: "number1",
      number: "4",
      reverse: true,
    },
  ];

  return (
    <>
      <div className="container-fluid">
        <div className="py-2">
          <AliceCarousel
            mouseTracking
            items={carouselItems}
            autoPlay
            infinite
            responsive={responsive}
            controlsStrategy="alternate"
            animationDuration={3000}
            disableButtonsControls
            disableDotsControls
            paddingLeft="5px"
          />
        </div>
      </div>

      <div className="container">
        <div className="row">
          <h2 className="text-center border-bottom-title pt-5 addcolor">
            Learn Through <span className="head-color">LRPA Approach</span>
          </h2>
          <p className="lrpa-p-text py-2">
            At Aksharaa, we believe that education is a dynamic and evolving
            process. To ensure that our students not only grasp knowledge but
            also apply it effectively, we have implemented the Learn Through
            LRPA (Learning, Recording, Practice, and Assessment) approach. This
            innovative framework integrates Continuous Assessment, Active
            Observation and Recording, Assignments, and Time-Bound Written
            Assessments to create a holistic and engaging learning environment.
          </p>
        </div>
      </div>

      <div className="container lrpaContainer">
        {lrpaSections.map((section, index) => (
          <div
            key={index}
            className={`row d-flex align-items-center lrpacont justify-content-between ${
              index % 2 === 1 ? "bg-lrp2" : ""
            }`}
          >
            {section.reverse ? (
              <>
                <div className="col-md-8 position-relative">
                  <h4 className="border-bottom-title w-100 py-2 text-center">
                    {section.title}
                  </h4>
                  <p className="lrpamid-p pt-2">
                    <strong>{section.title}</strong> {section.text}
                  </p>
                  <div className={section.numberClass + " fs-5"}>
                    {section.number}
                  </div>
                </div>
                <div className="col-md-4 px-md-0">
                  <div className="contimg">
                    <img src={section.image} alt={section.title} />
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="col-md-4 px-md-0">
                  <div className="contimg">
                    <img src={section.image} alt={section.title} />
                  </div>
                </div>
                <div className="col-md-8 position-relative">
                  <h4 className="border-bottom-title w-100 py-2 text-center">
                    {section.title}
                  </h4>
                  <p className="lrpamid-p pt-2">
                    <strong>{section.title}</strong> {section.text}
                  </p>
                  <div className={section.numberClass + " fs-5"}>
                    {section.number}
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default LRPA;
