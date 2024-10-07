import React from "react";
import "../css/Kindergarten.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChild,
  faBook,
  faChalkboardTeacher,
  faHandsHelping,
  faLaptopCode,
  faRunning,
  faMusic,
  faTheaterMasks,
  faPaintBrush,
  faFootballBall,
  faSwimmer,
  faUserFriends,
} from "@fortawesome/free-solid-svg-icons";

import school1 from "/school/school1.jpg";
import school2 from "/school/school2.jpg";
import school3 from "/school/school3.jpg";
import school4 from "/school/school4.jpg";
import school5 from "/school/school5.jpg";

const brandImg = [school2, school4, school1, school3, school5];
const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 2 },
};
const items = brandImg.map((img, index) => (
  <div className="academic-itemk" key={index}>
    <img src={img} alt={`Brand ${index + 1}`} className="img-fluid" />
  </div>
));

const Kindergarten = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="py-2">
          <AliceCarousel
            mouseTracking
            items={items}
            autoPlay={true}
            infinite={true}
            responsive={responsive}
            controlsStrategy="alternate"
            animationDuration={3000}
            disableButtonsControls={true}
            disableDotsControls={true}
            paddingLeft={"5px"}
          />
        </div>
      </div>

      <div className="bg-light py-2">
        <div className="container mx-auto">
          <h3 className="w-100 border-bottom-title head-color text-center">
            <span className="addcolor">Kindergarten </span> (PG-KG)
          </h3>
          <div className="row d-flex justify-content-between align-items-start">
            <div className="col-md-5 col-12 px-4 py-4">
              <p className="kinder-text">
                At Aksharaa Kindergarten, our center is dedicated to providing a
                nurturing and educational environment for children aged 2 to 6
                years old. Our Kindergarten program is designed to provide
                comprehensive early childhood education through our Day Care,
                Pre-ECD, ECD I, and ECD II programs.
              </p>

              <ul className="list-unstyled ">
                <li>
                  <strong>Day Care:</strong> For children aged 2-3 years.
                </li>
                <li>
                  <strong>Pre-ECD:</strong> For children aged 2.5-4 years.
                </li>
                <li>
                  <strong>ECD I:</strong> For children aged 3.5-5 years.
                </li>
                <li>
                  <strong>ECD II:</strong> For children aged 4.5-6 years.
                </li>
              </ul>

              <p className="kinder-text">
                At Aksharaa Kindergarten, we recognize each child's uniqueness
                and encourage their holistic development through our Balanced
                Education System and LRPA module, which promotes cognitive,
                physical, emotional, and social development. We offer a vibrant,
                kid-centered setting where learning is infused into play
                activities. Our play-based learning programs focus on:
              </p>

              <ul className="list-unstyled ">
                <li className="">
                  <FontAwesomeIcon
                    icon={faChild}
                    className="me-2 text-danger"
                  />
                  Stimulating a child's natural curiosity
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faPaintBrush}
                    className="me-2 text-danger"
                  />
                  Cultivating creativity and problem-solving
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faUserFriends}
                    className="me-2 text-danger"
                  />
                  Enhancing emotional and social development
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faChalkboardTeacher}
                    className="me-2 text-danger"
                  />
                  Encouraging independent thinking and decision-making
                </li>
              </ul>

              <p className="kinder-text">
                Our Touch-Explore-Learn-Enjoy process fosters curiosity,
                motivates exploration, and instills a lifelong love of learning.
                We also offer specialized learning centers where students can
                cultivate new skills independently and with the guidance of our
                dedicated facilitators.
              </p>
            </div>

            <div className="col-md-7 col-12 px-4 py-4">
              <img src="/kgpng.png" alt="" className="img-fluid" />

              <div className="mt-5 d-flex justify-content-between">
                <div>
                  <h4 className="kinder-head mb-md-2">
                    Extra/ Co-curricular Activities
                  </h4>
                  <ul className="list-unstyled ms-4 ">
                    <li className=" ">
                      <FontAwesomeIcon
                        icon={faRunning}
                        className="me-2 text-danger"
                      />
                      Yoga & Mindfulness{" "}
                    </li>

                    <li>
                      <FontAwesomeIcon
                        icon={faMusic}
                        className="me-2 text-danger"
                      />
                      Music & Movement{" "}
                    </li>
                    <li>
                      <FontAwesomeIcon
                        icon={faTheaterMasks}
                        className="me-2 text-danger"
                      />
                      Dance{" "}
                    </li>
                    <li>
                      <FontAwesomeIcon
                        icon={faSwimmer}
                        className="me-2 text-danger"
                      />
                      Water Splash{" "}
                    </li>
                    <li>
                      <FontAwesomeIcon
                        icon={faRunning}
                        className="me-2 text-danger"
                      />
                      Gymnastics{" "}
                    </li>
                    <li>
                      <FontAwesomeIcon
                        icon={faFootballBall}
                        className="me-2 text-danger"
                      />
                      Physical Exercise (P.E) / Sports{" "}
                    </li>

                    <li>
                      <FontAwesomeIcon
                        icon={faUserFriends}
                        className="me-2 text-danger"
                      />
                      Excursion/ Field Trips
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="kinder-head mb-md-2">
                    Aksharaa Approach to Quality Education
                  </h4>
                  <ul className="list-unstyled ms-4">
                    <li>
                      <FontAwesomeIcon
                        icon={faChalkboardTeacher}
                        className="me-2 text-danger"
                      />
                      Theme-based curriculum
                    </li>
                    <li>
                      <FontAwesomeIcon
                        icon={faHandsHelping}
                        className="me-2 text-danger"
                      />
                      Caring, qualified staff
                    </li>
                    <li>
                      <FontAwesomeIcon
                        icon={faLaptopCode}
                        className="me-2 text-danger"
                      />
                      Activity-based learning
                    </li>
                    <li>
                      <FontAwesomeIcon
                        icon={faChalkboardTeacher}
                        className="me-2 text-danger"
                      />
                      Field-based learning
                    </li>
                    <li>
                      <FontAwesomeIcon
                        icon={faTheaterMasks}
                        className="me-2 text-danger"
                      />
                      Co-curricular activities
                    </li>
                    <li>
                      <FontAwesomeIcon
                        icon={faUserFriends}
                        className="me-2 text-danger"
                      />
                      Parent-teacher collaboration
                    </li>
                    <li>
                      <FontAwesomeIcon
                        icon={faChild}
                        className="me-2 text-danger"
                      />
                      Child-friendly environment
                    </li>
                    <li>
                      <FontAwesomeIcon
                        icon={faLaptopCode}
                        className="me-2 text-danger"
                      />
                      ICT-integrated activities
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="kg-back" id="kg-back1">
        <div className="container">
          <div className="row py-4">
            <div className="col-12">
              <div className="row">
                <div className="col-md-3 col-6">
                  <img
                    src={school1}
                    alt="School 6"
                    className="img-fluid border border-white border-2"
                  />
                </div>
                <div className="col-md-3 col-6">
                  <img
                    src={school2}
                    alt="School 7"
                    className="img-fluid border border-white border-2"
                  />
                </div>
                <div className="col-md-3 col-6">
                  <img
                    src={school3}
                    alt="School 8"
                    className="img-fluid border border-white border-2"
                  />
                </div>
                <div className="col-md-3 col-6">
                  <img
                    src={school4}
                    alt="School 9"
                    className="img-fluid border border-white border-2"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Kindergarten;
