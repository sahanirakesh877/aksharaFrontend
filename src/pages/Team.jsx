import React, { useEffect } from "react";
import "../css/Team.css";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import GroupImg from "/group.jpg";
import sabinamam from "/sabinamam2.jpg";

const TeamMember = ({ imgSrc, name, position, socialLinks }) => (
  <div className="col-md-3 col-sm-6 ">
    <div className="our-team">
      <div className="img-container">
        <img src={imgSrc} alt={name} className="img-fluid team-image" />
      </div>
      <div className="team-content">
        <h3 className="title">{name}</h3>
        <span className="post">{position}</span>
        <ul className="social-links">
          {socialLinks.map((link, index) => (
            <li key={index}>
              <a href={link.href}>
                <i className={`fab fa-${link.icon}`} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

const TeamSection = ({ title, imgSrc, members }) => (
  <div className="container pb-4">
    <h3 className="team-head text-center  border-bottom-title w-100">
      {title}
    </h3>
    {imgSrc && (
      <div className="row align-items-center">
        <div className="col-md-12 border">
          <img src={imgSrc} alt={title} className="img-fluid" />
        </div>
      </div>
    )}
    {members && (
      <div className="row mb-4">
        {members.map((member, index) => (
          <TeamMember key={index} {...member} />
        ))}
      </div>
    )}
  </div>
);
// Data for team sections
const teamSections = [
  {
    title: "Our Executive Team",
    imgSrc: GroupImg,
  },
  {
    title: "Team High School",
    imgSrc: GroupImg,
  },
  {
    title: "Team Middle School",
    imgSrc: GroupImg,
  },
  {
    title: "Team Kindergarten School",
    imgSrc: GroupImg,
  },
  {
    title: "Administration & Operations",
    members: [
      {
        imgSrc:
          "https://aksharaaschool.edu.np/storage/members/January2023/jx5H9QzLfYRjMzDTjetA.jpg",
        name: "Rashmila Thapa",
        position: "Accountant",
        socialLinks: [
          { href: "#", icon: "facebook" },
          { href: "#", icon: "instagram" },
          { href: "#", icon: "viber" },
          { href: "#", icon: "linkedin" },
          { href: "#", icon: "whatsapp" },
        ],
      },
      {
        imgSrc:
          "https://aksharaaschool.edu.np/storage/members/October2019/lNwTEleOknIKHophNWjE.png",
        name: "Kaushila Pokharel",
        position: "Financial Manager",
        socialLinks: [
          { href: "#", icon: "facebook" },
          { href: "#", icon: "instagram" },
          { href: "#", icon: "viber" },
          { href: "#", icon: "linkedin" },
          { href: "#", icon: "whatsapp" },
        ],
      },
      {
        imgSrc:
          "https://aksharaaschool.edu.np/storage/members/April2022/YfzsZUdflAn4ZS657EfW.jpg",
        name: "Ram Kumar Adhikari",
        position: "IT Incharge",
        socialLinks: [
          { href: "#", icon: "facebook" },
          { href: "#", icon: "instagram" },
          { href: "#", icon: "viber" },
          { href: "#", icon: "linkedin" },
          { href: "#", icon: "whatsapp" },
        ],
      },
      {
        imgSrc:
          "https://aksharaaschool.edu.np/storage/members/February2022/GybhzCk3WloVI8Eqe3UO.JPG",
        name: "Bimal Bhattarai",
        position: "Admin cum Transportation Incharge",
        socialLinks: [
          { href: "#", icon: "facebook" },
          { href: "#", icon: "instagram" },
          { href: "#", icon: "viber" },
          { href: "#", icon: "linkedin" },
          { href: "#", icon: "whatsapp" },
        ],
      },
      {
        imgSrc:
          "https://aksharaaschool.edu.np/storage/members/February2022/PTp8lyBO7oCeIyYgJ14A.jpg",
        name: "Sabin Nepal",
        position: "Operation Incharge",
        socialLinks: [
          { href: "#", icon: "facebook" },
          { href: "#", icon: "instagram" },
          { href: "#", icon: "viber" },
          { href: "#", icon: "linkedin" },
          { href: "#", icon: "whatsapp" },
        ],
      },
      {
        imgSrc: sabinamam,
        name: "Sabina Karanjeet",
        position: "Front Desk Officer",
        socialLinks: [
          { href: "#", icon: "facebook" },
          { href: "#", icon: "instagram" },
          { href: "#", icon: "viber" },
          { href: "#", icon: "linkedin" },
          { href: "#", icon: "whatsapp" },
        ],
      },
    ],
  },
];

const Team = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <Helmet>
        <title>Team | Aksharaa</title>
        <meta
          name="description"
          content="Learn more about our team at Aksharaa School."
        />
        <meta
          name="keywords"
          content="team, staff, Aksharaa School, educators, administration"
        />
      </Helmet>

      <div className="container my-4">
        {teamSections.map((section, index) => (
          <TeamSection key={index} {...section} />
        ))}
      </div>
    </>
  );
};

export default Team;