import React from "react";

const SellerCheckBox = (props) => {
  return (
    <div className="my-3" style={{ width: "500px", margin: "auto" }}>
      <strong className="mr-2">{props.label}</strong>
      <input type={props.type} {...props.input} />
    </div>
  );
};

export default SellerCheckBox;
