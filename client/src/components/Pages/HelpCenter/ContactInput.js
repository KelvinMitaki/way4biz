import React from "react";

const ContactInput = props => {
  return (
    <div className={props.divClassName}>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        className={props.inputClassName}
        id={props.id}
        type={props.type}
        {...props.input}
      />
      <div style={{ color: "red" }}>
        {props.meta.touched && props.meta.error}
      </div>
    </div>
  );
};

export default ContactInput;
