import React from "react";
import graph from "../../assets/graph.svg";
import Invoices from "components/Invoices";
const PaymentCard = () => {
  return (
    <div className="payment">
      <div className="payment__container">
        <div className="payment__container__wrapper">
          <div className="payment__container__vision">
            <div className="payment__container__vision__title">
              <div>
                <h4>
                  WARCRAFT FROZEN <br /> THRONE
                </h4>
              </div>
              <div>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  color="white"
                  height="48px"
                  width="48px"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ color: "white;" }}
                >
                  <g>
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M12 6.654a6.786 6.786 0 0 1 2.596 5.344A6.786 6.786 0 0 1 12 17.34a6.786 6.786 0 0 1-2.596-5.343A6.786 6.786 0 0 1 12 6.654zm-.87-.582A7.783 7.783 0 0 0 8.4 12a7.783 7.783 0 0 0 2.728 5.926 6.798 6.798 0 1 1 .003-11.854zm1.742 11.854A7.783 7.783 0 0 0 15.6 12a7.783 7.783 0 0 0-2.73-5.928 6.798 6.798 0 1 1 .003 11.854z"></path>
                  </g>
                </svg>
              </div>
            </div>
            <div className="payment__container__vision__bottom">
              <h2>7812 2139 0823 7916</h2>
              <div className="flexColumnWrapper">
                <span className="flexColumn">
                  <p>VALID THRU</p>
                  <h4>05/24</h4>
                </span>
                <span className="flexColumn">
                  <p>CVV</p>
                  <h4>09X</h4>
                </span>
              </div>
            </div>
          </div>
          <div className="payment__container__credit">
            <div className="payment__container__credit__top">
              <div>
                <p>Credit Balance</p>
                <h1>$25,215</h1>
              </div>
              <div>
                <div style={{ textAlign: "right", marginBottom: "15px" }}>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 512 512"
                    color="white"
                    sx="[object Object]"
                    height="18px"
                    width="18px"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ color: "white;" }}
                  >
                    <path d="M328 256c0 39.8-32.2 72-72 72s-72-32.2-72-72 32.2-72 72-72 72 32.2 72 72zm104-72c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72zm-352 0c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72z"></path>
                  </svg>
                </div>
                <img src={graph} alt="" />
              </div>
            </div>
            <div className="payment__container__credit__bottom">
              <div className="payment__container__credit__bottom__wrapper">
                <div className="payment__container__credit__bottom__title">
                  <p>NEWEST</p>
                </div>
                <div className="payment__container__credit__bottom__info">
                  <div className="payment__container__credit__bottom__left">
                    <div className="payment__container__credit__bottom__left__icon">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 24 24"
                        color="#01b574"
                        height="20px"
                        width="20px"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{ color: "white" }}
                      >
                        <path fill="none" d="M0 0h24v24H0V0z"></path>
                        <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"></path>
                      </svg>
                    </div>
                    <div>
                      <p>
                        <strong>Bill & Taxes</strong>
                      </p>
                      <p style={{ color: "#dddddd" }}>Today, 16:36</p>
                    </div>
                  </div>
                  <div>
                    <h4>-$154.50</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="method">
          <div className="method__container">
            <div className="method__container__title">
              <h2>Payment Method</h2>
              <button>ADD NEW CARD</button>
            </div>
            <div className="method__container__bottom">
              <div className="method__container__bottom__input">
                <div className="method__container__bottom__input__icon">
                  <svg
                    width="21px"
                    viewBox="0 0 21 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="6.63158"
                      cy="7.49999"
                      r="6.63158"
                      fill="#EB001B"
                    ></circle>
                    <circle
                      cx="14.3685"
                      cy="7.49999"
                      r="6.63158"
                      fill="#F79E1B"
                    ></circle>
                  </svg>
                </div>
                <div>
                  <p>
                    <strong>7812 2139 0823 XXXX</strong>
                  </p>
                </div>
              </div>
              <div className="method__container__bottom__input">
                <div className="method__container__bottom__input__icon">
                  <svg
                    width="25px"
                    viewBox="0 0 25 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12.6708 2.96349C12.6568 4.15055 13.653 4.81298 14.4034 5.20684C15.1744 5.61099 15.4333 5.87013 15.4304 6.23147C15.4245 6.78459 14.8153 7.02862 14.2452 7.03812C13.2505 7.05475 12.6723 6.74889 12.2125 6.51753L11.8542 8.32341C12.3155 8.55247 13.1696 8.75217 14.0554 8.76087C16.1345 8.76087 17.4947 7.65543 17.5021 5.94145C17.5102 3.76625 14.7087 3.64579 14.7278 2.67348C14.7344 2.37871 14.9956 2.06408 15.568 1.98406C15.8512 1.94368 16.6332 1.91274 17.5198 2.35252L17.8677 0.605286C17.391 0.418253 16.7782 0.239136 16.0153 0.239136C14.0583 0.239136 12.6819 1.35962 12.6708 2.96349V2.96349ZM21.2115 0.389687C20.8319 0.389687 20.5118 0.628245 20.3691 0.99433L17.3991 8.63249H19.4767L19.8901 7.40183H22.429L22.6689 8.63249H24.5L22.902 0.389687H21.2115ZM21.5021 2.61641L22.1016 5.7116H20.4596L21.5021 2.61641ZM10.1518 0.389687L8.51418 8.63249H10.4939L12.1308 0.389687H10.1518ZM7.22303 0.389687L5.16233 6.00003L4.32878 1.22966C4.23097 0.697187 3.84472 0.389687 3.41579 0.389687H0.0471011L0 0.629037C0.691574 0.790671 1.47729 1.0514 1.95326 1.33033C2.24457 1.50067 2.32775 1.64964 2.42336 2.05458L4.00214 8.63249H6.0945L9.3021 0.389687H7.22303Z"
                      fill="white"
                    ></path>
                  </svg>
                </div>
                <div>
                  <p>
                    <strong>7812 2139 0823 XXXX</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="invoices-mobile">
        <Invoices />
      </div>
    </div>
  );
};

export default PaymentCard;
