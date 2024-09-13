import React from "react";
import "../css/Mobilecheck.css";
import { useNavigate } from "react-router-dom";

const Mobilecheck = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className=" demo">
        <div className="container py-4">
          <div className="row">
            <div className="col-12 text-center mb-2">
              <h3 className="display-7 fw-bold">
                <span className="sanskar ">संस्कारयुक्त शिक्षा</span>
                <br />
                Aksharaa‘s Guiding Principle{" "}
              </h3>
            </div>
            <div className="col-12">
              <p className=" mb-p">
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
            </div>
          </div>

          {/* Senior School Section */}
          <div className="row align-items-center my-4">
            <div className="col-lg-3 col-md-6 col-12 text-center text-md-start mb-3 mb-lg-0">
              <h2 className=" mb-head sanskar">Senior School (Class 8-10)</h2>
              <p className="mb-p">
                Our Senior School program combines rigorous academics with
                value-based education, ensuring students are well-prepared for
                higher education and life’s challenges. Counseling and support
                services are available to guide students through their journey.
              </p>
              <button
                className="mb-btn"
                onClick={() => navigate("/academics/high")}
              >
                Enroll now
              </button>
            </div>
            <div className="col-lg-9 col-md-6 col-12 bgimg">
              <img
                src="/alternate/senior.png"
                alt="Senior School"
                className="img-fluid rounded  custom-img  "
              />
            </div>
          </div>

          {/* Reversed Section */}
          <div className="row align-items-center my-4">
            <div className="col-lg-9 col-md-6 col-12 order-lg-1 order-2 bgimg">
              <img
                src="/alternate/girl1.png"
                alt="Girl"
                className="img-fluid rounded custom-img  "
              />
            </div>
            <div className="col-lg-3 col-md-6 col-12 text-center text-md-start order-lg-2 order-1 mb-3 mb-lg-0">
              <h2 className="mb-head sanskar">Senior School (Class 8-10)</h2>
              <p className="mb-p">
                Our Senior School program combines rigorous academics with
                value-based education, ensuring students are well-prepared for
                higher education and life’s challenges. Display of handmade
                crafts and DIY projects created by our students.
              </p>
              <button
                className="mb-btn"
                onClick={() => navigate("/academics/middle")}
              >
                Enroll now
              </button>
            </div>
          </div>

          {/* Section with Image on the Right */}
          <div className="row align-items-center my-4">
            <div className="col-lg-3 col-md-6 col-12 text-center text-md-start mb-3 mb-lg-0">
              <h2 className="mb-head sanskar">Senior School (Class 8-10)</h2>
              <p className="mb-p">
                Our Senior School program combines rigorous academics with
                value-based education, ensuring students are well-prepared for
                higher education and life’s challenges. Local & natural
                materials are used for creating crafts.
              </p>
              <button
                className="mb-btn"
                onClick={() => navigate("/academics/elementary")}
              >
                Enroll now
              </button>
            </div>
            <div className="col-lg-9 col-md-6 col-12 bgimg">
              <img
                src="/alternate/girl2.png"
                alt="Girl 2"
                className="img-fluid rounded custom-img  "
              />
            </div>
          </div>

          {/* Kindergarten Section */}
          <div className="row align-items-center my-4">
            <div className="col-lg-9 col-md-6 col-12 order-lg-1 order-2 bgimg">
              <img
                src="/alternate/kindergarten.png"
                alt="Kindergarten"
                className="img-fluid rounded custom-img  "
              />
            </div>
            <div className="col-lg-3 col-md-6 col-12 text-center text-md-start order-lg-2 order-1 mb-3 mb-lg-0">
              <h2 className="mb-head sanskar">Senior School (Class 8-10)</h2>
              <p className="mb-p">
                Our Senior School program combines rigorous academics with
                value-based education, ensuring students are well-prepared for
                higher education and life’s challenges. Display of handmade
                crafts created by students.
              </p>
              <button
                className="mb-btn"
                onClick={() => navigate("/academics/kindergarten")}
              >
                Enroll now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mobilecheck;
