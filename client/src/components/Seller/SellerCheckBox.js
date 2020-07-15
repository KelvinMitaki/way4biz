import React from "react";

const SellerCheckBox = (props) => {
  return (
    <div className="my-3" style={{ width: "90%", margin: "auto" }}>
      <p style={{ fontWeight: "revert" }} className="mr-2">
        {props.label}
      </p>
      <input type={props.type} {...props.input} />
    </div>
  );
};

export default SellerCheckBox;
