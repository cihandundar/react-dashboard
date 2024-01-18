import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import greenIcon from "../../assets/greenIcon.svg";
import car from "../../assets/car.svg";
import light from "../../assets/light.svg";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { FaInstagram } from "react-icons/fa6";
const ProfileInformation = () => {
  return (
    <div className="profileinformation">
      <div className="profileinformation__container">
        <div className="profileinformation__container__wrapper">
          <div className="welcome">
            <div className="welcome__top">
              <h2>Welcome back!</h2>
              <p>Nice to see you, Mark Johnson!</p>
            </div>
            <div className="welcome__bottom">
              <p>
                Tap to record
                <span className="arrow">
                  <FaArrowRight />
                </span>
              </p>
            </div>
          </div>
          <div className="carinformation">
            <div className="carinformation__top">
              <h3>Car Informations</h3>
              <p>Hello, Mark Johnson! Your Car is ready.</p>
            </div>
            <div className="carinformation__center">
              <div className="carinformation__center__svg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="85 85 170 170"
                  style={{ transform: "rotate(-90deg); overflow: visible;" }}
                >
                  <linearGradient
                    id="grd_j7fpdo6doe37"
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
                    cx="170"
                    cy="170"
                    r="77.5"
                    stroke="transparent"
                    stroke-width="15"
                    fill="#080D25"
                  ></circle>
                  <circle
                    cx="170"
                    cy="170"
                    r="77.5"
                    fill="none"
                    stroke-width="15"
                    stroke-dasharray="486.94686130641793"
                    stroke-dashoffset="146.08405839192534"
                    stroke-linecap="round"
                    stroke="url(#grd_j7fpdo6doe37)"
                    style={{ transition: " stroke-dashoffset 400ms ease 0s;" }}
                  ></circle>
                </svg>
              </div>
              <div className="carinformation__center__text">
                <img src={greenIcon} alt="" />
                <h2>68%</h2>
                <p>Current Load</p>
              </div>
            </div>
            <div className="carinformation__center__bottom">
              <h2>0h 58min</h2>
              <p>Time to full charge</p>
            </div>
            <div className="carinformation__bottom">
              <div className="carinformation__bottom__wrapper">
                <div className="carinformation__bottom__wrapper__box">
                  <div className="carinformation__bottom__wrapper__box__left">
                    <p>Battery Health</p>
                    <h3>76%</h3>
                  </div>
                  <div className="carinformation__bottom__wrapper__box__right">
                    <img src={car} alt="" />
                  </div>
                </div>
                <div className="carinformation__bottom__wrapper__box">
                  <div>
                    <p>Efficiency</p>
                    <h3>+20%</h3>
                  </div>
                </div>
              </div>
              <div className="carinformation__bottom__wrapper">
                <div className="carinformation__bottom__wrapper__box">
                  <div className="carinformation__bottom__wrapper__box__left">
                    <p>Battery Health</p>
                    <h3>76%</h3>
                  </div>
                  <div className="carinformation__bottom__wrapper__box__right">
                    <img src={light} alt="" />
                  </div>
                </div>
                <div className="carinformation__bottom__wrapper__box">
                  <div>
                    <p>This Week</p>
                    <h3>1.342km</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="profileinfo">
            <div className="profileinfo__title">
              <h3>Profile Information</h3>
              <p>
                Hi, I’m Mark Johnson, Decisions: If you can’t decide, the answer
                is no. If two equally difficult paths, choose the one more
                painful in the short term (pain avoidance is creating an
                illusion of equality).
              </p>
            </div>
            <div className="profileinfo__center">
              <p>
                <span className="centerSoft">Full Name: </span>Mark Johnson
              </p>
              <p>
                <span className="centerSoft">Mobile:</span> (44) 123 1234 123
              </p>
              <p>
                <span className="centerSoft">Email:</span> mark@simmmple.com
              </p>
              <p>
                <span className="centerSoft">Location:</span> United States
              </p>
              <div className="profileinfo__socialmedia">
                <p>
                  <span className="centerSoft">Social:</span>
                  <span className="socialmediaIcon">
                    <FaFacebookSquare />
                  </span>
                  <span className="socialmediaIcon">
                    <IoLogoTwitter />
                  </span>
                  <span className="socialmediaIcon">
                    <FaInstagram />
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInformation;
