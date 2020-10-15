import React from "react";

import "./SuccessfulDeliveries.css";

class SuccessfulDeliveries extends React.Component {
  render() {
    return (
      <div className="successful-deliveries">
        <div>
          <p>Delivered to Rongai on 15/10/2020</p>
          <p>Owner: Swapo</p>
          <p>Contact:0712345678</p>
          <p>Status:Pending</p>
        </div>
      </div>
    );
  }
}

export default SuccessfulDeliveries;
