import React from "react";
import CountUp from "react-countup";
import counter from "../Data/CounterData";
import "../css/Counter.css";

const Counter = () => {
  return (
    <>
      <div className=" py-5 ">
        <div className="container  count py-5 mx-auto">
          <div className="text-center mb-2">
            <h2 className="text-center border-bottom-title w-100 head-color">
              <span className="addcolor">Our</span> Achievement
            </h2>
            <p className="px-md-5 text-center px-4">
              We are proud of our milestones and the progress we've made over
              the years. Here are some key figures that showcase our success and
              growth.
            </p>
          </div>
          <div className="row py-5">
            {counter &&
              counter.map((count) => (
                <div
                  className={`col-lg-3 col-md-6 col-sm-6 mb-4 counter ${count.name.toLowerCase()}`}
                  key={count.id}
                >
                  <div className="counter-content">
                    <div className="counter-icon">
                      <i className={count.icon} />
                    </div>
                    <h3>{count.name}</h3>
                  </div>
                  <span className="counter-value">
                    <CountUp
                      end={count.counterNo}
                      duration={3}
                      enableScrollSpy={true}
                      scrollSpyOnce={true}
                    />
                    +
                  </span>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Counter;
