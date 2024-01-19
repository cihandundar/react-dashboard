import React from "react";

const RateChart = () => {
  return (
    <div className="ratechart">
      <div className="ratechart__container">
        <div className="mark">
          <div className="mark__text">
            <h4 className="soft">Welcome back,</h4>
            <h2>Mark Johnson</h2>
            <br />
            <p>Glad to see you again!</p>
            <p>Ask me anything</p>
          </div>
        </div>
        <div className="ratechart__wrapper">
          <div className="satisfaction">
            <div className="satisfaction__title">
              <h2>Satisfaction Rate</h2>
              <p>From ali projects</p>
            </div>
            <div className="satisfaction__center">
              <span className="rateChart">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="100 100 200 200"
                  style={{ transform: " rotate(-90deg); overflow: visible;" }}
                >
                  <linearGradient
                    id="grd_a9wq5nvooy4k"
                    x1="0%"
                    y1="0%"
                    x2="0%"
                    y2="100%"
                    gradientTransform="rotate(90, .5, .5)"
                  >
                    <stop offset="0" stop-color="rgba(0, 117, 255, 0)"></stop>
                    <stop offset="100" stop-color="#0075ff"></stop>
                  </linearGradient>
                  <circle
                    cx="200"
                    cy="200"
                    r="92.5"
                    stroke="#22234B"
                    stroke-width="15"
                    fill="none"
                  ></circle>
                  <circle
                    cx="200"
                    cy="200"
                    r="92.5"
                    fill="none"
                    stroke-width="15"
                    stroke-dasharray="581.1946409141117"
                    stroke-dashoffset="116.23892818282229"
                    stroke-linecap="round"
                    stroke="url(#grd_a9wq5nvooy4k)"
                    style={{ transition: "stroke-dashoffset 400ms ease 0s;" }}
                  ></circle>
                </svg>
              </span>
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                color="#fff"
                height="30px"
                width="30px"
                xmlns="http://www.w3.org/2000/svg"
                style={{ color: "rgb(255, 255, 255);" }}
              >
                <path d="M414.39 97.61A224 224 0 1097.61 414.39 224 224 0 10414.39 97.61zM184 208a24 24 0 11-24 24 23.94 23.94 0 0124-24zm167.67 106.17c-12 40.3-50.2 69.83-95.62 69.83s-83.62-29.53-95.72-69.83a8 8 0 017.83-10.17h175.69a8 8 0 017.82 10.17zM328 256a24 24 0 1124-24 23.94 23.94 0 01-24 24z"></path>
              </svg>
            </div>
            <div className="satisfaction__rating">
              <p>0%</p>
              <div className="satisfaction__rating__center">
                <h4>95%</h4>
                <p>Based on likes</p>
              </div>
              <p>100%</p>
            </div>
          </div>
          <div className="tracking">
            <div className="tracking__title">
              <h2>Referral Tracking</h2>
            </div>
            <div className="tracking__wrapper">
              <div className="tracking__wrapper__left">
                <div className="tracking__wrapper__left__box">
                  <p>Invited</p>
                  <h3>145</h3>
                  <h3>people</h3>
                </div>
                <div className="tracking__wrapper__left__box">
                  <p>Bonus</p>
                  <h3>1,465</h3>
                </div>
              </div>
              <div className="tracking__wrapper__right">
                <span className="rateChart">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="100 100 200 200"
                    style={{ transform: "rotate(-90deg); overflow: visible;" }}
                  >
                    <linearGradient
                      id="grd_m05yn27sh7fy"
                      x1="0%"
                      y1="0%"
                      x2="0%"
                      y2="100%"
                      gradientTransform="rotate(90, .5, .5)"
                    >
                      <stop offset="0" stop-color="rgba(5, 205, 153, 0)"></stop>
                      <stop offset="100" stop-color="#05CD99"></stop>
                    </linearGradient>
                    <circle
                      cx="200"
                      cy="200"
                      r="92.5"
                      stroke="transparent"
                      stroke-width="15"
                      fill="none"
                    ></circle>
                    <circle
                      cx="200"
                      cy="200"
                      r="92.5"
                      fill="none"
                      stroke-width="15"
                      stroke-dasharray="581.1946409141117"
                      stroke-dashoffset="174.3583922742335"
                      stroke-linecap="round"
                      stroke="url(#grd_m05yn27sh7fy)"
                      style={{ transition: "stroke-dashoffset 400ms ease 0s;" }}
                    ></circle>
                  </svg>
                </span>
                <div className="tracking__wrapper__right__text">
                  <p>Safety</p>
                  <h2>9.3</h2>
                  <p>Total Score</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RateChart;
