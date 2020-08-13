import React from "react";

const ContactInput = props => {
  console.log(props);
  return (
    <div className={props.divClassName}>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        className={props.inputClassName}
        id={props.id}
        type="text"
        {...props.input}
      />
    </div>
  );
};

export default ContactInput;
