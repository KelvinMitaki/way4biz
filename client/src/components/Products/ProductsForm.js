import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { fetchFilteredProducts } from "../../redux/actions";
const ProductsForm = props => {
  return (
    <div>
      <input
        onClick={() => {
          props.fetchFilteredProducts(
            props.input.name === "price" ? props.input.value : props.products,
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
const mapStateToProps = state => {
  return {
    products: state.form.Products
  };
};
export default withRouter(
  connect(mapStateToProps, { fetchFilteredProducts })(ProductsForm)
);
