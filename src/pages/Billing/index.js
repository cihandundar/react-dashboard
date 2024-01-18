import { Information, PaymentCard } from "components";
import React from "react";

const Billing = () => {
  return (
    <div className="billing">
      <div className="billing__container">
        <PaymentCard />
        <Information />
      </div>
    </div>
  );
};

export default Billing;
