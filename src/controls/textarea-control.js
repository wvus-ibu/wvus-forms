import React, { Component } from "react";
import PropTypes from "prop-types";
import Message from "./message.js";

class TextAreaControl extends Component {
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
      fieldRows,

      fieldClasses = "",
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
    const fieldValue = fieldState.value || "";
    const fieldPrimaryClass = `wvus-field-${fieldName}`;

    return (
      <div className={"form-group has-icon " + validityClass}>
        <label className="control-label" htmlFor={fieldName}>
          {fieldTitle} {requiredStar}
        </label>
        <div className="form-control-wrapper">
          <div className="text-area-wrapper">
            <textarea
              id={fieldId}
              value={fieldState.value}
              name={fieldName}
              onBlur={handleBlur}
              onChange={handleValueChange}
              className="form-control"
              rows={fieldRows}
              placeholder={fieldPlaceholder}
            />
            {typeof characterCount !== "undefined" ? (
              <span className="message character-count">{characterCount}</span>
            ) : (
              ""
            )}
          </div>
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

TextAreaControl.propTypes = {
  fieldName: PropTypes.string.isRequired,
  formMethods: PropTypes.shape({
    handleBlur: PropTypes.func.isRequired,
    handleValueChange: PropTypes.func.isRequired,
    getFieldState: PropTypes.func.isRequired,
    addFieldToState: PropTypes.func.isRequired,
    showUIError: PropTypes.func.isRequired,
    showUISuccess: PropTypes.func.isRequired
  }).isRequired,
  validators: PropTypes.array
};

export default TextAreaControl;
