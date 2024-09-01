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
      "Nurturing young learners to become lifelong learners globally competent and responsible citizens.",
    iconColorClass: "about-icon2",
  },
  {
    iconClass: "fas fa-heart",
    title: "OUR VALUES",
    description:
      "We are committed to excellence, integrity, and inclusivity, fostering innovation and critical thinking. Through collaboration and community, we promote lifelong learning and personal growth. ",
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
