import React from "react";
import PropTypes from "prop-types";
import Message from "./message.js";

class SelectControl extends React.Component {
  constructor(props) {
    super(props);
    const {
      fieldName,
      fieldValue = "",
      secondInteraction = false,
      isValid = false,
      validators = [],
      optional = false,
      formMethods
    } = this.props;
    formMethods.addFieldToState(
      fieldName,
      fieldValue,
      secondInteraction,
      isValid,
      validators,
      optional
    );
  }

  render() {
    const {
      formMethods,

      fieldOptions,
      fieldName,
      fieldId = fieldName,
      fieldClasses = "",
      fieldTitle,
      fieldPlaceholder,
      attributes = {},

      fieldState = formMethods.getFieldState(fieldName),
      inputClasses = "",
      labelClasses = "",

      handleValueChange = formMethods.handleValueChange,
      handleBlur = formMethods.handleBlur,
      handleFocus = () => {},
      showUISuccess = formMethods.showUISuccess(fieldState),
      showUIError = formMethods.showUIError(fieldState)
    } = this.props;
    const disabled = attributes.disabled ? attributes.disabled : false;

    const options = fieldOptions.map((option, index) => (
      <option key={index} value={option.valueKey}>
        {option.valueText}
      </option>
    ));
    const validityClass = showUISuccess
      ? "has-success "
      : showUIError
      ? "has-error "
      : "";
    const requiredStar = fieldState.optional == true ? "" : <sup>*</sup>;
    const fieldValue = fieldState.value || "";
    const fieldPrimaryClass = `wvus-field-${fieldName}`;

    return (
      <div
        className={`${fieldPrimaryClass} ${fieldClasses} form-group has-icon ${validityClass}`}
      >
        <label htmlFor={fieldName} className={labelClasses}>
          {fieldTitle} {requiredStar}
        </label>
        <div className="form-control-wrapper">
          <select
            id={fieldName}
            className={`form-control select-control ${inputClasses}`}
            value={fieldValue}
            name={fieldName}
            onBlur={handleBlur}
            onFocus={handleFocus}
            onChange={handleValueChange}
            disabled={disabled}
          >
            {options}
          </select>
          {showUIError ? (
            <Message
              showError={true}
              showSuccess={false}
              message={fieldState.errorMessage}
            />
          ) : (
            ""
          )}
          {showUISuccess ? (
            <Message showError={false} showSuccess={true} />
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}

SelectControl.propTypes = {
  fieldName: PropTypes.string.isRequired,
  fieldOptions: PropTypes.array.isRequired,
  formMethods: PropTypes.shape({
    handleBlur: PropTypes.func.isRequired,
    handleValueChange: PropTypes.func.isRequired,
    getFieldState: PropTypes.func.isRequired,
    showUIError: PropTypes.func.isRequired,
    showUISuccess: PropTypes.func.isRequired
  }).isRequired,
  validators: PropTypes.array
};

export default SelectControl;
