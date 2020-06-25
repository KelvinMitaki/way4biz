import React from "react";

const FormField = (props) => {
  return (
    <div className="form-group">
      <strong>{props.label}</strong>
      <br />
      <input className="form-control" type={props.type} {...props.input} />

      <div style={{ color: "red" }}>
        {props.meta.touched && props.meta.error}
      </div>
    </div>
  );
};

export default FormField;
