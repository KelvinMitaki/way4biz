import React from "react";

const LoginField = props => {
  return (
    <div>
      <strong>{props.label}</strong>
      <input type={props.type} {...props.input} />
    </div>
  );
};

export default LoginField;
