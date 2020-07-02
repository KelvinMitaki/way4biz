import React from "react";

const SellerCheckBox = props => {
  return (
    <div className="form-input my-3">
      <strong className="mr-2">{props.label}</strong>
      <input type={props.type} {...props.input} />
    </div>
  );
};

export default SellerCheckBox;
