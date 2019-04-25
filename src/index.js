import WVUSForm from "./form-hoc.js";
import CheckboxControl from "./controls/checkbox-control.js";
import InputControl from "./controls/input-control";
import InputHiddenControl from "./controls/input-hidden-control";
import Message from "./controls/message.js";
import RadioControl from "./controls/radio-control.js";
import SelectControl from "./controls/select-control.js";
import TextAreaControl from "./controls/textarea-control.js";
import USStateFieldOptions from "./misc/us-states";
import {
  getCreditCardType,
  getCreditCardTypeValidity,
  tokenXEncrypt,
  expAutoComplete
} from "./validation/credit-card-helpers";

import {
  createValidationHelper,
  validateRequired,
  validateEmpty,
  validateEmail,
  validateEmailStartPeriods,
  validateEmailEndPeriods,
  validateEmailDoublePeriods,
  validateContainChars,
  validatePhone,
  validateZip,
  validateMin,
  validateMax,
  validateExactLength,
  validateNoSpaces,
  validateHasLowerCase,
  validateHasUpperCase,
  validateHasNumber,
  validateIsInt,
  validatePassword,
  validateExpirationDate,
  validateNotPast10Years,
  validateCreditCardNum,
  validateCreditCardType,
  validateCreditCard
} from "./validation/validation-helpers";

export {
  WVUSForm,
  CheckboxControl,
  InputControl,
  InputHiddenControl,
  Message,
  RadioControl,
  SelectControl,
  TextAreaControl,
  getCreditCardType,
  getCreditCardTypeValidity,
  tokenXEncrypt,
  expAutoComplete,
  createValidationHelper,
  USStateFieldOptions,
  validateRequired,
  validateEmpty,
  validateEmail,
  validateEmailStartPeriods,
  validateEmailEndPeriods,
  validateEmailDoublePeriods,
  validateContainChars,
  validatePhone,
  validateZip,
  validateMin,
  validateMax,
  validateExactLength,
  validateNoSpaces,
  validateHasLowerCase,
  validateHasUpperCase,
  validateHasNumber,
  validateIsInt,
  validatePassword,
  validateExpirationDate,
  validateNotPast10Years,
  validateCreditCardNum,
  validateCreditCardType,
  validateCreditCard
};

export default {
  WVUSForm,
  CheckboxControl,
  InputControl,
  InputHiddenControl,
  Message,
  RadioControl,
  SelectControl,
  TextAreaControl,
  getCreditCardType,
  getCreditCardTypeValidity,
  tokenXEncrypt,
  expAutoComplete,
  createValidationHelper,
  USStateFieldOptions,
  validateRequired,
  validateEmpty,
  validateEmail,
  validateEmailStartPeriods,
  validateEmailEndPeriods,
  validateEmailDoublePeriods,
  validateContainChars,
  validatePhone,
  validateZip,
  validateMin,
  validateMax,
  validateExactLength,
  validateNoSpaces,
  validateHasLowerCase,
  validateHasUpperCase,
  validateHasNumber,
  validatePassword,
  validateExpirationDate,
  validateNotPast10Years,
  validateCreditCardNum,
  validateCreditCardType,
  validateCreditCard
};
