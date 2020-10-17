import React from "react";

import "./SuccessfulDeliveries.css";

class SuccessfulDeliveries extends React.Component {
  render() {
    return (
      <div className="successful-deliveries">
        <div>
          <p>Delivered Pizza from TRM to Rongai on 15/10/2020</p>
          <p>Sender Phone: 0799999999</p>
          <p>Recipient Phone: 0799999999</p>
        </div>
      </div>
    );
  }
}

export default SuccessfulDeliveries;
