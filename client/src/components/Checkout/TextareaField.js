import React from "react";

const TextareaForm = (props) => {
  return (
    <div className="form-group">
      <strong>{props.label}</strong>
      <br />
      <textarea {...props.input} className="form-control"></textarea>
      <br />
      {props.meta.touched && props.meta.error}
    </div>
  );
};

export default TextareaForm;
