import React, { Component } from "react";
import PropTypes from "prop-types";
import Message from "./message.js";
import CharacterCount from "./character-count";
import PasswordMask from "react-password-mask";

class PasswordControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPassword: false,
      hasBeenFocused: false
    };
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

  getShowPasswordIcon(showPassword) {
    const iconClassName = showPassword ? "fa-eye-slashed" : "";
    return <i className={`fa fa-eye${iconClassName}`} aria-hidden="true" />;
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

      handleValueChange = formMethods.handleValueChange,
      handleBlur = formMethods.handleBlur,
      showUISuccess = formMethods.showUISuccess(fieldState),
      showUIError = formMethods.showUIError(fieldState)
    } = this.props;
    const { showPassword } = this.state;

    const readOnly = attributes.readOnly ? attributes.readOnly : false;
    const disabled = attributes.disabled ? attributes.disabled : false;

    const validityClass = showUISuccess
      ? "has-success "
      : showUIError ? "has-error " : "";
    const requiredStar = fieldState.optional == true ? "" : <sup>*</sup>;
    const label = !(fieldType === "hidden") ? (
      <label htmlFor={fieldName}>
        {fieldTitle} {requiredStar}
      </label>
    ) : null;
    const fieldValue = fieldState.value || "";
    const fieldPrimaryClass = `wvus-field-${fieldName}`;
    const showPasswordIcon = this.getShowPasswordIcon(showPassword);

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
          <div className="form-control">
            <PasswordMask
              id={fieldId || fieldName}
              name={fieldName}
              placeholder={fieldPlaceholder}
              value={fieldValue}
              onChange={handleValueChange}
              onBlur={handleBlur}
              useVendorStyles={false}
              buttonClassName="btn btn-text btn-text-blue btn-small"
              hideButtonContent="Hide password"
              showButtonContent="Show password"
            />
          </div>

          <CharacterCount characterCount={characterCount} />

          <Message
            visible={showUIError}
            showError={true}
            showSuccess={false}
            message={fieldState.errorMessage}
          />

          <Message
            visible={showUISuccess}
            showError={false}
            showSuccess={true}
          />
        </div>
      </div>
    );
  }
}

PasswordControl.propTypes = {
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

export default PasswordControl;
