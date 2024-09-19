import React from "react";
import "../css/Sister.css";

const SisterOrg = () => {
  return (
    <>
      <div className="sis py-5">
        <div className="container">
          <div className="row py-4 d-flex align-items-center justify-content-center ">
            <div className="col-md-4 ">
              <h2 className="text-center border-bottom-title w-75 head-color">
                <span className="addcolor">Sister</span> Organization
              </h2>
              <div className="poster text-center ">
                <img
                  src="/sisremove.png"
                  alt="sister organization..."
                  className="img-fluid"
                />
                <span>
                  Jawlakhel, Lalitpur, Nepal
                  <br />
                  01-5426371
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SisterOrg;
