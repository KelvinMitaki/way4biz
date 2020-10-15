import React from "react";
import Tabs from "react-responsive-tabs";

import "./Riders.css";
import Logo from "../Header/Logo";

class Riders extends React.Component {
  getTabs() {
    const data = [
      {
        name: "SUccessful Deliveries",
        content: "Helloo",
      },
      {
        name: "Pending Deliveries",
        content: "World",
      },
    ];

    return data.map((d, index) => ({
      title: d.name,
      getContent: () => d.content,
      key: index,
      tabClassName: "rider-tab",
      panelClassName: "seller-db-panel",
    }));
  }
  render() {
    return (
      <div>
        <div id="rider-header">
          <div className="container">
            <Logo />
          </div>
        </div>
        <div className="white-body rider-body">
          <div className="container">
            <div>
              <h3>Welcome Rider,</h3>
            </div>
            <div>
              <Tabs
                items={this.getTabs()}
                transformWidth={100}
                transform={true}
                showMoreLabel={"More..."}
                showInkBar={true}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Riders;
