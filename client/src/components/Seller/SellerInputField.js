import React from "react";

const AuthField = (props) => {
  return (
    <div className="form-group mt-3 seller-input-field">
      <p>
        {props.label} <span style={{ color: "#f76b1a" }}>{props.required}</span>
      </p>

      <input
        className="form-control authenticate-field"
        type={props.type}
        {...props.input}
      />

      <div style={{ color: "red" }}>
        {props.meta.touched && props.meta.error}
      </div>
    </div>
  );
};

export default AuthField;
