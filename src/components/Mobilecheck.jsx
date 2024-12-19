import React from "react";
import "../css/Mobilecheck.css";
import { useNavigate } from "react-router-dom";
import seniorImg from "../../src/assets/children/High School final.png";
import middleImg from "../../src/assets/children/Middle school_png.png";
import kindergartenImg from "../../src/assets/children/Kindergarten _final.png";
import elementaryImg from "../../src/assets/children/Elementary School_final.png";

// Reusable Section Component
const Section = ({
  title,
  description,
  image,
  imageAlt,
  buttonText,
  buttonLink,
  reverse,
}) => {
  const navigate = useNavigate();

  return (
    <div
      className={`row align-items-center my-4 ${
        reverse ? "flex-row-reverse" : ""
      }`}
    >
      <div className="col-lg-3 col-md-6 col-12 text-center text-md-start mb-3 mb-lg-0">
        <h2 className="mb-head sanskar">{title}</h2>
        <p className="mb-p">{description}</p>
        <button className="mb-btn" onClick={() => navigate(buttonLink)}>
          {buttonText}
        </button>
      </div>
      <div className="col-lg-9 col-md-6 col-12 bgimg">
        <img
          src={image}
          alt={imageAlt}
          loading="lazy"
          className="img-fluid rounded custom-img"
        />
      </div>
    </div>
  );
};

const Mobilecheck = () => {
  return (
    <div className="demo">
      <div className="container py-4">
        {/* Heading Section */}
        <div className="row">
          <div className="col-12 text-center mb-2">
            <h3 className="display-7 fw-bold">
              <span className="sanskar">संस्कारयुक्त शिक्षा</span>
              <br />
              Aksharaa's Guiding Principle
            </h3>
          </div>
          <div className="col-12">
            <p className="mb-p">
              Our guiding concept at Aksharaa School is "संस्कारयुक्त शिक्षा"
              which translates to education infused with values. We aim to
              develop individuals who possess good character and moral
              integrity, preparing them for life's challenges beyond academic
              achievements. Our Learning-Reinforcement-Practice-Application
              (LRPA) module fosters critical thinking, creativity, and
              problem-solving, and our curriculum emphasizes respect, integrity,
              compassion, and responsibility.
            </p>
          </div>
        </div>

        {/* Sections */}
        <Section
          title="High School (Class 8-10)"
          description="Our Senior School program combines rigorous academics with value-based education, ensuring students are well-prepared for higher education and life’s challenges. Display of handmade crafts and DIY projects created by our students. Local & natural materials are used for creating these crafts."
          image={seniorImg}
          imageAlt="Senior School"
          buttonText="Enroll now"
          buttonLink="/academics/high"
        />

        <Section
          title="Middle School (Class 6-7)"
          description="Middle School education at Aksharaa encourages independent learning and ethical reasoning, equipping students with skills and values for future success. Our advisory programs provide additional support and mentorship."
          image={middleImg}
          imageAlt="Girl"
          buttonText="Enroll now"
          buttonLink="/academics/middle"
          reverse
        />

        <Section
          title="Elementary School"
          description="Aksharaa’s Elementary School nurtures intellectual growth and character development, ensuring students excel academically while embodying ethical principles. We aim to develop confident, well-rounded individuals prepared for middle school and beyond."
          image={kindergartenImg}
          imageAlt="Girl 2"
          buttonText="Enroll now"
          buttonLink="/academics/elementary"
        />

        <Section
          title="Kindergarten (PG-KG)"
          description="In our Kindergarten classes, children learn through playful experiences while instilling values like kindness, honesty, and respect. Our fun and educational activities promote holistic growth, teaching empathy and cooperation."
          image={elementaryImg}
          imageAlt="Kindergarten"
          buttonText="Enroll now"
          buttonLink="/academics/kindergarten"
          reverse
        />
      </div>
    </div>
  );
};

export default Mobilecheck;
