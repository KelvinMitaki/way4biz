import React from "react";
import { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import "./PickUp.css";

class PickUp extends React.Component {
  state = {
    address: {},
    city: "Ngong Road Apartments, Ngong Road, Nairobi, Kenya"
  };

  handleSelect = async selectedCity => {
    const results = await geocodeByAddress(selectedCity);
    const latlng = await getLatLng(results[0]);
    this.setState({ address: latlng });
  };
  render() {
    const showHideClassName = this.props.show
      ? "modal display-block"
      : "modal display-none";
    console.log(this.state.address);
    return (
      <div className={showHideClassName}>
        <section className="modal-main">
          <div className="modal-header">
            <span className="close-modal-btn" onClick={this.props.collection}>
              ×
            </span>
          </div>
          <div className="modal-body">
            <div className="container p-0">
              <h4>Available pickup points</h4>
              <div className="ml-3 mt-2">
                <ul className="pick-up-points">
                  <li
                    onClick={() => this.handleSelect(this.state.city)}
                    style={{ cursor: "pointer" }}
                    className="pick-up-point"
                  >
                    <p>{this.state.city}</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default PickUp;
