import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate=useNavigate()
  const [show, setShow] = useState();
  const location = window.location.pathname;
  useEffect(() => {
    if (location === "/") {
      setShow(true);
    } else {
      setShow(false);
    }
  }, []);
  return (
    <>
      {show ? (
        <div className="mission-color aboutbg py-4">
          <div className="container">
            <div className="row ">
              <div className="col-12 text-center">
                <h2 className="w-100 border-bottom-title head-color ">
                  <span className="addcolor ">Our Philosophy</span> & Approach
                </h2>
              </div>
            </div>
            <div className="row d-flex align-items-start mt-4">
              <div className="col-lg-6 col-md-12 mb-4">
                <p className="mission-p">
                  Aksharaa School adopts a student-centered, constructivist
                  philosophy, fostering autonomous learning and emphasizing
                  awareness, autonomy, and authenticity. We cater to diverse
                  intelligences, promoting holistic growth through a balanced
                  education system that supports cognitive, physical, emotional,
                  and social development.
                </p>
                <p className="mission-p">
                  Our Learning-Reinforcement-Practice-Application (LRPA) module
                  enhances cognitive abilities with fun and curiosity,
                  encouraging critical thinking, collaboration, creativity, and
                  problem-solving. This prepares students to be global citizens.
                </p>
                <p className="mission-p">
                  We value respect and diversity, blending traditional values
                  with modern technology. Through national festivals and
                  educational trips, we instill patriotism and global awareness,
                  aiming to nurture well-rounded, globally competent citizens.
                </p>
                <div className="ms-3 ">
                  <button className="button-21" role="button"  onClick={()=>navigate('/about')}>
                    Know More<i className="fa-solid fa-arrow-right ms-2"></i>
                  </button>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <video
                  width="100%"
                  height="auto"
                  controls
                  className="mission-p"
                >
                  <source
                    src="https://www.aksharaaschool.edu.np/public/assets/aksharaa-space.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="container py-5">
            <div className="text-center mb-4">
              <h2 className="w-100 border-bottom-title head-color ">
                <span className="addcolor ">Introduction </span>
              </h2>
            </div>
            <div className="mb-5">
              <p className="mission-p">
                Established in 2011, Aksharaa School is a co-educational
                institution offering day school from Kindergarten through 10.
                The school operates in three earthquake-resistant academic and
                administrative blocks spread over 23 ropanis of land. Our
                advanced infrastructure includes modern classrooms and
                facilities designed to provide a safe, technologically advanced
                learning environment that meets international standards.
              </p>
              <p className="mission-p">
                Ranked among internationally accredited schools, Aksharaa is
                renowned for employing innovative teaching methodologies in
                technology-enhanced classrooms. Our child-friendly facilities
                create sophisticated learning environments, encouraging students
                to engage deeply during their study hours. We are committed to
                fostering a physically, mentally, and intellectually stimulating
                environment that promotes the holistic development of young
                children.
              </p>
            </div>

            <div className="bg-light p-4 rounded">
              <h5 className="font-weight-bold text-primary mb-4">
                Why Choose Aksharaa School?
              </h5>
              <ul className="list-unstyled">
                <li className="mb-3 d-flex   ">
                  <i className="fas fa-check-square me-2 text-danger" />
                  <strong>Modern Infrastructure : </strong>
                  Earthquake-resistant buildings and modern facilities ensure a
                  safe and advanced learning environment.
                </li>
                <li className="mb-3 ">
                  <i className="fas fa-check-square me-2 text-danger" />
                  <strong>Technologically Advanced Classrooms : </strong>
                  Integration of Information Communication Technology (ICT) and
                  Learning-Reinforcement-Practice-Application (LRPA) to enhance
                  learning.
                </li>
                <li className="mb-3 ">
                  <i className="fas fa-check-square me-2 text-danger" />
                  <strong>Holistic Development : </strong>Focus on physical,
                  mental, and intellectual growth through our innovative
                  Learning by Practice Reinforcement Approach (LPRA).
                </li>
                <li className="mb-3">
                  <i className="fas fa-check-square me-2 text-danger" />
                  <strong>Experienced Faculty : </strong>Dedicated and skilled
                  educators committed to nurturing each child's potential.
                </li>
                <li className="mb-3">
                  <i className="fas fa-check-square me-2 text-danger" />{" "}
                  <strong>Inclusive Learning Environment : </strong>
                  Child-friendly facilities that support a well-rounded
                  education.
                </li>
              </ul>
            </div>

            <div className="mt-5">
              <p className="mission-p ">
                Through the implementation of a
                Learning-Reinforcement-Practice-Application (LRPA) approach that
                incorporates creative teaching techniques, ongoing
                reinforcement, practical experience, and real-world application,
                Aksharaa strives to achieve integrated child development. Our
                institutional setup, combined with modern technologies, ensures
                a comprehensive educational experience that supports and
                enhances student learning.
              </p>
            </div>
          </div>
          <div className=" bg-light">
            <div className="container">
              <figure className="d-flex justify-content-center align-content-center ">
                <img src="/roadmap.png" alt="" className="img-fluid w-75 " />
              </figure>
            </div>
          </div>

          <div className="mission-color  py-5">
            <div className="container">
              <div className="row ">
                <div className="col-12 text-center">
                  <h2 className="w-100 border-bottom-title head-color ">
                    <span className="addcolor ">Our Philosophy</span> & Approach
                  </h2>
                </div>
              </div>
              <div className="row d-flex align-items-center py-5">
                <div className="col-lg-6 col-md-12 mb-4">
                  <p className="mission-p">
                    Aksharaa School adopts a student-centered, constructivist
                    philosophy, fostering autonomous learning and emphasizing
                    awareness, autonomy, and authenticity. We cater to diverse
                    intelligences, promoting holistic growth through a balanced
                    education system that supports cognitive, physical,
                    emotional, and social development.
                  </p>
                  <p className="mission-p">
                    Our Learning-Reinforcement-Practice-Application (LRPA)
                    module enhances cognitive abilities with fun and curiosity,
                    encouraging critical thinking, collaboration, creativity,
                    and problem-solving. This prepares students to be global
                    citizens.
                  </p>
                  <p className="mission-p">
                    We value respect and diversity, blending traditional values
                    with modern technology. Through national festivals and
                    educational trips, we instill patriotism and global
                    awareness, aiming to nurture well-rounded, globally
                    competent citizens.
                  </p>
                  <button className="button-21" role="button">
                    Know More<i className="fa-solid fa-arrow-right ms-2"></i>
                  </button>
                </div>
                <div className="col-lg-6 col-md-12">
                  <video
                    width="100%"
                    height="auto"
                    controls
                    className="mission-p"
                  >
                    <source
                      src="https://www.aksharaaschool.edu.np/public/assets/aksharaa-space.mp4"
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default About;
