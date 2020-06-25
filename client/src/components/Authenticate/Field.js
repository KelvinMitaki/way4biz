import React from "react";

const FormField = (props) => {
  return (
    <div className="form-group">
      <strong>{props.label}</strong>
      <br />
      <input className="form-control" type={props.type} {...props.input} />
      <br />
      {props.meta.touched && props.meta.error}
      <hr />
    </div>
  );
};

export default FormField;
