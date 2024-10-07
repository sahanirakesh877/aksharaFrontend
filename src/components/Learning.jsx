import React, { useRef, useState } from "react";
import "../css/Learning.css";
import { useNavigate } from "react-router-dom";

import seniorImg from "/alternate/senior.png";
import middleImg from "/alternate/girl1.png";
import kindergartenImg from "/alternate/girl2.png";
import elementaryImg from "/alternate/kindergarten.png";

const Learning = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState(null);
  const hoverRef = useRef(null);
  const [hover, setHover] = useState(false);
  const handleImageClick = (section) => {
    setActiveSection(section);
  };
  const handleClose = () => {
    setActiveSection(null);
  };
  const handleEffect = (e) => {
    if (hoverRef.current && hover) {
      requestAnimationFrame(() => {
        hoverRef.current.style.top = `${e.pageY}px`;
        hoverRef.current.style.left = `${e.pageX}px`;
      });
    }
  };

  return (
    <>
      <div
        className="learning "
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onMouseMove={handleEffect}
      >
        <div className="container">
          <div className="row  d-flex align-items-center justify-content-between fuche-sec">
            <div className={`col-md-4 pe-4  ${activeSection ? "d-none" : ""}`}>
              <h5>Aksharaa‘s Guiding Principle</h5>
              <h2 className="fw-semibold sanskar  ">संस्कारयुक्त शिक्षा</h2>
              <p className="lrpa-text ">
                Our guiding concept at Aksharaa School is "संस्कारयुक्त शिक्षा"
                which translates education infused with values. We are more of a
                school with the basic aim not of setting ourselves to the task
                of providing knowledge from a text book and preparing students
                for tests, but for producing individuals who are of good
                character, individuals of moral integrity who will be able to
                practice those elements when they find themselves in the outside
                world. Our Learning-Reinforcement-Practice-Application (LRPA)
                module enhances cognitive abilities with fun and curiosity,
                encouraging critical thinking, collaboration, creativity, and
                problem-solving. We consider the entire development of a child's
                character and values to be an integral part of meaningful
                education, which goes beyond academic achievement. In addition
                to fostering academic development, our curriculum aims at
                cultivating values like respect, integrity, compassion, and
                responsibility. This positions Aksharaa as a top educational
                institution in Kathmandu, preparing students to become
                full-fledged individuals who are not just knowledgeable but also
                morally and socially conscious.
              </p>

              <button
                className="button-21"
                role="button"
                onClick={() => navigate("/about/lrpa")}
              >
                Read More<i className="fa-solid fa-arrow-right ms-2"></i>
              </button>
            </div>

            {activeSection === "senior" && (
              <div className="col-md-4">
                <button onClick={handleClose} className="close-btn">
                  <i className="fa-solid fa-xmark"></i>
                </button>
                <h3 className="border-bottom-title w-100 text-center ">
                  Senior School (Class 8-10)
                </h3>
                <p className="lrpa-text px-2">
                  Our Senior School program combines rigorous academics with
                  value-based education, ensuring students are well-prepared for
                  higher education and life’s challenges. Counseling and support
                  services are available to guide students through their.Display
                  of handmade crafts and DIY projects created by our students.
                  Local & natural materials are used for creating these crafts.
                </p>
                <button
                  className="button-21"
                  role="button"
                  onClick={() => navigate("/academics/high")}
                >
                  Enroll now
                </button>
              </div>
            )}

            {activeSection === "middle" && (
              <div className="col-md-4">
                <button onClick={handleClose} className="close-btn">
                  <i className="fa-solid fa-xmark"></i>
                </button>
                <h3 className="border-bottom-title w-100 text-center">
                  Middle School (Class 6-7)
                </h3>
                <p className="lrpa-text px-2">
                  Middle School education at Aksharaa encourages independent
                  learning and ethical reasoning, equipping students with the
                  skills and values necessary for future success. Students learn
                  to manage their time effectively and take responsibility for
                  their own learning. Our advisory programs provide additional
                  support and mentorship, helping students navigate this
                  critical stage.
                </p>
                <button
                  className="button-21"
                  role="button"
                  onClick={() => navigate("/academics/middle")}
                >
                  Enroll now
                </button>
              </div>
            )}

            {activeSection === "elementary" && (
              <div className="col-md-4">
                <button onClick={handleClose} className="close-btn">
                  <i className="fa-solid fa-xmark"></i>
                </button>
                <h3 className="border-bottom-title w-100 text-center">
                  Elementary School (Class 1-5)
                </h3>
                <p className="lrpa-text px-2">
                  Aksharaa’s Elementary School nurtures intellectual growth and
                  character development, ensuring students excel academically
                  while embodying ethical principles. Through collaborative
                  projects and individual assignments, students learn the value
                  of hard work and integrity. Our goal is to develop confident,
                  well-rounded individuals who are prepared for middle school
                  and beyond.
                </p>
                <button
                  className="button-21"
                  role="button"
                  onClick={() => navigate("/academics/elementary")}
                >
                  Enroll now
                </button>
              </div>
            )}

            {activeSection === "kindergarten" && (
              <div className="col-md-4">
                <button onClick={handleClose} className="close-btn">
                  <i className="fa-solid fa-xmark"></i>
                </button>
                <h3 className="border-bottom-title w-100 text-center">
                  Kindergarten (PG-KG)
                </h3>
                <p className="lrpa-text px-2">
                  In our Kindergarten classes, children learn through playful
                  experiences while instilling values like kindness, honesty,
                  and respect, creating a strong educational foundation.
                  Activities are carefully crafted to be fun and educational,
                  promoting holistic growth. We believe in teaching children the
                  importance of empathy and cooperation from an early age.
                </p>
                <button
                  className="button-21"
                  role="button"
                  onClick={() => navigate("/academics/kindergarten")}
                >
                  Enroll now
                </button>
              </div>
            )}

            {/* Photos section */}
            <div className="col-md-2 rotatediv">
              <div
                className="row d-flex justify-content-between align-items-center position-relative learnimg"
                onClick={() => handleImageClick("senior")}
              >
                <div className="inner-content">
                  <img src={seniorImg} alt="" className="img-custom" />
                  <p className="seniors border px-3 rounded-2 py-1 border me-4">
                    High School
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-2 rotatediv">
              <div
                className="row d-flex justify-content-between align-items-center position-relative learnimg"
                onClick={() => handleImageClick("middle")}
              >
                <div className="inner-content">
                  <img
                    src={middleImg}
                    alt=""
                    className="img-custom kinder_img2"
                  />
                  <p className="seniors px-3 rounded-2 py-1 border me-4">
                    Middle School
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-2 rotatediv">
              <div
                className="row d-flex justify-content-start align-items-center position-relative learnimg"
                onClick={() => handleImageClick("elementary")}
              >
                <div className="inner-content">
                  <img
                    src={elementaryImg}
                    alt=""
                    className="img-custom kinder_img1"
                  />
                  <p className="seniors   rounded-2 py-1 border me-5 px-1 text-nowrap">
                    Elementary School
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-2 rotatediv">
              <div
                className="row d-flex justify-content-between align-items-center position-relative learnimg"
                onClick={() => handleImageClick("kindergarten")}
              >
                <div className="inner-content">
                  <img
                    src={kindergartenImg}
                    alt=""
                    className="img-custom kinder_img"
                  />
                  <p className="seniors px-3 rounded-2 py-1 border me-5">
                    Kindergarten
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`position-absolute hoverView ${
            hover ? "hovering" : "unhover"
          }  `}
          ref={hoverRef}
        >
          View
        </div>
      </div>
    </>
  );
};

export default Learning;
