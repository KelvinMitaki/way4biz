import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { fetchFilteredProducts } from "../../redux/actions";
const ProductsForm = props => {
  console.log(props.input.value);
  return (
    <div>
      <input
        onClick={() => {
          props.fetchFilteredProducts(
            props.input.name === "price" ? props.input.value : props.input.name,
            props.match.params.category
          );
        }}
        type={props.type}
        {...props.input}
        placeholder={props.placeholder}
        style={props.style}
        className={props.className}
      />
    </div>
  );
};

export default withRouter(
  connect(null, { fetchFilteredProducts })(ProductsForm)
);
