import React from "react";
import { FaCalendarAlt } from "react-icons/fa";

const Transaction = () => {
  const transactionData = [
    {
      title: "Netflix",
      price: -2.511,
      history: "27 March 2020, at 12:30 PM",
    },
    {
      title: "Apple",
      price: 2.233,
      history: "27 March 2020, at 12:30 PM",
    },
    {
      title: "Stripe",
      price: 750,
      history: "27 March 2020,at 13:45 PM",
    },
    {
      title: "HubSpot",
      price: -1.555,
      history: "27 March 2020, at 12:30 PM",
    },
    {
      title: "HubSpot",
      price: 2.985,
      history: "27 March 2020,at 08:30 AM",
    },
    {
      title: "Webflow",
      price: "pending",
      history: "27 March 2020,at 05:00 AM",
    },
  ];

  const getColor = (price) => {
    return price < 0 ? "red" : "green";
  };

  return (
    <div className="transfaction">
      <div className="transfaction__container">
        <div className="transfaction__container__title">
          <h2>Your Transaction's</h2>
          <p>
            <span className="historyIcon">
              <FaCalendarAlt />
            </span>
            23 - 30 March 2020
          </p>
        </div>
        <div className="transfaction__wrapper">
          <div className="transfaction__wrapper__title">
            <h4>NEWEST</h4>
          </div>
          {transactionData.map((transactionItem) => (
            <div
              key={transactionItem.title}
              className="transfaction__wrapper__box"
            >
              <div className="transfaction__wrapper__box__left">
                <h4>{transactionItem.title}</h4>
                <p>{transactionItem.history}</p>
              </div>
              <div
                className="transfaction__wrapper__box__right"
                style={{ color: getColor(transactionItem.price) }}
              >
                <p>{transactionItem.price} $</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Transaction;
