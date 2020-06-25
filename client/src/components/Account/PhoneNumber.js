import React from "react";

import "../Authenticate/Field.css";

const PhoneNumber = props => {
  return (
    <div className="form-group ">
      <strong>{props.label}</strong>
      <div className="input-group">
        <br />
        <div class="input-group-prepend">
          <span class="input-group-text">+254</span>
        </div>
        <input
          placeholder="712345678"
          className="form-control"
          type={props.type}
          {...props.input}
        />
      </div>
      <div style={{ color: "red" }}>
        {props.meta.touched && props.meta.error}
      </div>
    </div>
  );
};

export default PhoneNumber;
