import React from "react";
import Tabs from "react-responsive-tabs";

import "./Riders.css";
import Logo from "../Header/Logo";
import SuccessfulDeliveries from "./SuccessfulDeliveries";
import PendingDeliveries from "./PendingDeliveries";
import ProfileImage from "../Header/ProfileImage";

class Riders extends React.Component {
  getTabs() {
    const data = [
      {
        name: "Deliveries",
        content: <SuccessfulDeliveries />,
      },
      // {
      //   name: "Pending Deliveries",
      //   content: <PendingDeliveries />,
      // },
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
            <ProfileImage size={"50px"} />
          </div>
        </div>
        <div className="white-body rider-body">
          <div className="container">
            <div>
              <h3 className="mb-3">Welcome Rider,</h3>
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
