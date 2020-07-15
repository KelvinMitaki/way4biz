import React from "react";

const RadioField = (props) => {
  return (
    <div className="payment-title-button">
      <div className="radio">
        <input type={props.type} {...props.input} id={props.id} />
        <label htmlFor={props.id} className="ml-2">
          {props.label}
        </label>
      </div>
    </div>
  );
};

export default RadioField;
