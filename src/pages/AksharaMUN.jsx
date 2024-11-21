import React from "react";

const AksharaMUN = () => {
  return (
    <>
    <div className="bg-light">

  
      <div className="container py-5">
        {/* AksharaMUN Section */}
        <section id="aksharaMUN">
          <h2 className="border-bottom-title justify-content-center mb-3 head-color d-flex align-items-start">
            <span className="addcolor">Welcome to  </span>  AksharaMUN
          </h2>

          <div className="row">
            {/* Image Grid for AksharaMUN */}
            <div className="col-md-3 mb-3">
              <img
                src="https://img.freepik.com/free-photo/children-paint-eggs-mother-teaches-children-sitting-white-table_1157-46104.jpg?t=st=1732189047~exp=1732192647~hmac=91afb7c3b8ed829eb5d1a1aceb78cc800f865ab9581ad674b7c619c083162da7&w=826"
                className="img-fluid rounded"
                alt="AksharaMUN 1"
              />
            </div>
            <div className="col-md-3 mb-3">
              <img
                src="https://img.freepik.com/free-photo/mother-with-daughter-home_1157-34374.jpg?t=st=1732189219~exp=1732192819~hmac=a8b6878ef19e1e5781f82cf2d31c80e17309fdc62e5030a804b8628fe9e82150&w=826"
                className="img-fluid rounded"
                alt="AksharaMUN 2"
              />
            </div>
            <div className="col-md-3 mb-3">
              <img
                src="https://img.freepik.com/free-vector/five-students-learning-classroom_1308-31013.jpg?t=st=1732189269~exp=1732192869~hmac=79757ba35dc6de7879499f70889139eead21f9b192f869612a1d7a4eba0fa982&w=740"
                className="img-fluid rounded"
                alt="AksharaMUN 3"
              />
            </div>
            <div className="col-md-3 mb-3">
              <img
                src="https://img.freepik.com/free-vector/children-playing-scratch-dalgona-cookie-park_1308-102416.jpg?t=st=1732189287~exp=1732192887~hmac=8abfee7b8c8a2c95737bd3aa85a0df0c3cee6fe4eda8b1cb202dcd44c9769261&w=740"
                className="img-fluid rounded"
                alt="AksharaMUN 4"
              />
            </div>
          </div>

          {/* Content about AksharaMUN */}
          <p className="about-p">
            Akshara Model United Nations (AksharaMUN) is a premier educational
            event that simulates the workings of the United Nations. Students
            from across the globe come together to discuss global issues,
            develop solutions, and sharpen their diplomatic and public speaking
            skills. Our mission is to nurture curiosity, creativity, and
            critical thinking in students, empowering them to excel academically
            and contribute positively to society. Explore our innovative
            programs, state-of-the-art facilities, and a team of dedicated
            educators committed to shaping the leaders of tomorrow
          </p>
          <p className="about-p">
            Join us for an unforgettable experience where you can participate in
            debates, engage with like-minded individuals, and contribute to
            shaping a better future.we believe education is the foundation of a
            successful life. Our goal is to create a nurturing environment where
            every child feels valued, inspired, and prepared to achieve their
            dreams. Together, let us shape the future
          </p>
        </section>

        {/* Activities Section */}
        <section id="activities" className="my-5">
          <div className="row d-flex justify-content-between  align-items-start">
            {/* Left Content Section */}
            <div className="col-md-6">
              <h3>Engaging Activities</h3>
              <p className="about-p">
                At Aksharaa School, we believe in holistic education. Our
                students engage in diverse activities, including cultural
                programs, sports, educational workshops, and community service.
                These activities not only enhance their learning experience but
                also foster personal growth and teamwork. where excellence in
                education meets a vibrant community of learners. Our mission is
                to nurture curiosity, creativity, and critical thinking in
                students, empowering them to excel academically and contribute
                positively to society. Explore our innovative programs,
                state-of-the-art facilities, and a team of dedicated educators
                committed to shaping the leaders of tomorrow s engage
              </p>
              <ul>
                <li>Cultural Programs and Events</li>
                <li>Sports Tournaments</li>
                <li>Workshops and Seminars</li>
                <li>Community Outreach Projects</li>
              </ul>
            </div>

            {/* Right Photo Gallery Section */}
            <div className="col-md-6 d-flex flex-column align-items-center">
              <div className="row mb-3">
                <div className="col-6">
                  <img
                    src="https://img.freepik.com/free-vector/set-different-kid-characters-different-color-background_1308-46400.jpg?t=st=1732189716~exp=1732193316~hmac=2106f26210863610095661afbecda298f3fd7f67719a9151efc04cf8c0ff4857&w=740"
                    alt="Activity 1"
                    className="img-fluid rounded shadow"
                  />
                </div>
                <div className="col-6">
                  <img
                    src="https://img.freepik.com/free-photo/children-paint-eggs-mother-teaches-children-sitting-white-table_1157-46104.jpg?t=st=1732189047~exp=1732192647~hmac=91afb7c3b8ed829eb5d1a1aceb78cc800f865ab9581ad674b7c619c083162da7&w=826"
                    alt="Activity 2"
                    className="img-fluid rounded shadow"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <img
                    src="https://img.freepik.com/free-vector/students-classroom-background_1308-53774.jpg?t=st=1732190211~exp=1732193811~hmac=c8bcfb874f26299bd6b6348398b7796494f3397de234e2f0ae25b205908f53b8&w=826"
                    alt="Activity 3"
                    className="img-fluid rounded shadow"
                  />
                </div>
                <div className="col-6">
                  <img
                    src="https://img.freepik.com/free-vector/five-students-learning-classroom_1308-31013.jpg?t=st=1732189269~exp=1732192869~hmac=79757ba35dc6de7879499f70889139eead21f9b192f869612a1d7a4eba0fa982&w=740"
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
