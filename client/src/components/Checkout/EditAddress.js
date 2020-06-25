import React, { Component } from "react";
import { Button, Card, Accordion } from "react-bootstrap";

import "./EditAddress.css";
import { Link } from "react-router-dom";

class EditAddressSection extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Link
          to="/address"
          style={{
            color: "#f76b1a",
            textDecoration: "none",
            marginLeft: "20px",
          }}
        >
          Change Address
        </Link>
      </div>
    );
  }
}

export default EditAddressSection;
