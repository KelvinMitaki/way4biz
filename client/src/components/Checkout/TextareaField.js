import React from "react";

const TextareaForm = props => {
  return (
    <div>
      <strong>{props.label}</strong>
      <br />
      <textarea {...props.input}></textarea>
      <br />
      {props.meta.touched && props.meta.error}
    </div>
  );
};

export default TextareaForm;
