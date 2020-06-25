import React, { Component } from "react";

import "./EditAddress.css";
import { Link } from "react-router-dom";

class EditAddressSection extends Component {
  render() {
    return (
      <div>
        <Link
          to="/address"
          style={{
            color: "#f76b1a",
            textDecoration: "none",
            marginLeft: "20px"
          }}
        >
          Change Address
        </Link>
      </div>
    );
  }
}

export default EditAddressSection;
