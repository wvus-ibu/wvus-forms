(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./form-hoc.js", "./controls/checkbox-control.js", "./controls/input-control", "./controls/input-hidden-control", "./controls/message.js", "./controls/radio-control.js", "./controls/select-control.js", "./controls/textarea-control.js", "./misc/us-states", "./validation/credit-card-helpers", "./validation/validation-helpers"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./form-hoc.js"), require("./controls/checkbox-control.js"), require("./controls/input-control"), require("./controls/input-hidden-control"), require("./controls/message.js"), require("./controls/radio-control.js"), require("./controls/select-control.js"), require("./controls/textarea-control.js"), require("./misc/us-states"), require("./validation/credit-card-helpers"), require("./validation/validation-helpers"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.formHoc, global.checkboxControl, global.inputControl, global.inputHiddenControl, global.message, global.radioControl, global.selectControl, global.textareaControl, global.usStates, global.creditCardHelpers, global.validationHelpers);
    global.index = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _formHoc, _checkboxControl, _inputControl, _inputHiddenControl, _message, _radioControl, _selectControl, _textareaControl, _usStates, _creditCardHelpers, _validationHelpers) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "CheckboxControl", {
    enumerable: true,
    get: function () {
      return _checkboxControl.default;
    }
  });
  Object.defineProperty(_exports, "InputControl", {
    enumerable: true,
    get: function () {
      return _inputControl.default;
    }
  });
  Object.defineProperty(_exports, "InputHiddenControl", {
    enumerable: true,
    get: function () {
      return _inputHiddenControl.default;
    }
  });
  Object.defineProperty(_exports, "Message", {
    enumerable: true,
    get: function () {
      return _message.default;
    }
  });
  Object.defineProperty(_exports, "RadioControl", {
    enumerable: true,
    get: function () {
      return _radioControl.default;
    }
  });
  Object.defineProperty(_exports, "SelectControl", {
    enumerable: true,
    get: function () {
      return _selectControl.default;
    }
  });
  Object.defineProperty(_exports, "TextAreaControl", {
    enumerable: true,
    get: function () {
      return _textareaControl.default;
    }
  });
  Object.defineProperty(_exports, "USStateFieldOptions", {
    enumerable: true,
    get: function () {
      return _usStates.default;
    }
  });
  Object.defineProperty(_exports, "WVUSForm", {
    enumerable: true,
    get: function () {
      return _formHoc.default;
    }
  });
  Object.defineProperty(_exports, "createValidationHelper", {
    enumerable: true,
    get: function () {
      return _validationHelpers.createValidationHelper;
    }
  });
  _exports.default = void 0;
  Object.defineProperty(_exports, "expAutoComplete", {
    enumerable: true,
    get: function () {
      return _creditCardHelpers.expAutoComplete;
    }
  });
  Object.defineProperty(_exports, "getCreditCardType", {
    enumerable: true,
    get: function () {
      return _creditCardHelpers.getCreditCardType;
    }
  });
  Object.defineProperty(_exports, "getCreditCardTypeValidity", {
    enumerable: true,
    get: function () {
      return _creditCardHelpers.getCreditCardTypeValidity;
    }
  });
  Object.defineProperty(_exports, "tokenXEncrypt", {
    enumerable: true,
    get: function () {
      return _creditCardHelpers.tokenXEncrypt;
    }
  });
  Object.defineProperty(_exports, "validateAlphaNumeric", {
    enumerable: true,
    get: function () {
      return _validationHelpers.validateAlphaNumeric;
    }
  });
  Object.defineProperty(_exports, "validateContainChars", {
    enumerable: true,
    get: function () {
      return _validationHelpers.validateContainChars;
    }
  });
  Object.defineProperty(_exports, "validateCreditCard", {
    enumerable: true,
    get: function () {
      return _validationHelpers.validateCreditCard;
    }
  });
  Object.defineProperty(_exports, "validateCreditCardNum", {
    enumerable: true,
    get: function () {
      return _validationHelpers.validateCreditCardNum;
    }
  });
  Object.defineProperty(_exports, "validateCreditCardType", {
    enumerable: true,
    get: function () {
      return _validationHelpers.validateCreditCardType;
    }
  });
  Object.defineProperty(_exports, "validateEmail", {
    enumerable: true,
    get: function () {
      return _validationHelpers.validateEmail;
    }
  });
  Object.defineProperty(_exports, "validateEmailDoublePeriods", {
    enumerable: true,
    get: function () {
      return _validationHelpers.validateEmailDoublePeriods;
    }
  });
  Object.defineProperty(_exports, "validateEmailEndPeriods", {
    enumerable: true,
    get: function () {
      return _validationHelpers.validateEmailEndPeriods;
    }
  });
  Object.defineProperty(_exports, "validateEmailStartPeriods", {
    enumerable: true,
    get: function () {
      return _validationHelpers.validateEmailStartPeriods;
    }
  });
  Object.defineProperty(_exports, "validateEmpty", {
    enumerable: true,
    get: function () {
      return _validationHelpers.validateEmpty;
    }
  });
  Object.defineProperty(_exports, "validateExactLength", {
    enumerable: true,
    get: function () {
      return _validationHelpers.validateExactLength;
    }
  });
  Object.defineProperty(_exports, "validateExpirationDate", {
    enumerable: true,
    get: function () {
      return _validationHelpers.validateExpirationDate;
    }
  });
  Object.defineProperty(_exports, "validateHasLowerCase", {
    enumerable: true,
    get: function () {
      return _validationHelpers.validateHasLowerCase;
    }
  });
  Object.defineProperty(_exports, "validateHasNumber", {
    enumerable: true,
    get: function () {
      return _validationHelpers.validateHasNumber;
    }
  });
  Object.defineProperty(_exports, "validateHasUpperCase", {
    enumerable: true,
    get: function () {
      return _validationHelpers.validateHasUpperCase;
    }
  });
  Object.defineProperty(_exports, "validateIsInt", {
    enumerable: true,
    get: function () {
      return _validationHelpers.validateIsInt;
    }
  });
  Object.defineProperty(_exports, "validateMax", {
    enumerable: true,
    get: function () {
      return _validationHelpers.validateMax;
    }
  });
  Object.defineProperty(_exports, "validateMin", {
    enumerable: true,
    get: function () {
      return _validationHelpers.validateMin;
    }
  });
  Object.defineProperty(_exports, "validateNoSpaces", {
    enumerable: true,
    get: function () {
      return _validationHelpers.validateNoSpaces;
    }
  });
  Object.defineProperty(_exports, "validateNotPast10Years", {
    enumerable: true,
    get: function () {
      return _validationHelpers.validateNotPast10Years;
    }
  });
  Object.defineProperty(_exports, "validatePassword", {
    enumerable: true,
    get: function () {
      return _validationHelpers.validatePassword;
    }
  });
  Object.defineProperty(_exports, "validatePhone", {
    enumerable: true,
    get: function () {
      return _validationHelpers.validatePhone;
    }
  });
  Object.defineProperty(_exports, "validateRequired", {
    enumerable: true,
    get: function () {
      return _validationHelpers.validateRequired;
    }
  });
  Object.defineProperty(_exports, "validateZip", {
    enumerable: true,
    get: function () {
      return _validationHelpers.validateZip;
    }
  });
  _formHoc = _interopRequireDefault(_formHoc);
  _checkboxControl = _interopRequireDefault(_checkboxControl);
  _inputControl = _interopRequireDefault(_inputControl);
  _inputHiddenControl = _interopRequireDefault(_inputHiddenControl);
  _message = _interopRequireDefault(_message);
  _radioControl = _interopRequireDefault(_radioControl);
  _selectControl = _interopRequireDefault(_selectControl);
  _textareaControl = _interopRequireDefault(_textareaControl);
  _usStates = _interopRequireDefault(_usStates);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var _default = {
    WVUSForm: _formHoc.default,
    CheckboxControl: _checkboxControl.default,
    InputControl: _inputControl.default,
    InputHiddenControl: _inputHiddenControl.default,
    Message: _message.default,
    RadioControl: _radioControl.default,
    SelectControl: _selectControl.default,
    TextAreaControl: _textareaControl.default,
    getCreditCardType: _creditCardHelpers.getCreditCardType,
    getCreditCardTypeValidity: _creditCardHelpers.getCreditCardTypeValidity,
    tokenXEncrypt: _creditCardHelpers.tokenXEncrypt,
    expAutoComplete: _creditCardHelpers.expAutoComplete,
    createValidationHelper: _validationHelpers.createValidationHelper,
    USStateFieldOptions: _usStates.default,
    validateRequired: _validationHelpers.validateRequired,
    validateAlphaNumeric: _validationHelpers.validateAlphaNumeric,
    validateEmpty: _validationHelpers.validateEmpty,
    validateEmail: _validationHelpers.validateEmail,
    validateEmailStartPeriods: _validationHelpers.validateEmailStartPeriods,
    validateEmailEndPeriods: _validationHelpers.validateEmailEndPeriods,
    validateEmailDoublePeriods: _validationHelpers.validateEmailDoublePeriods,
    validateContainChars: _validationHelpers.validateContainChars,
    validatePhone: _validationHelpers.validatePhone,
    validateZip: _validationHelpers.validateZip,
    validateMin: _validationHelpers.validateMin,
    validateMax: _validationHelpers.validateMax,
    validateExactLength: _validationHelpers.validateExactLength,
    validateNoSpaces: _validationHelpers.validateNoSpaces,
    validateHasLowerCase: _validationHelpers.validateHasLowerCase,
    validateHasUpperCase: _validationHelpers.validateHasUpperCase,
    validateHasNumber: _validationHelpers.validateHasNumber,
    validatePassword: _validationHelpers.validatePassword,
    validateExpirationDate: _validationHelpers.validateExpirationDate,
    validateNotPast10Years: _validationHelpers.validateNotPast10Years,
    validateCreditCardNum: _validationHelpers.validateCreditCardNum,
    validateCreditCardType: _validationHelpers.validateCreditCardType,
    validateCreditCard: _validationHelpers.validateCreditCard
  };
  _exports.default = _default;
});