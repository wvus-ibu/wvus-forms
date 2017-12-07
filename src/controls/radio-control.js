import React, { Component } from "react";
import PropTypes from "prop-types";
import Message from "./message.js";

class RadioControl extends Component {
  constructor(props) {
    super(props);
    this.handleValueChange = this.handleValueChange.bind(this);
  }

  componentWillMount() {
    const {
      fieldId,
      fieldName,
      fieldCheckedDefault = false,
      secondInteraction = false,
      isValid = false,
      validators = [],
      optional = false,
      formMethods
    } = this.props;

    // Only setup state if initally checked radio button
    if (fieldCheckedDefault) {
      // Set value to fieldId
      const fieldValue = fieldId;
      formMethods.addFieldToState(
        fieldName,
        fieldValue,
        secondInteraction,
        isValid,
        validators,
        optional
      );
    }
  }

  handleValueChange(e) {
    const { setValueChange } = this.props.formMethods;
    setValueChange(e.target.name, e.target.id);
  }

  render() {
    const {
      formMethods,

      fieldId,
      fieldName,
      fieldClasses = "",
      fieldTitle,

      fieldState = formMethods.getFieldState(fieldName),
      characterCount
    } = this.props;

    const fieldPrimaryClass = `wvus-field-${fieldName} wvus-field-${fieldId}`;
    const fieldChecked = fieldState.value === fieldId;

    return (
      <div className={`${fieldPrimaryClass} ${fieldClasses} radio-group`}>
        <label className="radio-inline">
          <input
            id={fieldId}
            value={fieldState.value}
            name={fieldName}
            onChange={this.handleValueChange}
            type="radio"
            checked={fieldChecked}
          />
          {fieldTitle}
        </label>
      </div>
    );
  }
}

RadioControl.propTypes = {
  fieldId: PropTypes.string.isRequired,
  fieldName: PropTypes.string.isRequired,
  fieldCheckedDefault: PropTypes.bool,
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

export default RadioControl;
