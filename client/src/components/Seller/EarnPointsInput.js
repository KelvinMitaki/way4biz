import React from "react";

const EarnPointsInput = props => {
  return (
    <div className="form-group mt-3 seller-input-field">
      <input
        className="form-control referral-input"
        type={props.type}
        {...props.input}
        placeholder={props.placeholder}
      />

      <div style={{ color: "red" }}>
        {props.meta.touched && props.meta.error}
      </div>
    </div>
  );
};

export default EarnPointsInput;
