import React from "react";

const SelectField = props => {
  return (
    <div>
      <strong>{props.label}</strong>
      <br />
      <select {...props.input}>
        <option value="choose">------Please Choose An Option------</option>
        {props.options.map(option => (
          <option key={option.key} value={option.key}>
            {option.text}
          </option>
        ))}
      </select>
      <br />
      {props.meta.touched && props.meta.error}
    </div>
  );
};

export default SelectField;
