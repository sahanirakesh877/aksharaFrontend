import  comLab from '/cafe/comLab.jpeg'
import cafeteria from '/cafe/cafeteria.jpeg';
import library from '/cafe/library.jpeg';
import transportation from '/cafe/transportation.jpg';
import sciencelab from '/cafe/sciencelab.jpeg';
import infirmary from '/cafe/infirmary.jpg';

const infrastructureData = [
  {
    id: 1,
    title: "Computer Laboratory",
    iconClass: "fas fa-desktop text-primary",
    description: `Our Computer Laboratory is a cornerstone of our commitment to digital literacy and innovation. Equipped with 60 advanced computers, the lab features the latest hardware and software, all supported by high-speed internet connectivity. This facility is more than just a space for students to complete assignments; it is a hub for digital exploration and learning. Students and teachers have unrestricted access to the lab, encouraging them to delve into research, engage in coding projects, and explore multimedia tools. To ensure a safe online environment, we adhere to a strict code of conduct for internet use, fostering responsible digital citizenship.`,
    images: [comLab, comLab, comLab],
  },
  {
    id: 2,
    title: "Cafeteria",
    iconClass: "fas fa-utensils text-success",
    description: `The Cafeteria at Aksharaa School is designed to be a vibrant and welcoming space where students can enjoy nutritious and delicious meals. Our cafeteria offers a variety of vegetarian dishes, prepared daily by skilled chefs under strict hygiene standards. With a focus on health and wellness, our meals are crafted to meet the dietary needs of growing children while also providing a comfortable and social dining experience. The spacious cafeteria comfortably accommodates all students and staff, promoting a sense of community and relaxation during meal times.`,
    images: [
      cafeteria,
      cafeteria,
      cafeteria,
    ],
  },
  {
    id: 3,
    title: "Library",
    iconClass: "fas fa-book text-warning",
    description: `Our Library is more than just a collection of books; it is a treasure of intellectual resources designed to foster a love of reading and independent learning. The library boasts an extensive collection of reference books, encyclopedias, thematic manuscripts, magazines, and journals, catering to a wide range of interests and academic needs. The library is a hub for research and creative thinking, helping students develop critical reading skills and a passion for lifelong learning.`,
    images: [library, library, library],
  },
  {
    id: 4,
    title: "Playstation",
    iconClass: "fas fa-futbol text-info",
    description: `Our Playstations are designed to support the physical development and well-being of our students through engaging and dynamic recreational activities. These facilities are more than just spaces for play; they are integral to our holistic approach to education, combining academic learning with physical activity. Our playstations feature a range of equipment and sports facilities that encourage students to participate in various sports and games. This integration of physical fitness with educational experiences promotes a balanced lifestyle, fostering teamwork, resilience, and overall health in our students.`,
    images: [cafeteria, cafeteria, cafeteria],
  },
  {
    id: 5,
    title: "Parent Lounge",
    iconClass: "fas fa-users text-danger",
    description: `The Parent Lounge provides a comfortable and inviting space for parents to engage with the school community. Equipped with modern amenities, it offers a venue for parent-teacher meetings, school events, and informal gatherings, fostering a collaborative relationship between parents and the school.`,
    images: [library, library, library],
  },
  {
    id: 6,
    title: "Transportation",
    iconClass: "fas fa-bus text-primary",
    description: `Strategically located 3.5 km from Koteshwor’s ring road, Aksharaa School offers efficient and secure transportation options for students. Our fleet of modern school buses ensures that students are safely transported to and from school and other extracurricular activities. Additionally, the school is easily accessible via public transportation, making commuting convenient for all families. We prioritize student safety and comfort, providing a reliable and well-managed transportation system that supports our commitment to educational excellence.`,
    images: [
      transportation,
      transportation,
      transportation,
    ],
  },
  {
    id: 7,
    title: "Science Laboratory",
    iconClass: "fas fa-flask text-success",
    description: `The Science Laboratory at Aksharaa School is equipped with the latest scientific instruments and materials, creating an ideal environment for hands-on learning and experimentation. Our spacious lab is designed to enhance the understanding of scientific concepts through practical, interactive experiments. Students regularly engage in experiments that complement their classroom learning, supported by our kitchen garden, school garden, and field visits. This practical approach helps students connect theoretical knowledge with real-world applications, fostering a deeper understanding of scientific principles and encouraging a lifelong curiosity about the natural world.`,
    images: [
      sciencelab,
      sciencelab,
      sciencelab,
    ],
  },
  {
    id: 8,
    title: "Outdoor Learning Spaces",
    iconClass: "fas fa-seedling text-warning",
    description: `Our outdoor learning spaces include a dedicated garden and an open-air classroom. These areas are designed for experiential learning, allowing students to engage with nature, conduct environmental science experiments, and participate in outdoor educational activities. They offer a refreshing break from traditional classroom settings.`,
    images: [comLab, comLab, comLab],
  },
  {
    id: 9,
    title: "Infirmary",
    iconClass: "fas fa-stethoscope text-danger",
    description: `At Aksharaa School, the health and well-being of our students are paramount. Our Infirmary is staffed with a dedicated full-time nurse who provides immediate care for minor health issues and emergencies. The infirmary is equipped to handle a range of medical needs, from routine check-ups to urgent situations. We recognize the strong connection between health and learning, and our comprehensive health services include preventive care, health education, and coordination with local medical professionals. Our goal is to ensure that students receive prompt, effective care, enabling them to focus on their education without health-related concerns.`,
    images: [
      infirmary,
      infirmary,
      infirmary,
    ],
  },
];

export default infrastructureData;
