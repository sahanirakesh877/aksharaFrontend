import React from "react";

import breadImg from '../assets/school/banner1.jpg'


const Admissionpolicy = () => {
  const admissionCriteria = [
    "Aksharaa Kindergarten graduates",
    "Siblings of the students already at Aksharaa",
    "Students on the waiting list for various grade levels",
    "Students of the local community",
  ];

  return (
    <>
      <div className="kinderbanner my-md-0">
        <img src={breadImg} alt="Kindergarten" />
        <h3 className="xyz">Admission Rules & Regulation</h3>
        <div className="breadcrumb-container">
          <ul className="breadcrumb">
            <li><a href="/">Home</a></li>
            <li>Admission Policy</li>
          </ul>
        </div>
      </div>

      <div className="bg-light my-md-0">
        <div className="container py-4">
          <div className="row">
            <div className="col-12">
              <h6 className="mb-4 kinder-head">Admission Policy</h6>
              <p className="kinder-text">
                Aksharaa School does not discriminate against students on the basis of nationality, ethnicity, race, caste, color, religion, cognitive ability, or physical disabilities.
              </p>
              <p className="kinder-text">
                The admission policy at Aksharaa is inclusive, transparent, and fair. During admission, we look for diversity in the classrooms. We aim to have students from all ethnic backgrounds, nationalities, and demographics to maintain cultural, ethnic, and national diversity in the classrooms. A student's and parents’ attitude towards learning, cooperation with the school system, family occupation, family background, financial background, and gender balance are taken into consideration during the time of admission.
              </p>
              <p className="kinder-text">
                Aksharaa School follows a transparent and inclusive admission policy. Priorities will be given to:
              </p>

              <ul className="list-unstyled kinder-ul">
                {admissionCriteria.map((item, index) => (
                  <li key={index} className="admission-li">
                    <i className="fas fa-check-square me-2 text-danger"></i>
                    {item}
                  </li>
                ))}
              </ul>

              <p className="kinder-text">
                Students seeking admission should contact the school at the earliest to ensure high chances of admission. We are an inclusive school and maintain a high level of diversity in terms of economic, ethnic, and occupational diversity, and a gender balance in classrooms.
              </p>
              <p className="kinder-text">
                Priorities are given to children of Nepalese citizens or foreign returnees. We also cater to students from foreign nations. We accept transfer students only if the student produces all the required documents during the process of admission. Students should produce a document showing good moral character during admission. Students unable to produce the required documents will not be entertained.
              </p>
              <p className="kinder-text">
                Each student seeking admission to the school should sit for a written exam and an oral interview. Admission will be based on the merit list, students' ECA/CCA involvement, and overall performance. The school reserves the right to admission.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admissionpolicy;
