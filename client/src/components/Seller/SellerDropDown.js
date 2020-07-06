import React from "react";

const SellerDropDown = (props) => {
  return (
    <div className="form-group form-input">
      <strong>{props.label}</strong>
      <br />
      <select
        {...props.input}
        className="form-control"
        style={{ borderRadius: "40px" }}
      >
        <option value="choose">------Please Choose An Option------</option>
        {props.options.map((option) => (
          <option key={option.key} value={option.key}>
            {option.text}
          </option>
        ))}
      </select>

      <div style={{ color: "red" }}>
        {props.meta.touched && props.meta.error}
      </div>
    </div>
  );
};

export default SellerDropDown;
