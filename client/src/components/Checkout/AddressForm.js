import React from "react";

import "./AddressForm.css";

class AddressForm extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-9 my-5 mx-auto" id="address-form">
            <h3 className="legend">Address</h3>
            <hr />
            <form></form>
          </div>
        </div>
      </div>
    );
  }
}

export default AddressForm;
