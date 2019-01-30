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

      fieldName,
      fieldId = fieldName,
      fieldClasses = "",
      fieldType = "text",
      fieldTitle,
      fieldPlaceholder,
      fieldState = formMethods.getFieldState(fieldName),
      characterCount,
      attributes = {},

      inputClasses = "",
      labelClasses = "",

      handleValueChange = formMethods.handleValueChange,
      handleBlur = formMethods.handleBlur,
      handleFocus = ()=> {},
      showUISuccess = formMethods.showUISuccess(fieldState),
      showUIError = formMethods.showUIError(fieldState),
      hideMessage = false
    } = this.props;
    const readOnly = attributes.readOnly ? attributes.readOnly : false;
    const disabled = attributes.disabled ? attributes.disabled : false;

    const validityClass = showUISuccess
      ? "has-success "
      : showUIError ? "has-error " : "";
    const requiredStar = fieldState.optional == true ? "" : <sup>*</sup>;
    const label = !(fieldType === "hidden") ? (
      <label htmlFor={fieldName} className={labelClasses}>
        {fieldTitle} {requiredStar}
      </label>
    ) : null;
    const fieldValue = fieldState.value || "";
    const fieldPrimaryClass = `wvus-field-${fieldName}`;

    return (
      <div
        className={`${fieldPrimaryClass} ${fieldClasses} form-group has-icon ${
          validityClass
        }`}
        data-field-container={fieldId}
        data-field-is-valid={fieldState.isValid}
      >
        {label}
        <div className="form-control-wrapper">
          <input
            id={fieldId || fieldName}
            className={`form-control ${inputClasses}`}
            value={fieldValue}
            name={fieldName}
            onBlur={handleBlur}
            onChange={handleValueChange}
            onFocus={handleFocus}
            type={fieldType}
            placeholder={fieldPlaceholder}
            readOnly={readOnly}
            disabled={disabled}
          />
          {typeof characterCount !== "undefined" ? (
            <span className="message character-count">{characterCount}</span>
          ) : (
            ""
          )}
          {!hideMessage && showUIError ? (
            <Message
              showError={true}
              showSuccess={false}
              message={fieldState.errorMessage}
            />
          ) : (
            ""
          )}
          {!hideMessage && showUISuccess ? (
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
    addFieldToState: PropTypes.func.isRequired,
    showUIError: PropTypes.func.isRequired,
    showUISuccess: PropTypes.func.isRequired
  }).isRequired,
  attributes: PropTypes.shape({
    readonly: PropTypes.bool,
    disabled: PropTypes.bool
  }),
  validators: PropTypes.array
};

export default InputControl;
