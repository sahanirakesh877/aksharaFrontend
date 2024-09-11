import React from "react";
import Enquiryform from "./../components/Enquiryform";

const AdmissionProcedure = () => {
  return (
    <>
      <div className="kinderbanner my-md-0 ">
        <img src="/school/banner2.jpg" alt="Kindergarten" />
        <h3 className="xyz">Admission Process</h3>
        <div className="breadcrumb-container">
          <ul className="breadcrumb">
            <li>
              <a href="/">Home</a>
            </li>
            <li>Admission Procedure</li>
          </ul>
        </div>
      </div>

      <div className="bg-light my-md-0">
        <div className="container py-4">
          <div className="row">
            <div className="col-md-4 ">
              <h3 className="kinder-head mb-md-1">Admission Process :</h3>
              <p className="kinder-text">
                The Admission Process is as follows:
              </p>
              <ul className="list-unstyled ">
                <li className="d-flex admission-li">
                  <i className="fas fa-check-square me-2 text-danger"></i>
                  The parents of prospective students are given a tour of the
                  School.
                </li>
                <li className="d-flex admission-li">
                  <i className="fas fa-check-square me-2 text-danger"></i>
                  Parents file an application for admission in person or via the
                  school website.
                </li>
                <li className="d-flex  admission-li">
                  <i className="fas fa-check-square me-2 text-danger"></i>
                  After the evaluation of application, parents are notified of
                  entrance tests and interview dates.
                </li>
                <li className="d-flex admission-li">
                  {" "}
                  <i className="fas fa-check-square me-2 text-danger"></i>
                  While the Admission Team interviews parents, students appear
                  in the written and oral test.
                </li>
                <li className="d-flex admission-li">
                  <i className="fas fa-check-square me-2 text-danger"></i>
                  Acceptance of a child is based on a child's academic aptitude,
                  socio emotional development and on parents' willingness to be
                  working partner with the school in the educational process.
                </li>
                <li className="d-flex admission-li">
                  <i className="fas fa-check-square me-2 text-danger"></i>
                  Within 3 days of the written test and interview, the school
                  will inform the parents through phone for confirmation.
                </li>
                <li className="d-flex admission-li">
                  <i className="fas fa-check-square me-2 text-danger"></i>
                  Within 7 days from the date of confirmation, parents are
                  required to register the child.
                </li>
              </ul>
            </div>

            <div className="col-md-8 ">
              <h3 className="kinder-head">
                {" "}
                For Admission Enquiry{" "}
                <span className="text-danger">
                  fill this below given form :
                </span>
              </h3>

              <Enquiryform />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdmissionProcedure;
