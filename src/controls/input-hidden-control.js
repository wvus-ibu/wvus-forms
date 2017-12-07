import React, { Component } from "react";
import Message from "./message.js";

class InputHiddenControl extends Component {
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
      fieldState = formMethods.getFieldState(fieldName)
    } = this.props;

    const fieldValue = fieldState.value || "";
    const fieldPrimaryClass = `wvus-field-${fieldName}`;

    return (
      <span
        className={`${fieldPrimaryClass} ${
          fieldClasses
        } input-hidden-control-wrapper`}
        data-field-container={fieldId}
      >
        <input
          id={fieldId}
          name={fieldName}
          value={fieldValue}
          className="input-hidden-control"
          type="hidden"
        />
      </span>
    );
  }
}

export default InputHiddenControl;
