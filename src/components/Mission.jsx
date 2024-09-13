import React from "react";
import "../css/mission.css";

const missionData = [
  {
    iconClass: "fas fa-bullseye",
    title: "OUR MISSION",
    description:
      "Aksharaa School inculcates value-based education with academic excellence through collaboration with parents and other stakeholders to instill resilience, leadership skills, and emotional intelligence in each learner.",
    iconColorClass: "about-icon1",
  },
  {
    iconClass: "fas fa-eye",
    title: "OUR VISION",
    description:
      // "Nurturing young learners to become lifelong learners globally competent and responsible citizens.",
      'We envision Aksharaa School as a premier education center in Kathmandu that equips pupils to prosper in a world that is changing quickly. By embracing innovative teaching methods and cultivating a culture of curiosity and compassion, we aim to shape future leaders who are not only knowledgeable but also empathetic and driven by a lifelong passion for learning.',
    iconColorClass: "about-icon2",
  },
  {
    iconClass: "fas fa-heart",
    title: "OUR VALUES",
    description:
      "We are committed to fostering excellence, integrity, and inclusivity. We encourage innovation and critical thinking, empowering students to confidently face future challenges. Through collaboration with the community, we promote lifelong learning and personal growth, helping students develop into responsible and well-rounded individuals.",
    iconColorClass: "about-icon3",
  },
];

const Mission = () => {
  return (
    <div className="mission-color ">
      <div className="container py-5">
        <div className="row d-flex  justify-content-between">
          {missionData.map((item, index) => (
            <div
              key={index}
              className="col-lg-4 col-md-6 col-sm-12  d-flex mb-5"
             >
              <div className="text-center d-flex flex-column justify-content-start corner-border shadow mx-4  w-100 h-100  rounded-5  ">
                <i
                  className={`${item.iconClass} ${item.iconColorClass} mb-2 py-2 animated-icon`}
                  style={{ fontSize: "3em" }}
                ></i>
                <h4 className="text-center mission-head">{item.title}</h4>
                <p className="mission-p">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Mission;
