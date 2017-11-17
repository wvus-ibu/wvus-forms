import React, { Component } from "react";
import PropTypes from "prop-types";
import Message from "./message.js";

class InputControl extends Component {
  constructor(props) {
    super(props);
  }
  
  componentWillMount() {
    const {
      fieldName,
      fieldValue = "",
      secondInteraction = false,
      isValid = false,
      validators = [],
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
      fieldClasses = '',
      fieldType = "text",
      fieldTitle,
      fieldPlaceholder,
      fieldState = formMethods.getFieldState(fieldName),
      characterCount,

      handleValueChange = formMethods.handleValueChange,
      handleBlur = formMethods.handleBlur,
      showUISuccess = formMethods.showUISuccess(fieldState),
      showUIError = formMethods.showUIError(fieldState)
    } = this.props;

    const validityClass = showUISuccess
      ? "has-success "
      : showUIError ? "has-error " : "";
    const requiredStar = fieldState.optional == true ? "" : <sup>*</sup>;
    const label = !(fieldType === "hidden") ? (
      <label htmlFor={fieldName}>
        {fieldTitle} {requiredStar}
      </label>
    ) : null;
    const fieldValue = fieldState.value || '';
    const fieldPrimaryClass = `wvus-field-${fieldName}`;

    return (
      <div
        className={`${fieldPrimaryClass} ${fieldClasses} form-group has-icon ${validityClass}`}
        data-field-container={fieldId}
        data-field-is-valid={fieldState.isValid}
      >
        {label}
        <div className="form-control-wrapper">
          <input
            id={fieldId || fieldName}
            value={fieldValue}
            name={fieldName}
            onBlur={handleBlur}
            onChange={handleValueChange}
            className="form-control"
            type={fieldType}
            placeholder={fieldPlaceholder}
          />
          {typeof characterCount !== "undefined" ? (
            <span className="message character-count">{characterCount}</span>
          ) : (
            ""
          )}
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

InputControl.propTypes = {
  fieldName: PropTypes.string.isRequired,
  
  formMethods: PropTypes.shape({
    handleBlur: PropTypes.func.isRequired,
    handleValueChange: PropTypes.func.isRequired,
    getFieldState: PropTypes.func.isRequired,
    showUIError: PropTypes.func.isRequired,
    showUISuccess: PropTypes.func.isRequired,
  }).isRequired,
  validators: PropTypes.array
};

export default InputControl;
