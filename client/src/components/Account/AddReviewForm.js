import React from "react";

const AddReviewForm = props => {
  return (
    <div>
      <div className="form-group my-4">
        <input
          type={props.type}
          {...props.input}
          placeholder={props.placeholder}
          className="form-control review-form-field"
        />
      </div>

      <div style={{ color: "red" }}>
        {props.meta.touched && props.meta.error}
      </div>
    </div>
  );
};

export default AddReviewForm;
