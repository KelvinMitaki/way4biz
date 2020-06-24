import React from "react";

const FormField = props => {
  return (
    <div>
      <strong>{props.label}</strong>
      <br />
      <input type={props.type} {...props.input} />
      <br />
      {props.meta.touched && props.meta.error}
      <hr />
    </div>
  );
};

export default FormField;
