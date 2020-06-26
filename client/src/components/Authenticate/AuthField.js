import React from "react";

import "./Field.css";

const AuthField = props => {
  return (
    <div className="form-group form-input">
      <strong>
        {props.label} {props.required}
      </strong>
      <br />
      <input className="form-control" type={props.type} {...props.input} />

      <div style={{ color: "red" }}>
        {props.meta.touched && props.meta.error}
      </div>
    </div>
  );
};

export default AuthField;
