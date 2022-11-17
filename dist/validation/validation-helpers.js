(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "core-js/modules/esnext.async-iterator.map.js", "core-js/modules/esnext.iterator.map.js", "core-js/modules/esnext.async-iterator.filter.js", "core-js/modules/esnext.iterator.constructor.js", "core-js/modules/esnext.iterator.filter.js", "validator", "./query-string-parser", "./credit-card-helpers"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("core-js/modules/esnext.async-iterator.map.js"), require("core-js/modules/esnext.iterator.map.js"), require("core-js/modules/esnext.async-iterator.filter.js"), require("core-js/modules/esnext.iterator.constructor.js"), require("core-js/modules/esnext.iterator.filter.js"), require("validator"), require("./query-string-parser"), require("./credit-card-helpers"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.esnextAsyncIteratorMap, global.esnextIteratorMap, global.esnextAsyncIteratorFilter, global.esnextIteratorConstructor, global.esnextIteratorFilter, global.validator, global.queryStringParser, global.creditCardHelpers);
    global.validationHelpers = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _esnextAsyncIteratorMap, _esnextIteratorMap, _esnextAsyncIteratorFilter, _esnextIteratorConstructor, _esnextIteratorFilter, _validator, _queryStringParser, _creditCardHelpers) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.validateZip = _exports.validateRequired = _exports.validatePhone = _exports.validatePassword = _exports.validateNotPast10Years = _exports.validateNoSpaces = _exports.validateMin = _exports.validateMax = _exports.validateIsNotPastYearsOut = _exports.validateIsInt = _exports.validateIsFutureDate = _exports.validateHasUpperCase = _exports.validateHasNumber = _exports.validateHasLowerCase = _exports.validateExpirationDate = _exports.validateExactLength = _exports.validateEmpty = _exports.validateEmailStartPeriods = _exports.validateEmailEndPeriods = _exports.validateEmailDoublePeriods = _exports.validateEmail = _exports.validateCreditCardType = _exports.validateCreditCardNum = _exports.validateCreditCard = _exports.validateContainChars = _exports.validateAlphaNumeric = _exports.createValidationHelper = void 0;
  _queryStringParser = _interopRequireDefault(_queryStringParser);
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  const createValidationHelper = config => {
    const createValidationRunner = config => (fieldName, fieldValue) => config[fieldName].validators.map(fn => fn(fieldValue));
    const validationRunner = createValidationRunner(config);
    return {
      errorBag: [],
      successBag: [],
      validate(fieldName, fieldValue) {
        if (config[fieldName]) {
          const validationResults = validationRunner(fieldName, fieldValue);
          const invalidResults = validationResults.filter(result => !result.valid);
          const validResults = validationResults.filter(result => result.valid);
          this.errorBag[fieldName] = invalidResults;
          this.successBag[fieldName] = validResults;

          // Clear errors if Optional and Empty
          if (this.fieldIsOptional(fieldName) && this.fieldValueIsEmpty(fieldValue)) {
            this.errorBag[fieldName] = [];
          }
        } else {
          console.error(`Please configure unknown field name: ${fieldName}`);
        }
      },
      hasErrors(fieldName) {
        if (!this.errorBag[fieldName]) return false;
        return this.errorBag[fieldName].length > 0;
      },
      formIsValid() {
        let errorCount = 0;
        for (let fieldName of Object.keys(config)) {
          if (this.hasErrors(fieldName)) {
            errorCount++;
          }
        }
        return errorCount < 1;
      },
      hasSuccess(fieldName) {
        if (!this.successBag[fieldName]) return false;
        return this.successBag[fieldName].length > 0;
      },
      fieldIsOptional(fieldName) {
        return typeof config[fieldName].optional !== "undefined" && config[fieldName].optional;
      },
      fieldValueIsEmpty(fieldValue) {
        return (0, _validator.isEmpty)((0, _validator.trim)(fieldValue));
      },
      firstErrorMessage(fieldName) {
        if (!this.hasErrors(fieldName)) return "";
        return this.errorBag[fieldName][0].message;
      },
      fieldIsValid(fieldName) {
        return this.hasErrors(fieldName) ? false : true;
      }
    };
  };

  /**
   *
   * Validators
   */
  // Documention on validator project helper functions used here:
  // https://github.com/chriso/validator.js
  _exports.createValidationHelper = createValidationHelper;
  const validateRequired = value => {
    return {
      valid: !(0, _validator.isEmpty)((0, _validator.trim)(value)),
      message: "This field is required."
    };
  };
  _exports.validateRequired = validateRequired;
  const validateEmail = value => {
    return {
      valid: (0, _validator.isEmail)((0, _validator.trim)(value)),
      message: "Please enter a valid email address."
    };
  };
  _exports.validateEmail = validateEmail;
  const validateEmailStartPeriods = value => {
    var testValid = true;
    const periodStartRegex = new RegExp("^([\\.])");
    if (periodStartRegex.test(value) === true) {
      testValid = false;
    }
    return {
      valid: testValid,
      message: "Email addresses cannot begin with a . (period) character"
    };
  };
  _exports.validateEmailStartPeriods = validateEmailStartPeriods;
  const validateAlphaNumeric = value => {
    var testValid = true;
    const AlphaNumericRegEx = new RegExp("^[a-zA-Z0-9]+$");
    if (AlphaNumericRegEx.test(value) === false) {
      testValid = false;
    }
    return {
      valid: testValid,
      message: "All characters entered into this field must be alphanumeric (numbers and letters, no spaces)"
    };
  };
  _exports.validateAlphaNumeric = validateAlphaNumeric;
  const validateEmailEndPeriods = value => {
    var testValid = true;
    const PeriodAtRegEx = new RegExp("^(?!.*\\.@).*$");
    if (PeriodAtRegEx.test(value) === false) {
      testValid = false;
    }
    return {
      valid: testValid,
      message: "Email addresses may not use a . (period) character followed by an @ symbol"
    };
  };
  _exports.validateEmailEndPeriods = validateEmailEndPeriods;
  const validateEmailDoublePeriods = value => {
    var testValid = true;
    const DoubleDotRegex = new RegExp("(\\.\\.)");
    if (DoubleDotRegex.test(value) === true) {
      testValid = false;
    }
    return {
      valid: testValid,
      message: "Email addresses cannot use two .. (periods) in a row"
    };
  };
  _exports.validateEmailDoublePeriods = validateEmailDoublePeriods;
  const validateMin = min => value => {
    return {
      valid: (0, _validator.isLength)((0, _validator.trim)(value), {
        min
      }),
      message: `Field must be a minimum length of: ${min}`
    };
  };
  _exports.validateMin = validateMin;
  const validateMax = max => value => {
    return {
      valid: (0, _validator.isLength)((0, _validator.trim)(value), {
        max
      }),
      message: `Field must be a maximum length of: ${max}`
    };
  };
  _exports.validateMax = validateMax;
  const validateExactLength = length => value => {
    return {
      valid: (0, _validator.isLength)((0, _validator.trim)(value), {
        max: length,
        min: length
      }),
      message: `Field must be an exact length of: ${length}`
    };
  };
  _exports.validateExactLength = validateExactLength;
  const validateNoSpaces = value => {
    return {
      valid: !value.includes(" "),
      message: "Field must not contain spaces"
    };
  };
  _exports.validateNoSpaces = validateNoSpaces;
  const validateHasLowerCase = value => {
    const letterRegEx = /[a-z]/g;
    return {
      valid: letterRegEx.test(value),
      message: "Field must have at least one lowercase letter."
    };
  };
  _exports.validateHasLowerCase = validateHasLowerCase;
  const validateHasUpperCase = value => {
    const letterRegEx = /[A-Z]/g;
    return {
      valid: letterRegEx.test(value),
      message: "Field must have at least one uppercase letter."
    };
  };
  _exports.validateHasUpperCase = validateHasUpperCase;
  const validateHasNumber = value => {
    const numRegEx = /[\d]/g;
    return {
      valid: numRegEx.test(value),
      message: "Field must have at least one number."
    };
  };
  _exports.validateHasNumber = validateHasNumber;
  const validateIsInt = value => {
    return {
      valid: (0, _validator.isInt)(value),
      message: "Field must only contain numbers."
    };
  };
  _exports.validateIsInt = validateIsInt;
  const validatePassword = value => {
    return {
      valid: validateMin(8)(value).valid && validateHasNumber(value).valid && validateHasLowerCase(value).valid && validateHasUpperCase(value).valid && validateNoSpaces(value).valid,
      message: "Minimum 8 characters with at least 1 number, 1 uppercase letter, 1 lowercase letter, and no spaces."
    };
  };
  _exports.validatePassword = validatePassword;
  const validateContainChars = value => {
    const containsCharsRegEx = /[)(~%<>]/;
    return {
      valid: !containsCharsRegEx.test((0, _validator.trim)(value)),
      message: "Please do not use any of the following invalid characters: ),(,>,<,~,%"
    };
  };
  _exports.validateContainChars = validateContainChars;
  const validateEmpty = value => {
    return {
      valid: (0, _validator.isEmpty)((0, _validator.trim)(value)),
      message: ""
    };
  };
  _exports.validateEmpty = validateEmpty;
  const validateZip = value => {
    const postalRegEx = new RegExp("^\\d{5}(-\\d{4})?$");
    return {
      valid: postalRegEx.test((0, _validator.trim)(value)),
      message: "Please enter a valid zip code. For example 90602 or 90602-1234."
    };
  };
  _exports.validateZip = validateZip;
  const validatePhone = value => {
    const phoneRegEx = /^[0-9]{3}-?[0-9]{3}\s?-?[0-9]{4}$/g;
    return {
      valid: phoneRegEx.test((0, _validator.trim)(value)),
      message: "Please enter a valid 10 digit phone number. E.g. 123-456-7890."
    };
  };
  _exports.validatePhone = validatePhone;
  const validateExpirationDate = value => {
    const expRegEx = /^(0[1-9]|1[0-2])\/([0-9]{2})$/;
    const [paddedMonth, twoDigitYear] = value.split ? value.split("/") : [];
    const month = paddedMonth.replace(/^0+/, "");
    const year = `20${twoDigitYear}`;
    return {
      valid: expRegEx.test((0, _validator.trim)(value)) && validateIsFutureDate(month, year).valid,
      message: "Please enter a valid expiration date. E.g. 03/22"
    };
  };
  _exports.validateExpirationDate = validateExpirationDate;
  const validateIsFutureDate = function (month, year) {
    let compareMonth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : new Date().getMonth();
    let compareYear = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : new Date().getFullYear();
    year = parseInt(year, 10);
    month = parseInt(month, 10);
    compareYear = parseInt(compareYear, 10);
    compareMonth = parseInt(compareMonth, 10) + 1; // adjust up one month due to zero-based months in JS

    return {
      valid: year > compareYear || month >= compareMonth && year === compareYear,
      message: "Please enter a valid expiration date."
    };
  };
  _exports.validateIsFutureDate = validateIsFutureDate;
  const validateIsNotPastYearsOut = yearsOut => function () {
    let value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    const [paddedMonth, twoDigitYear] = value.split ? value.split("/") : ["", ""];
    let month = parseInt(paddedMonth.replace(/^0+/, ""));
    let year = parseInt(`20${twoDigitYear}`, 10);
    const compareYear = parseInt(new Date().getFullYear() + yearsOut, 10);
    const compareMonth = parseInt(new Date().getMonth(), 10) + 1; // adjust up one month due to zero-based months in JS

    return {
      valid: year <= compareYear || month <= compareMonth && year === compareYear,
      message: `Please enter a valid expiration date within ${yearsOut} years.`
    };
  };
  _exports.validateIsNotPastYearsOut = validateIsNotPastYearsOut;
  const validateNotPast10Years = validateIsNotPastYearsOut(10);
  _exports.validateNotPast10Years = validateNotPast10Years;
  const validateCreditCardNum = value => {
    return {
      valid: (0, _validator.isCreditCard)((0, _validator.trim)(value)),
      message: "Please enter a valid credit card number."
    };
  };
  _exports.validateCreditCardNum = validateCreditCardNum;
  const validateCreditCardType = value => {
    return {
      valid: (0, _creditCardHelpers.getCreditCardTypeValidity)((0, _validator.trim)(value)),
      message: "Please enter a valid credit card number."
    };
  };
  _exports.validateCreditCardType = validateCreditCardType;
  const validateCreditCardNumAndType = (validateCreditCardNum, validateCreditCardType) => value => {
    return {
      valid: validateCreditCardType(value).valid && validateCreditCardNum(value).valid,
      message: "Please enter a valid credit card number."
    };
  };
  const validateCreditCard = validateCreditCardNumAndType(validateCreditCardNum, validateCreditCardType);
  _exports.validateCreditCard = validateCreditCard;
});