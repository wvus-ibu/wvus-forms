import React from "react";
import { createValidationHelper } from "./validation/validation-helpers.js";
import merge from "lodash.merge";

/**
 * @module WVUSForm
 */
export default WVUSForm;

/**
 * Form High Order Component
 * @alias module:WVUSForm
 * @description attaches functions to a custom form
 * and keeps track of form state and validity
 * @param {Object} WrapperForm  Custom form to be wrapped
 * @returns {Object} Component Wrapped react component
 */
function WVUSForm(WrapperForm) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.props = props;
      this.handleNextStep = props.handleNextStep;
      this.state = {
        fields: {},
        formValid: false
      };

      this.addFieldToState = this.addFieldToState.bind(this);
    }

    /**
     * Sets initial state of a field,
     * used by all controls for state setup
     * @private
     * @param {string} fieldName name of field
     * @param {string} fieldValue initial value
     * @param {bool} secondInteraction whether field is initially touched
     * @param {bool} isValid whether field is initially valid
     * @param {array} validators list of validation functions
     * @param {bool} optional whether field is optional
     */
    addFieldToState(
      fieldName,
      fieldValue = "",
      secondInteraction = false,
      isValid = false,
      validators = [],
      optional
    ) {
      const newState = { fields: {} };
      newState.fields[fieldName] = {
        value: fieldValue,
        isValid,
        secondInteraction,
        errorMessage: "",
        validators,
        optional
      };

      this.setState(prevState => {
        const finalState = merge({}, prevState, newState);
        this.validationHelper = createValidationHelper(finalState["fields"]);
        return finalState;
      });
    }

    /**
     * Gets field state for a field
     * @param {string} fieldName field to get state for
     * @returns {object} field state
     */
    getFieldState(fieldName) {
      return { ...this.state.fields[fieldName] } || {}; // returns copy to prevent mutation
    }

    /**
     * Gets all form state
     * @returns {object} form state
     */
    getFormState() {
      return { ...this.state }; // returns copy to prevent mutation
    }

    /**
     * Reset the field state to default for a field
     * Note: for Checkboxes and Radio controls,
     * you need to pass the original default value
     * (as default empty string is not valid for those field types)
     * @param {string} fieldName field name to reset
     * @param {string} fieldValue value to reset field to (optional)
     */
    resetField(fieldName, fieldValue = "") {
      if (!this.state.fields[fieldName]) return;

      const newState = {
        fields: {
          [fieldName]: {
            value: fieldValue,
            secondInteraction: false,
            isValid: false
          }
        },
        formValid: false
      };

      // Update Value
      this.setState(prevState => {
        return merge({}, prevState, newState);
      });
    }

    /**
     * Validate a field
     * Primarily used internally by change handlers
     * @private
     * @param {string} fieldName fieldname to validate
     * @param {string} fieldValue fieldvalue to be validate
     * @returns {object} new fieldstate with validity updated
     */
    validateField(fieldName, fieldValue) {
      this.validationHelper.validate(fieldName, fieldValue);
      let isValid = this.validationHelper.fieldIsValid(fieldName);

      const newFieldState = { fields: {} };
      newFieldState.fields[fieldName] = {
        isValid: isValid,
        errorMessage: this.validationHelper.firstErrorMessage(fieldName)
      };
      return newFieldState;
    }

    /**
     * Goes through all fields in state and updates their validity
     * Primarily used internally by change handlers
     * @private
     */
    validateFields() {
      const fieldStateUpdate = { fields: {} };
      Object.keys(this.state.fields).map(fieldName => {
        let isValid = this.validationHelper.fieldIsValid(fieldName);
        this.validationHelper.firstErrorMessage(fieldName);
        fieldStateUpdate["fields"][fieldName] = {
          isValid: isValid,
          errorMessage: this.validationHelper.firstErrorMessage(fieldName),
          secondInteraction: true
        };
      });
      this.updateFieldsState(fieldStateUpdate);
    }

    /**
     * Validates a form/subform
     * Note: Can be used to trigger validation of an entire form based
     * on some other interaction. This works for a subform because the Validation Helper's
     * validateForm method ignores form names unregistered in the config
     * @returns {bool} validity of form
     */
    validateForm() {
      Object.keys(this.state.fields).map(fieldName => {
        const fieldValue = this.state.fields[fieldName].value;
        this.validationHelper.validate(fieldName, fieldValue);
      });

      const formValid = this.validationHelper.formIsValid();

      this.validateFields();

      return formValid;
    }

    /**
     * Update Field State
     * @private
     * @param {Object} fieldsState new state object to merge w/ existing stage
     */
    updateFieldsState(fieldsState) {
      this.setState((prevState, props) => {
        const newFieldsState = merge(
          {},
          prevState.fields,
          fieldsState["fields"]
        );
        const formValid = this.getFormValid(newFieldsState);
        return merge({}, { fields: newFieldsState }, { formValid });
      });
    }

    /**
     * Get validity of current form
     * @private
     * @param {Object} newFieldsState field state to validate
     * @returns {bool} validity of entire form
     */
    getFormValid(newFieldsState) {
      return (
        Object.keys(newFieldsState).filter(
          field => !newFieldsState[field].isValid
        ).length < 1
      );
    }

    /**
     * Checks if form is valid
     * @returns {bool} validity of entire form
     */
    isFormValid() {
      return this.getFormValid(this.state.fields);
    }

    /**
     * Checks if form is completely empty
     * @returns {bool} validity of entire form
     */
    isFormEmpty() {
      return (
        Object.keys(this.state.fields).filter(
          field => !(this.state.fields[field].value === "")
        ).length < 1
      );
    }

    /**
     * Primary value change handler for onChange event
     * Does NOT update the secondInteraction value
     * @param {Object} e React event object
     * @param {Function} callback function to be called after handler
     */
    handleValueChange(e, callback = null) {
      const fieldName = e.target.name;
      const fieldValue =
        e.target.type === "checkbox" ? e.target.checked : e.target.value;
      this.setValueChange(fieldName, fieldValue, callback);
    }

    /**
     * Primary value setting handler, called by handleValueChange
     * Great for use with custom event handlers
     * Does NOT update the secondInteraction value
     * @param {string} fieldName name of field to update
     * @param {string} fieldValue new value of field
     * @param {string} callback function to call after value update
     */
    setValueChange(fieldName, fieldValue, callback = null) {
      const newState = { fields: {} };
      newState.fields[fieldName] = {
        value: fieldValue
      };
      // Update Value
      this.setState(prevState => {
        return merge({}, prevState, newState);
      });

      // Validate Field
      this.setState(prevState => {
        const newFieldState = this.validateField(fieldName, fieldValue);
        return merge({}, prevState, newFieldState);
      });

      // Validate Form
      this.setState(prevState => {
        const formValid = this.getFormValid(prevState["fields"]);
        return merge({}, prevState, { formValid });
      }, callback); //Callback important for validation on Last item
    }

    /**
     * Handles blur event on fields
     * Update the secondInteraction value to true,
     * since used with onBlur event
     * @param {Object} e React synthetic event object
     */
    handleBlur(e) {
      const fieldName = e.target.name;
      const fieldValue = e.target.value;

      const secondInteractionState = { fields: {} };

      // Only add SecondInteraction if not already added
      if (
        typeof this.state.fields[e.target.name] !== "undefined" &&
        !this.state.fields[e.target.name].secondInteraction
      ) {
        secondInteractionState.fields[fieldName] = {
          secondInteraction: true
        };
      }

      // Validate this field
      this.setState(prevState => {
        const newFieldState = this.validateField(fieldName, fieldValue);
        return merge({}, prevState, newFieldState, secondInteractionState);
      });

      // Validate Form
      this.setState(prevState => {
        const formValid = this.getFormValid(prevState["fields"]);
        return merge({}, prevState, { formValid });
      });
    }

    /**
     * Determines whether to show success ui states
     * @param {object} fieldState field's state to check for success
     * @returns {bool} whether to show success ui states to user
     */
    showUISuccess(fieldState) {
      const optionalAndEmpty = fieldState.optional && fieldState.value === "";
      return fieldState.isValid && !optionalAndEmpty;
    }

    /**
     * Determines whether to show error ui states
     * @param {object} fieldState field's state to check for error
     * @returns {bool} whether to show error ui states to user
     */
    showUIError(fieldState) {
      return !fieldState.isValid && fieldState.secondInteraction;
    }

    render() {
      this.formMethods = {
        addFieldToState: this.addFieldToState.bind(this),
        getFieldState: this.getFieldState.bind(this),
        getFormState: this.getFormState.bind(this),
        resetField: this.resetField.bind(this),
        validateField: this.validateField.bind(this),
        validateFields: this.validateFields.bind(this),
        validateForm: this.validateForm.bind(this),
        updateFieldsState: this.updateFieldsState.bind(this),
        getFormValid: this.getFormValid.bind(this),
        isFormEmpty: this.isFormEmpty.bind(this),
        isFormValid: this.isFormValid.bind(this),
        handleValueChange: this.handleValueChange.bind(this),
        setValueChange: this.setValueChange.bind(this),
        handleBlur: this.handleBlur.bind(this),
        showUISuccess: this.showUISuccess.bind(this),
        showUIError: this.showUIError.bind(this)
      };

      return (
        <div
          className={
            this.props.formWrapperClassName
              ? this.props.formWrapperClassName
              : ""
          }
        >
          <WrapperForm
            {...this.props}
            formMethods={this.formMethods}
            formState={this.state}
            handleNextStep={this.handleNextStep}
            selectedForm={this.props.selectedForm}
            updateSubFormValidity={this.props.updateSubFormValidity}
          />
        </div>
      );
    }
  };
}
