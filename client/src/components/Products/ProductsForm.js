import React from "react";

const ProductsForm = props => {
  return (
    <div>
      <input
        onClick={() => console.log("cliecked")}
        type={props.type}
        {...props.input}
        placeholder={props.placeholder}
        style={props.style}
        className={props.className}
      />
    </div>
  );
};

export default ProductsForm;
