import React from "react";
import { v1 } from "uuid";
import "../Authenticate/Field.css";
import PlacesAutocomplete from "react-places-autocomplete";

const AutoComplete = props => {
  return (
    <PlacesAutocomplete
      value={props.input.value}
      onChange={props.input.onChange}
      searchOptions={props.options}
    >
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <div className="form-group form-input mt-3">
          <strong>
            {props.label}{" "}
            <span style={{ color: "#f76b1a" }}>{props.required}</span>
          </strong>
          <br />
          <input
            className="form-control authenticate-field"
            type={props.type}
            {...getInputProps({ onBlur: props.input.onBlur })}
          />

          <div style={{ color: "red" }}>
            {props.meta.touched && props.meta.error}
          </div>
          {suggestions.length > 0 && (
            <div>
              {loading && <div>Loading...</div>}

              {suggestions.map((suggestion, index) => (
                <React.Fragment key={index}>
                  <div
                    // eslint-disable-next-line
                    key={suggestion.id}
                  >
                    <strong>{suggestion.formattedSuggestion.mainText}</strong>
                    <p>{suggestion.formattedSuggestion.secondaryText}</p>
                  </div>
                </React.Fragment>
              ))}
            </div>
          )}
        </div>
      )}
    </PlacesAutocomplete>
  );
};

export default AutoComplete;
