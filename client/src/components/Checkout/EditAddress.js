import React, { Component } from "react";
import { Button, Card, Accordion } from "react-bootstrap";

import "./EditAddress.css";

class EditAddressSection extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Accordion>
          <Card id="address-accordion">
            <Card.Header className="address-change-header">
              <Accordion.Toggle
                className="change-address-link"
                variant="link"
                eventKey="0"
              >
                Change Address
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>Hello! I'm the body</Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    );
  }
}

export default EditAddressSection;
