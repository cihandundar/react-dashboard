import { Cart } from "components";
import React from "react";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard__container">
        <div className="dashbord__container__top">
          <Cart />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
