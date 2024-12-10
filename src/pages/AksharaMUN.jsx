import React from "react";




import mun1 from '../../src/assets/mun/GP4A7417.jpg'
import mun2 from '../../src/assets/mun/GP4A7521.jpg'
import mun3 from '../../src/assets/mun/GP4A7640.jpg'
import mun4 from '../../src/assets/mun/GP4A7788.jpg'
import mun5 from '../../src/assets/mun/GP4A7848.jpg'
import mun6 from '../../src/assets/mun/GP4A7922.jpg'
import mun7 from '../../src/assets/mun/GP4A7977.jpg'
import mun8 from '../../src/assets/mun/GP4A8276.jpg'

const AksharaMUN = () => {
  return (
    <>
    <div className="bg-light">

  
      <div className="container py-5">
        {/* AksharaMUN Section */}
        <section id="aksharaMUN">
          <h2 className="border-bottom-title justify-content-center mb-3 head-color d-flex align-items-start">
            <span className="addcolor">AKSHARAA MODEL UNITED Nations </span>  AMUN
          </h2>

          <div className="row">
            {/* Image Grid for AksharaMUN */}
            <div className="col-md-3 mb-3">
              <img
                src={mun1}
                className="img-fluid rounded"
                alt="AksharaMUN 1"
              />
            </div>
            <div className="col-md-3 mb-3">
              <img
                src={mun2}
                className="img-fluid rounded"
                alt="AksharaMUN 2"
              />
            </div>
            <div className="col-md-3 mb-3">
              <img
                src={mun3}
                className="img-fluid rounded"
                alt="AksharaMUN 3"
              />
            </div>
            <div className="col-md-3 mb-3">
              <img
                src={mun4}
                className="img-fluid rounded"
                alt="AksharaMUN 4"
              />
            </div>
          </div>

          {/* Content about AksharaMUN */}
          <h3>About MUN</h3>
          <p className="about-p">
          Model United Nations (MUN) is an educational activity that stimulates the proceedings of the United Nations, allowing participants to step into the roles of diplomats and representatives of various countries. <br /> 
          Students engage in debates, negotiations, and problem-solving during this conference within assigned committees, addressing global issues such as diplomacy, security, economics, and social affairs.  <br />
          It provides a dynamic platform for participants to develop a deep appreciation for global affairs while clarifying their abilities to steer complex diplomatic scenarios.
          </p>
          <h3>WHY AMUN? </h3>
          <p className="about-p">
          The Aksharaa Model United Nations is an esteemed annual event organized by Aksharaa School, providing a dynamic platform for young minds to engage in meaningful discussions on global issues, diplomacy, and conflict resolution. With great pride, we aim to foster an enriching experience that empowers students to develop essential skills such as critical thinking, public speaking, and negotiation abilities, which are crucial for shaping tomorrow's future leaders and innovators. 
          <br />
          Our AMUN features an array of exciting committees, each focusing on pressing international issues. Students will have the extraordinary opportunity to represent different countries, engage in debates and negotiations, and collaborate on drafting resolutions that mirror real-world challenges the global community faces.
          </p>
        </section>

        {/* Activities Section */}
        <section id="activities" className="my-5">
          <div className="row d-flex justify-content-between  align-items-start">
            {/* Left Content Section */}
            <div className="col-md-6">
              <h3>OUR GOALS</h3>
            
              <ul>
                <li>(Pic of book)MUN helps to ensure a clear concept on diverse topics, diplomacy, & engaging committee sessions to provide an educational experience to delegates.</li>
                <li>(pic of Mic)Delegates improve their public speaking skills, overcome their massphobia and increase their confidence while speaking and making conversations.</li>
                <li>(pic of Magnifying glass) The goal is to enhance research, presentation & facilitation skills and help to explore creative solutions to complex challenges to delegates. </li>
             
              </ul>
            </div>

            {/* Right Photo Gallery Section */}
            <div className="col-md-6 d-flex flex-column align-items-center">
              <div className="row mb-3">
                <div className="col-6">
                  <img
                    src={mun5}
                    alt="Activity 1"
                    className="img-fluid rounded shadow"
                  />
                </div>
                <div className="col-6">
                  <img
                    src={mun6}
                    alt="Activity 2"
                    className="img-fluid rounded shadow"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <img
                    src={mun7}
                    alt="Activity 3"
                    className="img-fluid rounded shadow"
                  />
                </div>
                <div className="col-6">
                  <img
                    src={mun8}
                    alt="Activity 4"
                    className="img-fluid rounded shadow"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Video Section */}
          <div className="row mt-5">
            <div className="col-12 text-center">
              <h3 className="mb-4">Watch Our Highlights</h3>
              <iframe
                width="100%"
                height="450"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="AksharaMUN Highlights"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>
      </div>
      </div>
    </>
  );
};

export default AksharaMUN;
