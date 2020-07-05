import React from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Accordion from "react-bootstrap/Accordion";
import { Card, Button } from "react-bootstrap";

import "./SellerOrders.css";

import SellerDashBoardMenu from "./SellerDashBoardMenu";
import SellerDashBoardHeader from "./SellerDashBoardHeader";

import DashBoardOrder from "./DashBoardOrder";
import DashBoardOrderMediumScreen from "./DashBoardOrderMediumScreen";

class SellerOrders extends React.Component {
  render() {
    return (
      <div className="container-fluid dashboard-wrapper">
        <SellerDashBoardHeader />
        <div className="row no-gutters">
          <div className="col-lg-3">
            <SellerDashBoardMenu />
          </div>
          <div className="col-lg-9">
            <div className="container seller-dashboard-wrapper">
              <div className="row">
                <div className="col">
                  <h3>Orders</h3>
                </div>
              </div>
              <div className="row  my-4">
                <div id="dashboard-orders-lg-screen" className="col-lg-12">
                  <Tabs
                    defaultActiveKey="all"
                    id="uncontrolled-tab-example"
                    className="tab"
                  >
                    <Tab tabClassName="my-tab" eventKey="all" title="All">
                      <div className="container">
                        <div className="row no-gutters">
                          <div className="col d-flex mt-4 mb-2">
                            <h6
                              className="col-lg-4"
                              style={{ textAlign: "left" }}
                            >
                              All
                            </h6>
                            <h6 className="col-lg-2">No. of Items</h6>
                            <h6 className="col-lg-2">Destination</h6>

                            <h6 className="col-lg-2">Total AMount</h6>
                            <h6 className="col-lg-2">Status</h6>
                          </div>
                        </div>
                      </div>
                      <DashBoardOrder />
                    </Tab>

                    <Tab eventKey="new" title="New" tabClassName="my-tab">
                      <div className="container">
                        <div className="row no-gutters">
                          <div className="col d-flex mt-4 mb-2">
                            <h6
                              className="col-lg-4"
                              style={{ textAlign: "left" }}
                            >
                              All
                            </h6>
                            <h6 className="col-lg-2">No. of Items</h6>
                            <h6 className="col-lg-2">Destination</h6>

                            <h6 className="col-lg-2">Total AMount</h6>
                            <h6 className="col-lg-2">Status</h6>
                          </div>
                        </div>
                      </div>
                      <DashBoardOrder />
                    </Tab>
                    <Tab
                      eventKey="shipped"
                      title="Shipped"
                      tabClassName="my-tab"
                    >
                      <div className="container">
                        <div className="row no-gutters">
                          <div className="col d-flex mt-4 mb-2">
                            <h6
                              className="col-lg-4"
                              style={{ textAlign: "left" }}
                            >
                              All
                            </h6>
                            <h6 className="col-lg-2">No. of Items</h6>
                            <h6 className="col-lg-2">Destination</h6>

                            <h6 className="col-lg-2">Total AMount</h6>
                            <h6 className="col-lg-2">Status</h6>
                          </div>
                        </div>
                      </div>
                      <DashBoardOrder />
                    </Tab>
                    <Tab
                      eventKey="delivered"
                      title="Delivered"
                      tabClassName="my-tab"
                    >
                      <div className="container">
                        <div className="row no-gutters">
                          <div className="col d-flex mt-4 mb-2">
                            <h6
                              className="col-lg-4"
                              style={{ textAlign: "left" }}
                            >
                              All
                            </h6>
                            <h6 className="col-lg-2">No. of Items</h6>
                            <h6 className="col-lg-2">Destination</h6>

                            <h6 className="col-lg-2">Total AMount</h6>
                            <h6 className="col-lg-2">Status</h6>
                          </div>
                        </div>
                      </div>
                      <DashBoardOrder />
                    </Tab>
                    <Tab
                      eventKey="returned"
                      title="Returned"
                      tabClassName="my-tab"
                    >
                      <div className="container">
                        <div className="row no-gutters">
                          <div className="col d-flex mt-4 mb-2">
                            <h6
                              className="col-lg-4"
                              style={{ textAlign: "left" }}
                            >
                              All
                            </h6>
                            <h6 className="col-lg-2">No. of Items</h6>
                            <h6 className="col-lg-2">Destination</h6>

                            <h6 className="col-lg-2">Total AMount</h6>
                            <h6 className="col-lg-2">Status</h6>
                          </div>
                        </div>
                      </div>
                      <DashBoardOrder />
                    </Tab>
                    <Tab
                      eventKey="cancelled"
                      title="Cancelled"
                      tabClassName="my-tab"
                    >
                      <div className="container">
                        <div className="row no-gutters">
                          <div className="col d-flex mt-4 mb-2">
                            <h6
                              className="col-lg-4"
                              style={{ textAlign: "left" }}
                            >
                              All
                            </h6>
                            <h6 className="col-lg-2">No. of Items</h6>
                            <h6 className="col-lg-2">Destination</h6>

                            <h6 className="col-lg-2">Total AMount</h6>
                            <h6 className="col-lg-2">Status</h6>
                          </div>
                        </div>
                      </div>
                      <DashBoardOrder />
                    </Tab>
                  </Tabs>
                </div>
                <div
                  id="dashboard-orders-sm-screen"
                  className="col-md-10 mx-auto"
                >
                  <Accordion defaultActiveKey="0">
                    <Card>
                      <Card.Header>
                        <Accordion.Toggle
                          as={Button}
                          variant="link"
                          eventKey="0"
                          className="accordion-toggle-text"
                        >
                          All
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey="0">
                        <Card.Body className="card-products">
                          <DashBoardOrderMediumScreen />
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                    <Card>
                      <Card.Header>
                        <Accordion.Toggle
                          as={Button}
                          variant="link"
                          eventKey="1"
                          className="accordion-toggle-text"
                        >
                          New
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey="1">
                        <Card.Body className="card-products">
                          <DashBoardOrderMediumScreen />
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                    <Card>
                      <Card.Header>
                        <Accordion.Toggle
                          as={Button}
                          variant="link"
                          eventKey="2"
                          className="accordion-toggle-text"
                        >
                          Shipped
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey="2">
                        <Card.Body className="card-products">
                          <DashBoardOrderMediumScreen />
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                    <Card>
                      <Card.Header>
                        <Accordion.Toggle
                          as={Button}
                          variant="link"
                          eventKey="3"
                          className="accordion-toggle-text"
                        >
                          Delivered
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey="3">
                        <Card.Body className="card-products">
                          <DashBoardOrderMediumScreen />
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                    <Card>
                      <Card.Header>
                        <Accordion.Toggle
                          as={Button}
                          variant="link"
                          eventKey="4"
                          className="accordion-toggle-text"
                        >
                          Returned
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey="4">
                        <Card.Body className="card-products">
                          <DashBoardOrderMediumScreen />
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                    <Card>
                      <Card.Header>
                        <Accordion.Toggle
                          as={Button}
                          variant="link"
                          eventKey="4"
                          className="accordion-toggle-text"
                        >
                          Cancelled
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey="4">
                        <Card.Body className="card-products">
                          <DashBoardOrderMediumScreen />
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SellerOrders;
