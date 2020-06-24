import React from "react";

const LoginField = props => {
  return (
    <div>
      <strong>{props.label}</strong>
      <input type={props.type} {...props.input} />
      {props.meta.touched && props.meta.error}
    </div>
  );
};

export default LoginField;
