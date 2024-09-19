import React, { useEffect } from "react";
import "../css/Team.css";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";

const Team = () => {
  const pathname = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Helmet>
        <title>Team | Akashara</title>
        <meta
          name="description"
          content="Learn more about our company and team at Western Australia Care Pvt. Ltd., an NDIS provider organization committed to serving the community with respect and equality. Our core goals include providing assistance to individuals with disabilities, integrating them within the community, and helping them achieve their goals."
        />
        <meta
          name="keywords"
          content="about, about us, case, blog company, team, mission, vision, services,review, values, Western Australia Care Pvt. Ltd., NDIS, disabilities, community, respect, equality"
        />{" "}
      </Helmet>

      <div className="container my-5">

        <div className="row align-items-center">
          <h3 className="team-head text-center  border-bottom-title w-100">
            Our Executive Team
          </h3>

          <div className="col-md-12 border">
            <img
              src="	https://aksharaaschool.edu.np/storage/team-photos/February2024/V8Cu3yB1s8QBsGvARF3Z.jpg"
              alt="ECA and Event Co-ordinator"
              className="img-fluid"
            />
          </div>
        </div>

        <div className="row align-items-center">
          <h3 className="team-head text-center  border-bottom-title w-100">
            Team High School
          </h3>

          <div className="col-md-12 border">
            <img
              src="	https://aksharaaschool.edu.np/storage/team-photos/February2024/V8Cu3yB1s8QBsGvARF3Z.jpg"
              alt="ECA and Event Co-ordinator"
              className="img-fluid"
            />
          </div>
        </div>

        <div className="row align-items-center">
          <h3 className="team-head text-center  border-bottom-title w-100">
            Team Middle School
          </h3>

          <div className="col-md-12 border">
            <img
              src="	https://aksharaaschool.edu.np/storage/team-photos/February2024/V8Cu3yB1s8QBsGvARF3Z.jpg"
              alt="ECA and Event Co-ordinator"
              className="img-fluid"
            />
          </div>
        </div>

        <div className="row align-items-center">
          <h3 className="team-head text-center  border-bottom-title w-100">
            Team KinderGarten School
          </h3>

          <div className="col-md-12 border">
            <img
              src="	https://aksharaaschool.edu.np/storage/team-photos/February2024/V8Cu3yB1s8QBsGvARF3Z.jpg"
              alt="ECA and Event Co-ordinator"
              className="img-fluid"
            />
          </div>
        </div>

        {/* Teams Section */}
        <div className="container pb-4">
          <h3 className="team-head text-center my-4 border-bottom-title w-100">
            Administration & Operations
          </h3>

          <div className="row">
            <div className="col-md-3 col-sm-6">
              <div className="our-team">
                <div className="img-container">
                  <img
                    src="https://aksharaaschool.edu.np/storage/members/January2023/jx5H9QzLfYRjMzDTjetA.jpg"
                    alt
                    className="img-fluid team-image"
                  />
                </div>

                <div className="team-content">
                  <h3 className="title">Rashmila Thapa</h3>
                  <span className="post">Accountant</span>
                  <ul className="social-links">
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook" />{" "}
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-instagram" />{" "}
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-viber" />{" "}
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-linkedin" />{" "}
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-whatsapp" />{" "}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="our-team">
                <div className="img-container">
                  <img
                    src="https://aksharaaschool.edu.np/storage/members/October2019/lNwTEleOknIKHophNWjE.png"
                    alt
                    className="img-fluid team-image"
                  />
                </div>
                <div className="team-content">
                  <h3 className="title">Kaushila Pokharel</h3>
                  <span className="post">Financial Manager</span>
                  <ul className="social-links">
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook" />{" "}
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-instagram" />{" "}
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-viber" />{" "}
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-linkedin" />{" "}
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-whatsapp" />{" "}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="our-team">
                <div className="img-container">
                  <img
                    src="https://aksharaaschool.edu.np/storage/members/April2022/YfzsZUdflAn4ZS657EfW.jpg"
                    alt
                    className="img-fluid team-image"
                  />
                </div>
                <div className="team-content">
                  <h3 className="title">Ram Kumar Adhikari</h3>
                  <span className="post">IT Incharge</span>
                  <ul className="social-links">
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook" />{" "}
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-instagram" />{" "}
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-viber" />{" "}
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-linkedin" />{" "}
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-whatsapp" />{" "}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="our-team">
                <div className="img-container">
                  <img
                    src="https://aksharaaschool.edu.np/storage/members/February2022/GybhzCk3WloVI8Eqe3UO.JPG"
                    alt
                    className="img-fluid team-image"
                  />
                </div>
                <div className="team-content">
                  <h3 className="title">Bimal Bhattarai</h3>
                  <span className="post">
                    Admin cum Transportation Incharge
                  </span>
                  <ul className="social-links">
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook" />{" "}
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-instagram" />{" "}
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-viber" />{" "}
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-linkedin" />{" "}
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-whatsapp" />{" "}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-3 col-sm-6">
              <div className="our-team">
                <div className="img-container">
                  <img
                    src="https://aksharaaschool.edu.np/storage/members/February2022/PTp8lyBO7oCeIyYgJ14A.jpg"
                    alt
                    className="img-fluid team-image"
                  />
                </div>
                <div className="team-content">
                  <h3 className="title">Sabin Nepal</h3>
                  <span className="post">Operation Incharge</span>
                  <ul className="social-links">
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook" />{" "}
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-instagram" />{" "}
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-viber" />{" "}
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-linkedin" />{" "}
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-whatsapp" />{" "}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="our-team">
                <div className="img-container">
                  <img
                    src="/sabinamam2.jpg"
                    alt
                    className="img-fluid team-image"
                  />
                </div>
                <div className="team-content">
                  <h3 className="title">Sabina Karanjeet</h3>
                  <span className="post">Front Desk Officer</span>
                  <ul className="social-links">
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook" />{" "}
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-instagram" />{" "}
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-viber" />{" "}
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-linkedin" />{" "}
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-whatsapp" />{" "}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
