import React from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Accordion from "react-bootstrap/Accordion";
import { Card, Button } from "react-bootstrap";

import "./SellerProducts.css";

import SellerDashBoardMenu from "./SellerDashBoardMenu";
import SellerDashBoardHeader from "./SellerDashBoardHeader";
import { fetchSellerProducts } from "../../redux/actions";
import DashBoardProduct from "./DashBoardProduct";
import DashBoardProductMediumScreen from "./DashBoardProductMediumScreens";
import { connect } from "react-redux";

class SellerProcucts extends React.Component {
  componentDidMount() {
    this.props.fetchSellerProducts();
  }
  render() {
    return (
      <div className="container-fluid dashboard-wrapper">
        <SellerDashBoardHeader />
        <div className="row no-gutters">
          <div className="col-md-3">
            <SellerDashBoardMenu />
          </div>
          <div className="col-lg-9 mt-5">
            <div className="container">
              <div className="row">
                <div id="dashboard-products-lg-screen" className="col-lg-12">
                  <Tabs
                    defaultActiveKey="total-products"
                    id="uncontrolled-tab-example"
                    className="tab"
                  >
                    <Tab
                      tabClassName="my-tab"
                      eventKey="total-products"
                      title="Total Products"
                    >
                      <div className="container">
                        <div className="row no-gutters dashboard-product-titles">
                          <div className="col d-flex mt-4 mb-2">
                            <h6
                              className="col-lg-5"
                              style={{ textAlign: "left" }}
                            >
                              Item
                            </h6>
                            <h6 className="col-lg-2">Quantity</h6>
                            <h6 className="col-lg-2">Price</h6>
                            <h6 className="col-lg-2">Status</h6>
                            <h6 className="col-lg-1"></h6>
                          </div>
                        </div>
                      </div>
                      <DashBoardProduct />
                    </Tab>
                    <Tab
                      eventKey="live-on-site"
                      title="Live On Site"
                      tabClassName="my-tab"
                    >
                      <div className="container">
                        <div className="row no-gutters dashboard-product-titles">
                          <div className="col d-flex mt-4 mb-2">
                            <h6
                              className="col-lg-5"
                              style={{ textAlign: "left" }}
                            >
                              Item
                            </h6>
                            <h6 className="col-lg-2">Quantity</h6>
                            <h6 className="col-lg-2">Price</h6>
                            <h6 className="col-lg-2">Status</h6>
                            <h6 className="col-lg-1"></h6>
                          </div>
                        </div>
                      </div>
                      <DashBoardProduct />
                    </Tab>
                    <Tab
                      eventKey="under-preview"
                      title="Under Preview"
                      tabClassName="my-tab"
                    >
                      <div className="container">
                        <div className="row no-gutters dashboard-product-titles">
                          <div className="col d-flex mt-4 mb-2">
                            <h6
                              className="col-lg-5"
                              style={{ textAlign: "left" }}
                            >
                              Item
                            </h6>
                            <h6 className="col-lg-2">Quantity</h6>
                            <h6 className="col-lg-2">Price</h6>
                            <h6 className="col-lg-2">Status</h6>
                            <h6 className="col-lg-1"></h6>
                          </div>
                        </div>
                      </div>
                      <DashBoardProduct />
                    </Tab>
                    <Tab
                      eventKey="rejected"
                      title="Rejected"
                      tabClassName="my-tab"
                    >
                      <div className="container">
                        <div className="row no-gutters dashboard-product-titles">
                          <div className="col d-flex mt-4 mb-2">
                            <h6
                              className="col-lg-5"
                              style={{ textAlign: "left" }}
                            >
                              Item
                            </h6>
                            <h6 className="col-lg-2">Quantity</h6>
                            <h6 className="col-lg-2">Price</h6>
                            <h6 className="col-lg-2">Status</h6>
                            <h6 className="col-lg-1"></h6>
                          </div>
                        </div>
                      </div>
                      <DashBoardProduct />
                    </Tab>
                    <Tab
                      eventKey="sold-out"
                      title="Sold Out"
                      tabClassName="my-tab"
                    >
                      <div className="container">
                        <div className="row no-gutters dashboard-product-titles">
                          <div className="col d-flex mt-4 mb-2">
                            <h6
                              className="col-lg-5"
                              style={{ textAlign: "left" }}
                            >
                              Item
                            </h6>
                            <h6 className="col-lg-2">Quantity</h6>
                            <h6 className="col-lg-2">Price</h6>
                            <h6 className="col-lg-2">Status</h6>
                            <h6 className="col-lg-1"></h6>
                          </div>
                        </div>
                      </div>
                      <DashBoardProduct />
                    </Tab>
                  </Tabs>
                </div>
                <div
                  id="dashboard-products-sm-screen"
                  className="col-md-9 mx-auto"
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
                          Total Products
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey="0">
                        <Card.Body>
                          <DashBoardProductMediumScreen />
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
                          Live On Site
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey="1">
                        <Card.Body>
                          <DashBoardProduct />
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
                          Under Preview
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey="2">
                        <Card.Body>
                          <DashBoardProduct />
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
                          Rejected
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey="3">
                        <Card.Body>
                          <DashBoardProduct />
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
                          Sold Out
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey="4">
                        <Card.Body>
                          <DashBoardProduct />
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
const mapStateToProps = (state) => {
  return {
    sellerProcucts: state.seller.sellerProcucts,
  };
};
export default connect(mapStateToProps, { fetchSellerProducts })(
  SellerProcucts
);
