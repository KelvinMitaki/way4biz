import React from "react";

const RadioField = (props) => {
  return (
    <div className="radio-title-button">
      <div className="radio">
        <input type={props.type} {...props.input} id={props.id} />
        <label htmlFor={props.id} className="ml-2">
          <p style={{ fontWeight: "600" }}>{props.label}</p>
        </label>
      </div>
    </div>
  );
};

export default RadioField;
