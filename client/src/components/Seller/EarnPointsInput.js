import React from "react";

const EarnPointsInput = (props) => {
  return (
    <div
      className="form-group input-group"
      style={{ height: "30px", position: "relative" }}
    >
      <input
        className="form-control referral-input"
        type={props.type}
        {...props.input}
        placeholder={props.placeholder}
      />
      <div className="input-group-append">
        <button
          disabled={props.invalid || props.pristine}
          id="referral-btn"
          style={{ height: "30px !important", width: "80px" }}
        >
          Send
        </button>
      </div>

      <div style={{ color: "red", position: "absolute", top: "35px" }}>
        {props.meta.touched && props.meta.error}
      </div>
    </div>
  );
};

export default EarnPointsInput;
