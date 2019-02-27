(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "validator", "./query-string-parser", "./credit-card-helpers"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("validator"), require("./query-string-parser"), require("./credit-card-helpers"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.validator, global.queryStringParser, global.creditCardHelpers);
    global.validationHelpers = mod.exports;
  }
})(this, function (exports, _validator, _queryStringParser, _creditCardHelpers) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.validateCreditCard = exports.validateCreditCardType = exports.validateCreditCardNum = exports.validateNotPast10Years = exports.validateIsNotPastYearsOut = exports.validateIsFutureDate = exports.validateExpirationDate = exports.validatePassword = exports.validateIsInt = exports.validateHasNumber = exports.validateHasUpperCase = exports.validateHasLowerCase = exports.validateNoSpaces = exports.validateExactLength = exports.validateMax = exports.validateMin = exports.validateZip = exports.validatePhone = exports.validateEmailDoublePeriods = exports.validateEmailEndPeriods = exports.validateEmailStartPeriods = exports.validateEmail = exports.validateEmpty = exports.validateRequired = exports.createValidationHelper = undefined;

  var _queryStringParser2 = _interopRequireDefault(_queryStringParser);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var _slicedToArray = function () {
    function sliceIterator(arr, i) {
      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = undefined;

      try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);

          if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"]) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }

      return _arr;
    }

    return function (arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if (Symbol.iterator in Object(arr)) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }
    };
  }();

  var createValidationHelper = function createValidationHelper(config) {
    var createValidationRunner = function createValidationRunner(config) {
      return function (fieldName, fieldValue) {
        return config[fieldName].validators.map(function (fn) {
          return fn(fieldValue);
        });
      };
    };
    var validationRunner = createValidationRunner(config);

    return {
      errorBag: [],
      successBag: [],
      validate: function validate(fieldName, fieldValue) {
        if (config[fieldName]) {
          var validationResults = validationRunner(fieldName, fieldValue);
          var invalidResults = validationResults.filter(function (result) {
            return !result.valid;
          });
          var validResults = validationResults.filter(function (result) {
            return result.valid;
          });
          this.errorBag[fieldName] = invalidResults;
          this.successBag[fieldName] = validResults;

          // Clear errors if Optional and Empty
          if (this.fieldIsOptional(fieldName) && this.fieldValueIsEmpty(fieldValue)) {
            this.errorBag[fieldName] = [];
          }
        } else {
          console.error("Please configure unknown field name: " + fieldName);
        }
      },
      hasErrors: function hasErrors(fieldName) {
        if (!this.errorBag[fieldName]) return false;
        return this.errorBag[fieldName].length > 0;
      },
      formIsValid: function formIsValid() {
        var errorCount = 0;
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = Object.keys(config)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var fieldName = _step.value;

            if (this.hasErrors(fieldName)) {
              errorCount++;
            }
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        return errorCount < 1;
      },
      hasSuccess: function hasSuccess(fieldName) {
        if (!this.successBag[fieldName]) return false;
        return this.successBag[fieldName].length > 0;
      },
      fieldIsOptional: function fieldIsOptional(fieldName) {
        return typeof config[fieldName].optional !== "undefined" && config[fieldName].optional;
      },
      fieldValueIsEmpty: function fieldValueIsEmpty(fieldValue) {
        return (0, _validator.isEmpty)((0, _validator.trim)(fieldValue));
      },
      firstErrorMessage: function firstErrorMessage(fieldName) {
        if (!this.hasErrors(fieldName)) return "";
        return this.errorBag[fieldName][0].message;
      },
      fieldIsValid: function fieldIsValid(fieldName) {
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

  var validateRequired = function validateRequired(value) {
    return {
      valid: !(0, _validator.isEmpty)((0, _validator.trim)(value)),
      message: "This field is required."
    };
  };

  var validateEmail = function validateEmail(value) {
    return {
      valid: (0, _validator.isEmail)((0, _validator.trim)(value)),
      message: "Please enter a valid email address."
    };
  };

  var validateEmailStartPeriods = function validateEmailStartPeriods(value) {
    var testValid = true;
    var periodStartRegex = new RegExp("^([\\.])");
    if (periodStartRegex.test(value) === true) {
      testValid = false;
    }

    return {
      valid: testValid,
      message: "Email addresses cannot begin with a . (period) character"
    };
  };

  var validateEmailEndPeriods = function validateEmailEndPeriods(value) {
    var testValid = true;
    var PeriodAtRegEx = new RegExp("^(?!.*\\.@).*$");
    if (PeriodAtRegEx.test(value) === false) {
      testValid = false;
    }

    return {
      valid: testValid,
      message: "Email addresses may not use a . (period) character followed by an @ symbol"
    };
  };

  var validateEmailDoublePeriods = function validateEmailDoublePeriods(value) {
    var testValid = true;
    var DoubleDotRegex = new RegExp("(\\.\\.)");
    if (DoubleDotRegex.test(value) === true) {
      testValid = false;
    }

    return {
      valid: testValid,
      message: "Email addresses cannot use two .. (periods) in a row"
    };
  };

  var validateMin = function validateMin(min) {
    return function (value) {
      return {
        valid: (0, _validator.isLength)((0, _validator.trim)(value), { min: min }),
        message: "Field must be a minimum length of: " + min
      };
    };
  };

  var validateMax = function validateMax(max) {
    return function (value) {
      return {
        valid: (0, _validator.isLength)((0, _validator.trim)(value), { max: max }),
        message: "Field must be a maximum length of: " + max
      };
    };
  };

  var validateExactLength = function validateExactLength(length) {
    return function (value) {
      return {
        valid: (0, _validator.isLength)((0, _validator.trim)(value), { max: length, min: length }),
        message: "Field must be an exact length of: " + length
      };
    };
  };

  var validateNoSpaces = function validateNoSpaces(value) {
    return {
      valid: !value.includes(" "),
      message: "Field must not contain spaces"
    };
  };

  var validateHasLowerCase = function validateHasLowerCase(value) {
    var letterRegEx = /[a-z]/g;
    return {
      valid: letterRegEx.test(value),
      message: "Field must have at least one lowercase letter."
    };
  };

  var validateHasUpperCase = function validateHasUpperCase(value) {
    var letterRegEx = /[A-Z]/g;
    return {
      valid: letterRegEx.test(value),
      message: "Field must have at least one uppercase letter."
    };
  };

  var validateHasNumber = function validateHasNumber(value) {
    var numRegEx = /[\d]/g;
    return {
      valid: numRegEx.test(value),
      message: "Field must have at least one number."
    };
  };

  var validateIsInt = function validateIsInt(value) {
    return {
      valid: (0, _validator.isInt)(value),
      message: "Field must only contain numbers."
    };
  };

  var validatePassword = function validatePassword(value) {
    return {
      valid: validateMin(8)(value).valid && validateHasNumber(value).valid && validateHasLowerCase(value).valid && validateHasUpperCase(value).valid && validateNoSpaces(value).valid,
      message: "Minimum 8 characters with at least 1 number, 1 uppercase letter, 1 lowercase letter, and no spaces."
    };
  };

  var validateEmpty = function validateEmpty(value) {
    return {
      valid: (0, _validator.isEmpty)((0, _validator.trim)(value)),
      message: ""
    };
  };

  var validateZip = function validateZip(value) {
    var postalRegEx = new RegExp("^\\d{5}(-\\d{4})?$");
    return {
      valid: postalRegEx.test((0, _validator.trim)(value)),
      message: "Please enter a valid zip code. For example 90602 or 90602-1234."
    };
  };

  var validatePhone = function validatePhone(value) {
    var phoneRegEx = /^[0-9]{3}-?[0-9]{3}\s?-?[0-9]{4}$/g;
    return {
      valid: phoneRegEx.test((0, _validator.trim)(value)),
      message: "Please enter a valid 10 digit phone number. E.g. 123-456-7890."
    };
  };

  var validateExpirationDate = function validateExpirationDate(value) {
    var expRegEx = /^(0[1-9]|1[0-2])\/([0-9]{2})$/;

    var _ref = value.split ? value.split("/") : [],
        _ref2 = _slicedToArray(_ref, 2),
        paddedMonth = _ref2[0],
        twoDigitYear = _ref2[1];

    var month = paddedMonth.replace(/^0+/, "");
    var year = "20" + twoDigitYear;

    return {
      valid: expRegEx.test((0, _validator.trim)(value)) && validateIsFutureDate(month, year).valid,
      message: "Please enter a valid expiration date. E.g. 03/22"
    };
  };

  var validateIsFutureDate = function validateIsFutureDate(month, year) {
    var compareMonth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : new Date().getMonth();
    var compareYear = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : new Date().getFullYear();

    year = parseInt(year, 10);
    month = parseInt(month, 10);
    compareYear = parseInt(compareYear, 10);
    compareMonth = parseInt(compareMonth, 10) + 1; // adjust up one month due to zero-based months in JS

    return {
      valid: year > compareYear || month >= compareMonth && year === compareYear,
      message: "Please enter a valid expiration date."
    };
  };

  var validateIsNotPastYearsOut = function validateIsNotPastYearsOut(yearsOut) {
    return function () {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";

      var _ref3 = value.split ? value.split("/") : ["", ""],
          _ref4 = _slicedToArray(_ref3, 2),
          paddedMonth = _ref4[0],
          twoDigitYear = _ref4[1];

      var month = parseInt(paddedMonth.replace(/^0+/, ""));
      var year = parseInt("20" + twoDigitYear, 10);
      var compareYear = parseInt(new Date().getFullYear() + yearsOut, 10);
      var compareMonth = parseInt(new Date().getMonth(), 10) + 1; // adjust up one month due to zero-based months in JS

      return {
        valid: year <= compareYear || month <= compareMonth && year === compareYear,
        message: "Please enter a valid expiration date within " + yearsOut + " years."
      };
    };
  };

  var validateNotPast10Years = validateIsNotPastYearsOut(10);

  var validateCreditCardNum = function validateCreditCardNum(value) {
    return {
      valid: (0, _validator.isCreditCard)((0, _validator.trim)(value)),
      message: "Please enter a valid credit card number."
    };
  };

  var validateCreditCardType = function validateCreditCardType(value) {
    return {
      valid: (0, _creditCardHelpers.getCreditCardTypeValidity)((0, _validator.trim)(value)),
      message: "Please enter a valid credit card number."
    };
  };

  var validateCreditCardNumAndType = function validateCreditCardNumAndType(validateCreditCardNum, validateCreditCardType) {
    return function (value) {
      return {
        valid: validateCreditCardType(value).valid && validateCreditCardNum(value).valid,
        message: "Please enter a valid credit card number."
      };
    };
  };

  var validateCreditCard = validateCreditCardNumAndType(validateCreditCardNum, validateCreditCardType);

  exports.createValidationHelper = createValidationHelper;
  exports.validateRequired = validateRequired;
  exports.validateEmpty = validateEmpty;
  exports.validateEmail = validateEmail;
  exports.validateEmailStartPeriods = validateEmailStartPeriods;
  exports.validateEmailEndPeriods = validateEmailEndPeriods;
  exports.validateEmailDoublePeriods = validateEmailDoublePeriods;
  exports.validatePhone = validatePhone;
  exports.validateZip = validateZip;
  exports.validateMin = validateMin;
  exports.validateMax = validateMax;
  exports.validateExactLength = validateExactLength;
  exports.validateNoSpaces = validateNoSpaces;
  exports.validateHasLowerCase = validateHasLowerCase;
  exports.validateHasUpperCase = validateHasUpperCase;
  exports.validateHasNumber = validateHasNumber;
  exports.validateIsInt = validateIsInt;
  exports.validatePassword = validatePassword;
  exports.validateExpirationDate = validateExpirationDate;
  exports.validateIsFutureDate = validateIsFutureDate;
  exports.validateIsNotPastYearsOut = validateIsNotPastYearsOut;
  exports.validateNotPast10Years = validateNotPast10Years;
  exports.validateCreditCardNum = validateCreditCardNum;
  exports.validateCreditCardType = validateCreditCardType;
  exports.validateCreditCard = validateCreditCard;
});