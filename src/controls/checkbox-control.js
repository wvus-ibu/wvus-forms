import React from "react";
import PropTypes from "prop-types";
import Message from "./message.js";

class CheckboxControl extends React.Component {
  constructor(props) {
    super(props);
    const {
      fieldName,
      fieldValue = false,
      secondInteraction = false,
      isValid = true, // Checkboxes are valid by default regardless of choice
      validators = [], // Note that validators must validate against boolean to work here
      formMethods
    } = this.props;
    formMethods.addFieldToState(
      fieldName,
      fieldValue,
      secondInteraction,
      isValid,
      validators
    );
  }

  render() {
    const {
      formMethods,
      fieldName,
      fieldId = fieldName,
      fieldClasses = "",
      fieldTitle,
      attributes = {},

      inputClasses = "",
      labelClasses = "",

      handleValueChange = formMethods.handleValueChange,
      handleFocus = () => {},
      fieldState = formMethods.getFieldState(fieldName)
    } = this.props;

    const disabled = attributes.disabled ? attributes.disabled : false;
    const fieldPrimaryClass = `wvus-field-${fieldName}`;
    const fieldValue = fieldState.value || "";

    return (
      <div className={`${fieldPrimaryClass} ${fieldClasses} checkbox-group`}>
        <label className={`${labelClasses} checkbox-inline`}>
          <input
            id={fieldId}
            className={inputClasses}
            name={fieldName}
            onChange={handleValueChange}
            onFocus={handleFocus}
            type="checkbox"
            checked={fieldValue}
            disabled={disabled}
          />
          {fieldTitle}
        </label>
      </div>
    );
  }
}

CheckboxControl.propTypes = {
  fieldName: PropTypes.string.isRequired,
  fieldValue: PropTypes.bool.isRequired,
  formMethods: PropTypes.shape({
    handleValueChange: PropTypes.func.isRequired,
    getFieldState: PropTypes.func.isRequired,
    showUIError: PropTypes.func.isRequired,
    showUISuccess: PropTypes.func.isRequired
  }).isRequired,
  attributes: PropTypes.shape({
    disabled: PropTypes.bool
  }),
  validators: PropTypes.array
};

export default CheckboxControl;
