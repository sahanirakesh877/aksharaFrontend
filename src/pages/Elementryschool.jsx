import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

// import school1 from '/school/school1.jpg'
import school1 from '../../src/assets/school/school1.jpg';
import school2 from '../../src/assets/school/school2.jpg'
import school3 from '../../src/assets/school/school3.jpg'
import school4 from '../../src/assets/school/school4.jpg'
import school5 from '../../src/assets/school/school5.jpg'

const brandImg = [
  school2,
  school4,
  school1,
  school3,
  school5,
];
const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 2 },
};
const items = brandImg.map((img, index) => (
  <div className="academic-itemk" key={index}>
    <img src={img} alt={`Brand ${index + 1}`} className="" />
  </div>
));

const Elementryschool = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="py-2 ">
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

      <div className=" py-2">
        <div className="container mx-auto ">
       


          <h3 className="w-100 border-bottom-title head-color text-center">
            <span className="addcolor">Elementary School  </span> (Grades  1-5)
          </h3>

          <div className="row d-flex align-items-start py-4 ">
            <div className="col-md-6 col-12 px-4">
              <p className="kinder-text">
              Quality education is more than only academics; it encompasses life skills, manners, and cultural understanding. Elementary school, which includes grades from 1 to 5, is a special time in a child's life where they develop foundational academic and social skills. Our Elementary School program is a unique approach that focuses on empowering children not only academically but also socially. It emphasizes personalized attention with two instructors per classroom. 
              </p>
              <p className="kinder-text">
              By integrating reading, play, and culturally enriching activities, young learners find joy in education that goes beyond textbooks. Why settle for rote learning? Children deserve an environment where academics intertwine with personal growth, shaping them into well-rounded individuals. This approach fosters critical thinking and encourages children to express themselves while developing essential life skills. With a commitment to nurturing both intellect and character, this educational service prepares students not just for the next class but for a fulfilling life ahead. 
              </p>

              {/* <div className="g pb-3">
                <div className="gallerys p-4 ">
                  <img src="/a.jpg" alt="a big park inside a modern city" />
                  <img src="/b.jpg" alt="a small street between buildings" />
                  <img src="/c.jpg" alt="view from the sky of a big city" />
                  <img src="/d.jpg" alt="a bridge at night" />
                </div>
              </div>  */}
            </div>

            <div className="col-md-6 col-12 px-4">
              {/* <div className="py-3 px-3">
                <AliceCarousel
                  mouseTracking
                  items={items}
                  autoPlay={true}
                  infinite={true}
                  responsive={responsive}
                  controlsStrategy="alternate"
                  animationDuration={1500}
                  disableButtonsControls={true}
                  disableDotsControls={true} 
                />
              </div> */}

              <h5 className="kinder-subhead mb-md-2">
                Beyond Academics: Enriching Experiences through Activities
              </h5>
              <ul className="list-unstyled">
                <li>
                  <i className="fas fa-check-square me-2 text-danger" />{" "}
                  Interactive and Thematic Grade-Wise Assemblies
                </li>
                <li>
                  <i className="fas fa-check-square me-2 text-danger" />{" "}
                  Educational and Fun-Filled Grade-Wise Tours
                </li>
                <li>
                  <i className="fas fa-check-square me-2 text-danger" />{" "}
                  Experiential Learning through Labs and Field Trips
                </li>
                <li>
                  <i className="fas fa-check-square me-2 text-danger" />{" "}
                  Empowering Leadership and Community Engagement
                </li>
                <li>
                  <i className="fas fa-check-square me-2 text-danger" />{" "}
                  Comprehensive Social–Emotional Learning (SEL) Support
                </li>
                <li>
                  <i className="fas fa-check-square me-2 text-danger" /> Age
                  appropriate ECA and CCA Activities
                </li>
                <li>
                  <i className="fas fa-check-square me-2 text-danger" /> Parent
                  Involvement Workshops
                </li>
              </ul>

              {/* <div className="g pb-3">
                <div className="gallerys p-4 ">
                  <img src="/a.jpg" alt="a big park inside a modern city" />
                  <img src="/b.jpg" alt="a small street between buildings" />
                  <img src="/c.jpg" alt="view from the sky of a big city" />
                  <img src="/d.jpg" alt="a bridge at night" />
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      <div className="kg-back" id="kg-back1">
        <div className="container">
          <div className="row py-4 ">
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

export default Elementryschool;
