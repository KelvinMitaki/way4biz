import React from "react";

const ProductsForm = props => {
  return (
    <div>
      <input
        type={props.type}
        {...props.input}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default ProductsForm;
