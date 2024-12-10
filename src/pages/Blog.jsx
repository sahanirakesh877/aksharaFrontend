import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useLocation, useNavigate } from "react-router-dom";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import axios from "axios";
import Loader from "../components/Loader";
import SafeHTML from "../components/SafeHTML";
import longtermProjectsdata from "../Data/ProjectData";

const Blog = () => {
  const { pathname } = useLocation();
  const [filter, setFilter] = useState("Featured News");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_SERVERAPI}/api/v1/activity/`
        );
        console.log('creative week activity',response.data) 

        if (response.data.success) {
          setData(response.data.activities);
          console.log("blogs data fetchs", response.data.activities);
        } else {
          console.error("Failed to fetch  data:", response.data.message);
          setError(response.data.message);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("An error occurred while fetching data.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  const blogData = [
    {
      id: 1,
      title: "Annual Functions",
      date: "2024-Mar-15",
      des: "Our School celebrating National Parent Involvement Day on Dec 3.",
    },
    {
      id: 2,
      title: "Exhibition's day",
      date: "2024-May-12",
      des: "Year 6 pupils are invited to join us for a Taster Day.",
    },
    {
      id: 3,
      title: "Robotics Training",
      date: "2024-Apr-10",
      des: "Celebrating National Parent Involvement Day on December 3.",
    },
    {
      id: 4,
      title: "Online Learning Tips",
      date: "2024-Jul-20",
      des: "Year 6 pupils are invited to join us for a Taster Day.",
    },
    {
      id: 5,
      title: "Exhibition's day",
      date: "2024-sep-29",
      des: "Year 6 pupils are invited to join us for a Taster Day.",
    },
    {
      id: 6,
      title: "Training Corner",
      date: "2024-apr-06",
      des: "Year 6 pupils are invited to join us for a Taster Day.",
    },
    {
      id: 7,
      title: "Robotics Training",
      date: "2024-feb-01",
      des: "Year 6 pupils are invited to join us for a Taster Day.",
    },
    {
      id: 8,
      title: "Farewell Program",
      date: "2024-Jan-10",
      des: "Year 6 pupils are invited to join us for a Taster Day.",
    },
  ];

  const scheduleData = [
    {
      date: "Shrawan 2081 (July- August 2024)",
      event: [
        "10th: Mid-Term Exams End",
        "14th: Maha Shivaratri (No School)",
        "20th: Result Day and Parent-Teacher Conference",
        "29th: Holi Festival (No School)",
        "	6th: Teachers Day",
      ],
    },
    {
      date: "Bhadra 2081 (Aug - Sept 2024)",
      event: [
        "	3rd : Janai Purnima (No School)",
        "	4th: Gaai Jatra",
        "	10th: krishna Janmashtami Day Celebration",
        "	17th: Father’s Day",
        "	21st: Teej Festival (No School)",
      ],
    },

    {
      date: "Asoj 2081 (Sep - Oct 2024)",
      event: [
        "5th: Parent-Teacher Meeting",
        "17th - 30th: Dashain Break (No School)",
      ],
    },
    {
      date: "Kartik 2081 (Oct - Nov 2024)",
      event: ["15th - 19th: Tihar Break (No School)", "22nd: Chhath Puja"],
    },
    {
      date: "Mangsir 2081 (Nov - Dec 2024)",
      event: [
        "18th: International Disable Day",
        "20th: Result Day and Parent-Teacher Conference",
        "25th: Winter Cultural Program",
      ],
    },
    {
      date: "Poush 2081 (Dec 2024 - Jan 2025)",
      event: [
        "1st: Winter Break Begins (No School)",
        "10th: Christmas Day",
        "15th: Winter Break Ends, School Resumes",
        "25th: Saraswati Puja Celebration",
      ],
    },

    {
      date: "Magh 2081 (Jan - Febr 2025)",
      event: [
        "5th: Educational Tour",
        "15th: Sports Competition",
        "21st: Saraswati Puja",
        "28th: Martyrs' Day (No School)",
      ],
    },
    {
      date: "Falgun 2081 (Feb - Mar 2025)",
      event: ["1st: Mid-Term Exams Start"],
    },
    {
      date: "Chaitra 2081 (Mar - Apr 2025)",
      event: [
        "5th: Annual Day Rehearsal",
        "8th: Annual Day Celebration",
        "16th: Ghodey Jatra",
        "20th: Final Exams Start",
        "30th: Final Exams End",
      ],
    },
  ];

  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  };

  const filteredBlogData = blogData.filter((item) => {
    if (filter === "Featured News") {
      return true;
    } else if (filter === "Upcoming Events") {
      return true;
    }
    return false;
  });

  const items = data.map((item, index) => (
    <div
      className="item"
      key={index}
      onClick={() => navigate(`/newsactivity/${item._id}`)}
    >
      <article className="blog-card">
        <div className="blog-card__background">
          <div className="card__background--wrapper">
            <div
              className="card__background--main"
              style={{
                backgroundImage: `url(${
                  import.meta.env.VITE_SERVERAPI
                }/${item.image.replace(/\\/g, "/")})`,
              }}
            >
              <div className="card__background--layer" />
            </div>
          </div>
        </div>
        <div className="blog-card__head">
          <span className="date__box">
            {(() => {
              const date = new Date(item.createdAt);
              const day = date.getDate(); // Get day as number
              const month = date
                .toLocaleString("en-US", { month: "short" })
                .toUpperCase(); // Get month abbreviation in uppercase

              return (
                <>
                  <span className="date__day">{day}</span>
                  <span className="date__month">{month}</span>
                </>
              );
            })()}
          </span>
        </div>

        <div className="blog-card__info">
          <h6>{item.title}</h6>
          <p className="card-text  ">
            <SafeHTML htmlString={item.description.slice(0, 120)} />
          </p>
          <Link to={`/newsactivity/${index}`} className="btn btn--with-icon">
            <i className="btn-icon fa fa-long-arrow-right" />
            READ MORE
          </Link>
        </div>
      </article>
    </div>
  ));

  return (
    <>
      <Helmet>
        <title>Blog | Aksharaa</title>
        <meta
          name="description"
          content="Learn more Blog our company and team at Western Australia Care Pvt. Ltd., an NDIS provider organization committed to serving the community with respect and equality. Our core goals include providing assistance to individuals with disabilities, integrating them within the community, and helping them achieve their goals."
        />
        <meta
          name="keywords"
          content="Blog, Blogus, case, blog company, team, mission, vision, services, review, values, Western Australia Care Pvt. Ltd., NDIS, disabilities, community, respect, equality"
        />
      </Helmet>

      <div className="demo">
        <div className="container">
          <h2 className="text-center pt-5   fs-2  border-bottom-title w-100  head-color">
            {" "}
            <span className="addcolor">Aksharaa</span> Highlights
          </h2>

          <div className="d-flex flex-row pt-4 gap-2 justify-content-center align-items-center flex-wrap">
            <h6
              className={`border rounded-pill px-4 py-1 flex-wrap d-flex border-info text-center fw-semibold ${
                filter === "Featured News" ? "text-danger" : "text-dark"
              } fs-6 fs-md-5 fs-lg-4`}
              onClick={() => setFilter("Featured News")}
            >
              Activities
            </h6>
            <h6
              className={`border rounded-pill px-4 py-1 border-info flex-wrap d-flex text-center fw-semibold ${
                filter === "Upcoming Events" ? "text-danger" : "text-dark"
              } fs-6 fs-md-5 fs-lg-4`}
              onClick={() => setFilter("Upcoming Events")}
            >
              Upcoming Events
            </h6>

            <h6
              className={`border rounded-pill px-4 py-1 border-info flex-wrap d-flex text-center fw-semibold ${
                filter === "Calendar" ? "text-danger" : "text-dark"
              } fs-6 fs-md-5 fs-lg-4`}
              onClick={() => setFilter("Calendar")}
            >
              Calendar
            </h6>

            {/* Akshara Highlights */}
            <h6
              className={`border rounded-pill px-4 py-1 border-info flex-wrap d-flex text-center fw-semibold ${
                filter === "longtermProject" ? "text-danger" : "text-dark"
              } fs-6 fs-md-5 fs-lg-4`}
              onClick={() => setFilter("longtermProject")}
            >
              Our LongTerm Projects
            </h6>
          </div>
        </div>

        <div className="">
          {filter === "Featured News" && (
            <div className="container py-5">
              <div className="row">
                <AliceCarousel
                  mouseTracking
                  items={items}
                  infinite={true}
                  autoPlay={true}
                  animationDuration={1500}
                  responsive={responsive}
                  disableButtonsControls
                  disableDotsControls
                  controlsStrategy="responsive"
                />
              </div>
            </div>
          )}

          {filter === "Upcoming Events" && (
            <div className="container blog-container py-4">
              <div className="row py-4">
                <h4 className="text-center my-4  border-bottom-title">
                  School Events Schedule
                </h4>
                {filteredBlogData.map((item) => (
                  <div className="col-md-6 mb-4" key={item.id}>
                    <div className="d-flex justify-content-center align-items-center p-3 border">
                      <div className="calenderBox d-flex justify-content-center align-items-center flex-column">
                        <span className="fs-1">{item.date.slice(9, 11)}</span>
                        <span className="calen-date">
                          {item.date.slice(5, 8)}
                        </span>
                      </div>
                      <div className="calender-text d-flex flex-column justify-content-center align-items-start ms-3 flex-fill">
                        <h6>{item.title}</h6>
                        <p className="calen-p">{item.des}</p>
                        <p className="calen-p">{item.date}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {filter === "Calendar" && (
            <div className="container py-4">
              <div className="row py-4">
                <h4 className="text-center my-5  border-bottom-title">
                  Calender Schedule
                </h4>

                {scheduleData.map((item, index) => (
                  <div key={index} className="col-md-3 mb-2">
                    <div className="p-3 border">
                      <h6 className="text-success">{item.date}</h6>
                      <div className="d-flex flex-column align-items-start gap-2">
                        {item.event.map((event, eventIndex) => (
                          <div
                            key={eventIndex}
                            className="d-flex align-items-center"
                          >
                            <i className="fa-regular fa-calendar text-danger me-2"></i>
                            <p className="card-text mb-0">{event}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Akshara Highlights */}
          {filter === "longtermProject" && (
            <div className="container py-4">
              <div className="row py-4">
                <h4 className="text-center my-4 border-bottom-title">
                  Our Long Term Projects
                </h4>
                <p>Projects that stretch from three months to one year fall under 'Long-Term Projects'. These initiatives usually have integration with all subjects to achieve the learning objective of the National Curriculum. Every project end with a culmination for the display of the learning where parents and other students are invited. In addition to academic learning, students get an opportunity to experience hands on learning. These projects help sharpen thinking skills, time management, organization, collaboration, endurance, communication and leadership skills.</p>

                <div className="row">
                  {longtermProjectsdata.map((project, id) => (
                    <div className="col-md-3" key={project.id}>
                      <Link to={`/newsactivity/longterm-project/${id + 1}`}>
                        <div className="card shadow-lg rounded border-0 h-100">
                          <img
                            src={project.image[0]}
                            className="card-img-top"
                            alt={project.title}
                            style={{ height: "200px", objectFit: "cover" }}
                          />
                          <div className="card-body">
                            <h5 className="card-title text-dark text-center">
                              {project.title}
                            </h5>
                            <p className="card-text">
                              {project.description.slice(0,60)}
                            </p>
                            <button className="border-0 ">View More</button>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Blog;
