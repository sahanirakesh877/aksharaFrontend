




import React, { useEffect, useState, memo } from "react";
import { useNavigate, useLocation } from "react-router-dom";

// Extracted static data for AboutContent
const aboutData = {
  introText: [
    `Established in 2011, Aksharaa School is a co-educational institution 
    offering day school from Kindergarten through 10. The school operates 
    in three earthquake-resistant academic and administrative blocks 
    spread over 23 ropanis of land. Our advanced infrastructure includes 
    modern classrooms and facilities designed to provide a safe, 
    technologically advanced learning environment that meets international 
    standards.`,
    `Ranked among internationally accredited schools, Aksharaa is renowned 
    for employing innovative teaching methodologies in technology-enhanced 
    classrooms. Our child-friendly facilities create sophisticated learning 
    environments, encouraging students to engage deeply during their study hours.`,
  ],
  whyChooseUs: [
    {
      iconClass: "fas fa-check-square me-2 text-danger",
      title: "Modern Infrastructure: ",
      description:
        "Earthquake-resistant buildings and modern facilities ensure a safe and advanced learning environment.",
    },
    {
      iconClass: "fas fa-check-square me-2 text-danger",
      title: "Technologically Classrooms: ",
      description:
        "Integration of Information Communication Technology (ICT) and Learning-Reinforcement-Practice-Application (LRPA) to enhance learning.",
    },
    {
      iconClass: "fas fa-check-square me-2 text-danger",
      title: "Holistic Development: ",
      description:
        "Focus on physical, mental, and intellectual growth through our innovative Learning by Practice Reinforcement Approach (LPRA).",
    },
    {
      iconClass: "fas fa-check-square me-2 text-danger",
      title: "Experienced Faculty: ",
      description:
        "Dedicated and skilled educators committed to nurturing each child's potential.",
    },
    {
      iconClass: "fas fa-check-square me-2 text-danger",
      title: "Inclusive Learning Environment: ",
      description:
        "Child-friendly facilities that support a well-rounded education.",
    },
  ],
};

const PhilosophySection = memo(({ navigate }) => (
  <div className="mission-color py-4">
    <div className="container">
      <div className="row">
        <div className="col-12 text-center">
          <h2 className="w-100 border-bottom-title head-color">
            <span className="addcolor">Our Philosophy</span> & Approach
          </h2>
        </div>
      </div>
      <div className="row d-flex align-items-start mt-4">
        <div className="col-lg-6 col-md-12 mb-4">
          <p className="mission-p">
            Aksharaa School adopts a student-centered, constructivist philosophy, fostering
            autonomous learning and emphasizing awareness, autonomy, and authenticity. We cater
            to diverse intelligences, promoting holistic growth through a balanced education system.
          </p>
          <p className="mission-p">
            Our Learning-Reinforcement-Practice-Application (LRPA) module enhances cognitive abilities
            with fun and curiosity, encouraging critical thinking, collaboration, creativity, and
            problem-solving. This prepares students to be global citizens.
          </p>
          <p className="mission-p">
            We value respect and diversity, blending traditional values with modern technology. Through
            national festivals and educational trips, we instill patriotism and global awareness, aiming
            to nurture well-rounded, globally competent citizens.
          </p>
          <button className="button-21" onClick={() => navigate("/about")}>
            Know More<i className="fa-solid fa-arrow-right ms-2"></i>
          </button>
        </div>
        <div className="col-lg-6 col-md-12">
          <video width="100%" height="auto" controls className="mission-p">
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
));

const AboutContent = memo(() => (
  <div className="container py-2">
    <div className="text-center mb-4">
      <h2 className="w-100 border-bottom-title head-color">
        <span className="addcolor">Introduction</span>
      </h2>
    </div>
    <div className="mb-5">
      {aboutData.introText.map((text, index) => (
        <p className="mission-p" key={index}>
          {text}
        </p>
      ))}
    </div>
    <div className="bg-light p-4 rounded">
      <h5 className="font-weight-bold text-success mb-4">
        Why Choose Aksharaa School?
      </h5>
      <ul className="list-unstyled">
        {aboutData.whyChooseUs.map(({ iconClass, title, description }, index) => (
          <li className="mb-3 d-flex align-items-center flex-wrap" key={index}>
            <i className={iconClass} />
            <strong>{title}</strong> {description}
          </li>
        ))}
      </ul>
    </div>
    <div className="mt-5">
      <p className="mission-p">
        Through the implementation of a Learning-Reinforcement-Practice-Application (LRPA) approach,
        Aksharaa strives to achieve integrated child development.
      </p>
    </div>
  </div>
));

const About = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(location.pathname === "/");
  }, [location.pathname]);

  return show ? (
    <PhilosophySection navigate={navigate} />
  ) : (
    <>
      <AboutContent />
      <PhilosophySection navigate={navigate} />
    </>
  );
};

export default About;

