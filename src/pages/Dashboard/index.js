import { Cart, Chart, ProjectsTable, RateChart } from "components";
import React from "react";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard__container">
        <Cart />
        <RateChart />
        <Chart />
        <ProjectsTable />
      </div>
    </div>
  );
};

export default Dashboard;
