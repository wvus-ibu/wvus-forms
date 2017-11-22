import React from "react";

import {
  WVUSForm,
  InputControl,
  SelectControl,
  CheckboxControl
} from "../../index";
import { validateRequired } from "../../index";
import {
  formMethodsUnTouched,
  formMethodsWithSuccess,
  formMethodsWithError,
  formMethodsOptional
} from "./props-mocks";
const propsUntouched = {
  formMethods: formMethodsUnTouched
};

const propsWithSuccess = {
  formMethods: formMethodsWithSuccess
};

const propsWithError = {
  formMethods: formMethodsWithError
};

const propsOptional = {
  formMethods: formMethodsOptional
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
  propsWithSuccess,
  propsOptional
};
