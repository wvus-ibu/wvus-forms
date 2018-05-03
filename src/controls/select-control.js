import React from "react";
import PropTypes from "prop-types";
import Message from "./message.js";

class SelectControl extends React.Component {
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

      fieldOptions,
      fieldName,
      fieldId = fieldName,
      fieldClasses = "",
      fieldTitle,
      fieldPlaceholder,
      fieldState = formMethods.getFieldState(fieldName),
      labelClasses,

      handleValueChange = formMethods.handleValueChange,
      handleBlur = formMethods.handleBlur,
      showUISuccess = formMethods.showUISuccess(fieldState),
      showUIError = formMethods.showUIError(fieldState)
    } = this.props;
    const options = fieldOptions.map((option, index) => (
      <option key={index} value={option.valueKey}>
        {option.valueText}
      </option>
    ));
    const validityClass = showUISuccess
      ? "has-success "
      : showUIError ? "has-error " : "";
    const requiredStar = fieldState.optional == true ? "" : <sup>*</sup>;
    const fieldValue = fieldState.value || "";
    const fieldPrimaryClass = `wvus-field-${fieldName}`;

    return (
      <div
        className={`${fieldPrimaryClass} ${fieldClasses} form-group has-icon ${
          validityClass
        }`}
      >
        <label htmlFor={fieldName} className={labelClasses}>
          {fieldTitle} {requiredStar}
        </label>
        <div className="form-control-wrapper">
          <select
            id={fieldName}
            value={fieldValue}
            name={fieldName}
            onBlur={handleBlur}
            onChange={handleValueChange}
            className="form-control select-control"
          >
            {options}
          </select>
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
