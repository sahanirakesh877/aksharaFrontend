import React from "react";
import "../css/infocheck.css";

const Infochek = () => {
  return (
    <>
      <div className="container mx-auto  pt-5">
      <div className="text-center mb-2">
            <h2 className="text-center border-bottom-title w-100 head-color">
              <span className="addcolor">Our Core</span> Values
            </h2>
            <p className="px-md-5 ">
              Aksharaa School inculates value based education with academic excellence through collaboration with parents and other stake holders to instill resilience, Leadership skills and emotional intelligence in each learner.
            </p>
          </div>
        <figure className="d-flex justify-content-center align-content-center  ">
          <img src="/info.png" alt="" className="img-fluid w-75"/>
        </figure>
      </div>
    </>
  );
};

export default Infochek;
