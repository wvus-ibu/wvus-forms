import React from 'react';
import { createValidationHelper, validateRequired, validateEmail, validateMin, validateMax } from './validation/validation-helpers.js';
import { merge } from 'lodash';

const validationHelper = {};

export default function WVUSForm(WrapperForm) {

  return class extends React.Component {
    constructor(props) {
      super(props);
      this.props = props;
      this.handleNextStep = props.handleNextStep;
      this.state = {
        fields : {},
        formValid: false
      };
      
      this.addFieldToState = this.addFieldToState.bind(this);
    }

    addFieldToState(fieldName, fieldValue = '', secondInteraction = false, isValid = false, validators=[]) {
      const newState = {'fields': {}};
      newState.fields[fieldName] = {
        value: fieldValue,
        isValid: isValid,
        secondInteraction: secondInteraction,
        errorMessage: '',
        validators: validators
      };

      this.setState((prevState) => {
        const finalState = merge({}, prevState, newState);
        this.validationHelper = createValidationHelper(finalState['fields']);
        return finalState;
      });

    }

    getFieldState(fieldName) {
      return this.state.fields[fieldName] || {};
    }

    

    validateField(fieldName, fieldValue) {
      this.validationHelper.validate(fieldName, fieldValue);
      let isValid = this.validationHelper.fieldIsValid(fieldName);

      const newFieldState = {'fields': {}};
      newFieldState.fields[fieldName] = {
        'isValid': isValid,
        'errorMessage': this.validationHelper.firstErrorMessage(fieldName)
      };
      return newFieldState;
    }

    validateFields() {
      const fieldStateUpdate = { fields: {}};
      Object.keys(this.state.fields).map((fieldName)=> {
        let isValid = this.validationHelper.fieldIsValid(fieldName);
        this.validationHelper.firstErrorMessage(fieldName);
        fieldStateUpdate['fields'][fieldName] = {
          'isValid': isValid,
          'errorMessage': this.validationHelper.firstErrorMessage(fieldName),
          'secondInteraction': true
        };
      });
      this.updateFieldsState(fieldStateUpdate);
    }

    /**
     * Validates a form/subform
     * Note: This works for a subform because the Validation Helper's
     * validateForm method ignores form names unregistered in the config
     */
    validateForm() {
      Object.keys(this.state.fields).map((fieldName)=> {
        const fieldValue = this.state.fields[fieldName].value;
        this.validationHelper.validate(fieldName, fieldValue);
      });

      const formValid = this.validationHelper.formIsValid();

      this.validateFields();

      return formValid;
    }

    /**
     * Update Field State
     * @param {Object} fieldsState
     * @param {Function} callback
     */
    updateFieldsState(fieldsState) {

      this.setState((prevState, props) => {
        const newFieldsState = merge({}, prevState.fields, fieldsState['fields']);
        const formValid = this.getFormValid(newFieldsState);
        return merge({}, {fields: newFieldsState}, { formValid });
      });
    }
    /**
     * Determines whether form is valid based on whether
     * any fields have errors
     * @param {Object} newFieldsState
     */
    getFormValid(newFieldsState) {
      return (Object.keys(newFieldsState).filter(field => !newFieldsState[field].isValid).length < 1);
    }

    isFormValid() {
      return this.getFormValid(this.state.fields);
    }

    isFormEmpty() {
      return (Object.keys(this.state.fields).filter(field => !(this.state.fields[field].value === ''))).length < 1;
    }

    handleValueChange(e, callback = null) {
      const fieldName = e.target.name;
      const fieldValue = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
      this.setValueChange(fieldName, fieldValue, callback);
    }

    setValueChange(fieldName, fieldValue, callback = null) {
      const newState = {'fields': {}};
      newState.fields[fieldName] = {
        value: fieldValue
      };
      // Update Value
      this.setState((prevState) => {
        return merge({}, prevState, newState);
      });

      // Validate Field
      this.setState((prevState) => {
        const newFieldState = this.validateField(fieldName, fieldValue);
        return merge({}, prevState, newFieldState);
      });

      // Validate Form
      this.setState((prevState) => {
        const formValid = this.getFormValid(prevState['fields']);
        return merge({}, prevState, { formValid });
      }, callback); //Callback important for validation on Last item
    }

    handleBlur(e){
      const fieldName = e.target.name;
      const fieldValue = e.target.value;

      const secondInteractionState = {'fields': {}};

      // Only add SecondInteraction if not already added
      if (typeof this.state.fields[e.target.name] !== 'undefined' && !this.state.fields[e.target.name].secondInteraction) {
        secondInteractionState.fields[fieldName] = {
          secondInteraction: true
        };
      }

      // Validate this field
      this.setState((prevState) => {
        const newFieldState = this.validateField(fieldName, fieldValue);
        return merge({}, prevState, newFieldState, secondInteractionState);
      });

      // Validate Form
      this.setState((prevState) => {
        const formValid = this.getFormValid(prevState['fields']);
        return merge({}, prevState, { formValid });
      });

    }
    handleStepSubmit(e) {
      e.preventDefault();
      const formElement = e.target.form;
      const formValid = this.validateForm(formElement);

      // Change Steps
      if (formValid) {
        //@TODO: Makes sure CC field is erased before submitting step.
        // $( document.body ).trigger( 'update_checkout' );
        this.props.handleNextStep(e, this.props.stepNum, this.state.fields);
      }
    }
    showUISuccess(fieldState) {
      const optionalAndEmpty = (fieldState.optional && fieldState.value === '');
      return fieldState.isValid && !optionalAndEmpty;
    }

    showUIError(fieldState) {
      return !fieldState.isValid && fieldState.secondInteraction;
    }

    render() {

      this.formMethods = {
        addFieldToState: this.addFieldToState.bind(this),
        getFieldState: this.getFieldState.bind(this),
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
        handleStepSubmit: this.handleStepSubmit.bind(this),
        showUISuccess: this.showUISuccess.bind(this),
        showUIError: this.showUIError.bind(this),
      };

      return (
        <div className={this.props.formWrapperClassName ? this.props.formWrapperClassName : ''}>
          <WrapperForm
            {... this.props}
            formMethods={this.formMethods}
            formState={this.state}
            handleNextStep={this.handleNextStep}
            selectedForm={this.props.selectedForm}
            updateSubFormValidity={this.props.updateSubFormValidity}>
          </WrapperForm>
        </div>
      );
    }
  };
}
