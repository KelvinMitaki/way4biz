import React from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Accordion from "react-bootstrap/Accordion";
import { Card, Button } from "react-bootstrap";

import "./SellerProducts.css";

import SellerDashBoardMenu from "./SellerDashBoardMenu";
import SellerDashBoardHeader from "./SellerDashBoardHeader";
import { fetchSellerProducts } from "../../redux/actions";
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
                    defaultActiveKey="Total Products"
                    id="uncontrolled-tab-example"
                  >
                    <Tab eventKey="Total Products" title="total-products">
                      <div>The quick brown fox jumped over the lazy dog</div>
                    </Tab>
                    <Tab eventKey="Live On Site" title="live-on-site">
                      <div>The quick brown fox jumped over the lazy dog</div>
                    </Tab>
                    <Tab eventKey="Under Preview" title="under-preview">
                      <div>The quick brown fox jumped over the lazy dog</div>
                    </Tab>
                    <Tab eventKey="Rejected" title="rejected">
                      <div>The quick brown fox jumped over the lazy dog</div>
                    </Tab>
                    <Tab eventKey="Sold Out" title="sold-out">
                      <div>The quick brown fox jumped over the lazy dog</div>
                    </Tab>
                  </Tabs>
                </div>
                <div id="dashboard-products-sm-screen" className="col">
                  <Accordion defaultActiveKey="0">
                    <Card>
                      <Card.Header>
                        <Accordion.Toggle
                          as={Button}
                          variant="link"
                          eventKey="0"
                        >
                          Total Products
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey="0">
                        <Card.Body>Hello! I'm the body</Card.Body>
                      </Accordion.Collapse>
                    </Card>
                    <Card>
                      <Card.Header>
                        <Accordion.Toggle
                          as={Button}
                          variant="link"
                          eventKey="1"
                        >
                          Live On Site
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey="1">
                        <Card.Body>Hello! I'm another body</Card.Body>
                      </Accordion.Collapse>
                    </Card>
                    <Card>
                      <Card.Header>
                        <Accordion.Toggle
                          as={Button}
                          variant="link"
                          eventKey="2"
                        >
                          Under Preview
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey="2">
                        <Card.Body>Hello! I'm another body</Card.Body>
                      </Accordion.Collapse>
                    </Card>
                    <Card>
                      <Card.Header>
                        <Accordion.Toggle
                          as={Button}
                          variant="link"
                          eventKey="3"
                        >
                          Rejected
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey="3">
                        <Card.Body>Hello! I'm another body</Card.Body>
                      </Accordion.Collapse>
                    </Card>
                    <Card>
                      <Card.Header>
                        <Accordion.Toggle
                          as={Button}
                          variant="link"
                          eventKey="4"
                        >
                          Sold Out
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey="4">
                        <Card.Body>Hello! I'm another body</Card.Body>
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
