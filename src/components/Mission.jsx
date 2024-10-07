import React from "react";
import "../css/mission.css";

const missionData = [

  {
    iconClass: "fas fa-eye",
    title: "OUR VISION",
    description:
       "Nurturing young learners to become lifelong learners globally competent and responsible citizens.",
    iconColorClass: "about-icon2",
  },
  {
    iconClass: "fas fa-bullseye",
    title: "OUR MISSION",
    description:
'Aksharaa School inculcates value-based education with academic excellence through collaboration with parents and other stakeholders to instill resilience, leadership skills and emotional intelligence in each learner.' ,
   iconColorClass: "about-icon1",
  },    
  {
    iconClass: "fas fa-heart",
    title: "OUR VALUES",
    description:
    "We promote innovation and critical thinking while upholding excellence, honesty, and inclusion. Through community engagement, we foster lifelong learning and personal growth in our students, equipping them with the confidence to take on future challenges and developing into responsible, well-rounded persons.",
    iconColorClass: "about-icon3",
  },
];

const Mission = () => {
  return (
    <div className="mission-color ">
      <div className="container py-3">
        <div className="row d-flex  justify-content-between">
          {missionData.map((item, index) => (
            <div
              key={index}
              className="col-lg-4 col-md-6 col-sm-12  d-flex "
             >
              <div className="text-center d-flex flex-column justify-content-start corner-border shadow mx-4  w-100 h-auto  rounded-5  ">
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
