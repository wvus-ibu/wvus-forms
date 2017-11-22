import React from "react";
import { action } from "@storybook/addon-actions";

import {
  WVUSForm,
  InputControl,
  SelectControl,
  CheckboxControl
} from "../../index";
import {
  validateRequired,
  validateEmail,
  validatePhone,
  validateZip,
  validateMin,
  validateMax
} from "../../index";

const formMethodsUnTouched = {
  addFieldToState: () => {},
  getFieldState: () => {
    return {
      value: "",
      secondInteraction: false,
      isValid: true,
      optional: false,
      errorMessage: "Error message displays here"
    };
  },
  handleBlur: action("handleblur"),
  handleValueChange: action("handleValueChange"),
  showUIError: () => false,
  showUISuccess: () => false
};
const propsUntouched = {
  formMethods: formMethodsUnTouched
};
const formMethodsWithSuccess = {
  addFieldToState: () => {},
  getFieldState: () => {
    return {
      value: "Scott Rees",
      secondInteraction: true,
      isValid: true,
      optional: false,
      errorMessage: "Error message displays here"
    };
  },
  handleBlur: action("handleblur"),
  handleValueChange: action("handleValueChange"),
  showUIError: () => false,
  showUISuccess: () => true
};

const propsWithSuccess = {
  formMethods: formMethodsWithSuccess
};

const formMethodsWithError = {
  addFieldToState: () => {},
  getFieldState: () => {
    return {
      value: "",
      secondInteraction: true,
      isValid: false,
      optional: false,
      errorMessage: "Error message displays here"
    };
  },
  handleBlur: action("handleblur"),
  handleValueChange: action("handleValueChange"),
  showUIError: () => true,
  showUISuccess: () => false
};
const propsWithError = {
  formMethods: formMethodsWithError
};

const SimpleInputForm = props => {
  return (
    <form>
      <InputControl
        fieldPlaceholder="Tim Stehlin"
        fieldName="fname"
        fieldTitle="First Name"
        fieldClasses="custom-class-field-input"
        formMethods={props.formMethods}
        validation={[validateRequired]}
      />
    </form>
  );
};

const SimpleInputStates = props => {
  return (
    <form>
      <InputControl
        fieldPlaceholder="Tim Stehlin"
        fieldName="fname"
        fieldTitle="First Name"
        fieldClasses="custom-class-field-input"
        formMethods={props.formMethods}
      />
    </form>
  );
};

export {
  SimpleInputForm,
  SimpleInputStates,
  propsUntouched,
  propsWithError,
  propsWithSuccess
};
