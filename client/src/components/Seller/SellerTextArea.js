import React from "react";

const SellerTextArea = props => {
  return (
    <div className="form-group mt-3 seller-input-field">
      <label htmlFor={props.htmlFor}>
        {props.label} <span style={{ color: "#f76b1a" }}>{props.required}</span>
      </label>
      <label htmlFor="store-description">Description</label>
      <textarea
        className="form-control"
        type={props.type}
        {...props.input}
        id={props.htmlFor}
      ></textarea>

      <div style={{ color: "red" }}>
        {props.meta.touched && props.meta.error}
      </div>
    </div>
  );
};

export default SellerTextArea;
