import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IconContext } from "react-icons";

const AnyReactComponent = () => (
  <FaMapMarkerAlt style={{ fontSize: "20px", color: "red" }} />
);

class SimpleMap extends Component {
  static defaultProps = {
    zoom: 11
  };

  render() {
    // Important! Always set the container height explicitly
    return (
      <div style={{ height: "50vh", width: "500px", margin: "auto" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyCW5WOFsHh1smIGQtEs6jGo47Cd5KovebI" }}
          defaultCenter={this.props.addressLatLng}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={this.props.addressLatLng.lat}
            lng={this.props.addressLatLng.lng}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
