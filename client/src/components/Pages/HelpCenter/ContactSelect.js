import React from "react";

const ContactSelect = props => {
  return (
    <div>
      <label htmlFor="contact-reason">Reason</label>
      <select {...props.input} className="form-control" id="contact-reason">
        <option value="choose">------Please Choose An Option------</option>
        <option {...props.input} value="suggestion">
          Suggestion
        </option>
        <option {...props.input} value="feedback">
          Feedback
        </option>
      </select>
    </div>
  );
};

export default ContactSelect;
