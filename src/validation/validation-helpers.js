import {isEmpty, trim, isEmail, isLength, isCreditCard} from 'validator';
import QSToObject from './query-string-parser';
import { getCreditCardTypeValidity } from './credit-card-helpers';


const createValidationHelper = (config) => {
	const createValidationRunner = (config) =>
		(fieldName, fieldValue) => config[fieldName].validators.map((fn)=> fn(fieldValue));
	const validationRunner = createValidationRunner(config);

	return {
		errorBag: [],
		successBag: [],
		validate(fieldName, fieldValue) {
			if (config[fieldName]) {
				const validationResults = validationRunner(fieldName, fieldValue);
				const invalidResults = validationResults.filter((result) => !result.valid);
				const validResults = validationResults.filter((result) => result.valid);
				this.errorBag[fieldName] = invalidResults;
				this.successBag[fieldName] = validResults;

				// Clear errors if Optional and Empty
				if(this.fieldIsOptional(fieldName) && this.fieldValueIsEmpty(fieldValue)) {
					this.errorBag[fieldName] = [];
				}

			} else {
				console.error(`Please configure unknown field name: ${fieldName}`);
			}

		},
		hasErrors(fieldName) {
			if (!this.errorBag[fieldName]) return false;
			return this.errorBag[fieldName].length > 0
		},
		formIsValid() {
			let errorCount = 0;
			for(let fieldName of Object.keys(config)) {
				if(this.hasErrors(fieldName)){
					errorCount++;
				}
			}
			return errorCount < 1;
		},
		hasSuccess(fieldName){
			if (!this.successBag[fieldName]) return false;
			return this.successBag[fieldName].length > 0
		},
		fieldIsOptional(fieldName) {
			return ((typeof config[fieldName].optional !== 'undefined') && config[fieldName].optional);
		},
		fieldValueIsEmpty(fieldValue) {
			return isEmpty(trim(fieldValue));
		},
		firstErrorMessage(fieldName) {
			if (!this.hasErrors(fieldName)) return '';
			return this.errorBag[fieldName][0].message;
		},
		fieldIsValid(fieldName) {
			return this.hasErrors(fieldName) ? false : true
		},
		validateForm(formElement) {
			try {
				const formDataQS = jQuery(formElement).serialize();
				const data = QSToObject(formDataQS);
				for (let key of Object.keys(data)) {
					const fieldName = key;
					const fieldValue = decodeURIComponent(data[key]);

					// Only validate configured fields
					// This allows for subform/step validation
					if(!config[fieldName]) continue;

					this.validate(fieldName.toString(), fieldValue.toString());
				}
			} catch (error) {
				console.log('Error validating data from form.');
			}
		}

	}
}

/**
 *
 * Validators
 */
// Documention on validator project helper functions used here:
// https://github.com/chriso/validator.js

const validateRequired = (value) => {
	return {
		valid: !isEmpty(trim(value)),
		message: 'This field is required.'
	}
};

const validateEmail = (value) => {
	return {
		valid: isEmail(trim(value)),
		message: 'Please enter a valid email address.'
	}
};

const validateMin = (min) => (value) => {
	return {
		valid: isLength(trim(value), {min}),
		message: `Field must be a minimum length of: ${min}`
	}
};

const validateMax = (max) => (value) => {
	return {
		valid: isLength(trim(value), {max}),
		message: `Field must be a maximum length of: ${max}`
	}
};

const validateEmpty = (value) => {
	return {
		valid: isEmpty(trim(value)),
		message: ''
	}
};

const validateZip = (value) => {
	const postalRegEx = new RegExp("^\\d{5}(-\\d{4})?$");
	return {
		valid: postalRegEx.test(trim(value)),
		message: 'Please enter a valid zip code. For example 90602 or 90602-1234.'
	}
};

const validatePhone = (value) => {
	const phoneRegEx = /^\(?[0-9]{3}\)?\s?-?[0-9]{3}\s?-?[0-9]{4}$/g;
	return {
		valid: phoneRegEx.test(trim(value)),
		message: 'Please enter a valid 10 digit phone number. E.g. (123) 456-7890 or 123-456-7890.'
	}
};

const validateExpirationDate = (value) => {
	const expRegEx = /^(0[1-9]|1[0-2])\/([0-9]{2})$/;
	const [paddedMonth, twoDigitYear] = value.split ? value.split('/') : [];
	const month = paddedMonth.replace(/^0+/, '');
	const year =  `20${twoDigitYear}`;

	return {
		valid: expRegEx.test(trim(value)) && validateIsFutureDate(month, year).valid,
		message: 'Please enter a valid expiration date. E.g. 03/22'
	}
};

const validateIsFutureDate = (month, year, compareMonth = new Date().getMonth(), compareYear = new Date().getFullYear()) => {
	year = parseInt(year, 10);
	month = parseInt(month, 10);
	compareYear = parseInt(compareYear, 10);
	compareMonth = parseInt(compareMonth, 10) + 1; // adjust up one month due to zero-based months in JS

	return {
		valid: year > compareYear || month >= compareMonth && year === compareYear,
		message: 'Please enter a valid expiration date.'
	}
};

const validateIsNotPastYearsOut = (yearsOut) => (value = '') => {
	const [paddedMonth, twoDigitYear] = value.split ? value.split('/') : ['', ''];
	let month = parseInt(paddedMonth.replace(/^0+/, ''));
	let year = parseInt(`20${twoDigitYear}`, 10);
	const compareYear = parseInt(new Date().getFullYear() + yearsOut, 10);
	const compareMonth = parseInt(new Date().getMonth(), 10) + 1; // adjust up one month due to zero-based months in JS

	return {
		valid: year <= compareYear || month <= compareMonth && year === compareYear,
		message: `Please enter a valid expiration date within ${yearsOut} years.`
	}
};

const validateNotPast10Years = validateIsNotPastYearsOut(10);

const validateCreditCardNum = (value) => {
	return {
		valid: isCreditCard(trim(value)),
		message: 'Please enter a valid credit card number.'
	}
};

const validateCreditCardType = (value) => {
	return {
		valid: getCreditCardTypeValidity(trim(value)),
		message: 'Please enter a valid credit card number.'
	}
};

const validateCreditCardNumAndType = (validateCreditCardNum, validateCreditCardType) => (value) => {
	return {
		valid: validateCreditCardType(value).valid && validateCreditCardNum(value).valid,
		message: 'Please enter a valid credit card number.'
	}
};



const validateCreditCard = validateCreditCardNumAndType(validateCreditCardNum, validateCreditCardType);

export { createValidationHelper, validateRequired, validateEmpty, validateEmail, validatePhone, validateZip, validateMin, validateMax, validateExpirationDate, validateIsFutureDate, validateIsNotPastYearsOut, validateNotPast10Years, validateCreditCardNum, validateCreditCardType, validateCreditCard };
