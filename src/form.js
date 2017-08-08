import React from 'react';
import merge from 'lodash';

const validationHelper = {};

export default class WVUSForm extends React.Component {
	constructor(props) {
		super(props);
		this.props = props;
		this.handleNextStep = props.handleNextStep;
	}

	bindLocalMethods() {
		Object.keys(this.props.formMethods).map((methodName)=>{
			this[methodName] = this.props.formMethods[methodName].bind(this);
		});
	}

	validateField(fieldName, fieldValue) {
		this.validationHelper.validate(fieldName, fieldValue);	
		let isValid = this.validationHelper.fieldIsValid(fieldName)

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
			let isValid = this.validationHelper.fieldIsValid(fieldName)
			this.validationHelper.firstErrorMessage(fieldName)
			fieldStateUpdate['fields'][fieldName] = { 
				'isValid': isValid, 
				'errorMessage': this.validationHelper.firstErrorMessage(fieldName), 
				'secondInteraction': true
			};
		})
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
			const newFieldsState = _.merge({}, prevState.fields, fieldsState['fields']);
			const formValid = this.getFormValid(newFieldsState);
			return _.merge({}, {fields: newFieldsState}, { formValid });
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

	isFormEmpty() {
		return (Object.keys(this.state.fields).filter(field => !(this.state.fields[field].value === ''))).length < 1;
	}

	handleValueChange(e, callback = null) {
		const fieldName = e.target.name;
		const fieldValue = e.target.value;
		this.setValueChange(fieldName, fieldValue, callback);
	}

	setValueChange(fieldName, fieldValue, callback = null) {
		const newState = {'fields': {}};
		newState.fields[fieldName] = {
			value: fieldValue
		}
		// Update Value
		this.setState((prevState) => {
			return _.merge({}, prevState, newState);
		});

		// Validate Field
		this.setState((prevState) => {
			const newFieldState = this.validateField(fieldName, fieldValue);
			return _.merge({}, prevState, newFieldState);
		});

		// Validate Form
		this.setState((prevState) => {
			const formValid = this.getFormValid(prevState['fields']);
			return _.merge({}, prevState, { formValid });
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
			}
		}

		// Validate this field
		this.setState((prevState) => {
			const newFieldState = this.validateField(fieldName, fieldValue);
			return _.merge({}, prevState, newFieldState, secondInteractionState);
		});

		// Validate Form
		this.setState((prevState) => {
			const formValid = this.getFormValid(prevState['fields']);
			return _.merge({}, prevState, { formValid });
		});

	}
	handleStepSubmit(e) {
		e.preventDefault();
		const formElement = e.target.form;
		const formValid = this.validateForm(formElement);
		// Change Steps
		if (formValid) {
			//@TODO: Makes sure CC field is erased before submitting step.
			$( document.body ).trigger( 'update_checkout' );
			this.handleNextStep(e, this.props.stepNum, this.state.fields);
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
		const formMethods = {
			validateField: this.validateField,
			validateFields: this.validateFields,
			validateForm: this.validateForm,
			updateFieldsState: this.updateFieldsState,
			getFormValid: this.getFormValid,
			isFormEmpty: this.isFormEmpty,
			handleValueChange: this.handleValueChange,
			setValueChange: this.setValueChange,
			handleBlur: this.handleBlur,
			handleStepSubmit: this.handleStepSubmit,
			showUISuccess: this.showUISuccess,
			showUIError: this.showUIError,
		};

		const InnerForm = this.props.innerForm;

		return (
			<div className={this.props.formWrapperClassName ? this.props.formWrapperClassName : ''}>
				<InnerForm
					{... this.props}
					formMethods={formMethods} 
					bindLocalMethods={this.bindLocalMethods}
					handleNextStep={this.handleNextStep}
					selectedForm={this.props.selectedForm}
					updateSubFormValidity={this.props.updateSubFormValidity}>
				</InnerForm>
			</div>
		);
	}


}