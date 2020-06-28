import React from "react";

const RadioField = props => {
  return (
    <div className="payment-title-button">
      <input type={props.type} {...props.input} />
      <h5 className="ml-2">{props.label}</h5>
    </div>
  );
};

export default RadioField;
