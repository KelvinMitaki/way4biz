import React from "react";
import { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import "./PickUp.css";
import { selfCollectionAddress } from "../../redux/actions";
import { connect } from "react-redux";

class PickUp extends React.Component {
  handleSelect = async selectedCity => {
    const results = await geocodeByAddress(selectedCity);
    const latlng = await getLatLng(results[0]);
    this.props.selfCollectionAddress(latlng);
  };
  render() {
    const showHideClassName = this.props.show
      ? "modal display-block"
      : "modal display-none";
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
                    onClick={() => this.handleSelect(this.props.city)}
                    style={{ cursor: "pointer" }}
                    className="pick-up-point"
                  >
                    <p>{this.props.city}</p>
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
const mapStateToProps = state => {
  return {
    city: state.selfCollection.city
  };
};
export default connect(mapStateToProps, { selfCollectionAddress })(PickUp);
