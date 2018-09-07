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

const propsAttrReadonlyDisabled = {
  formMethods: formMethodsUnTouched,
  attributes: {
    readOnly: true,
    disabled: true
  }
};

const propsAttrReadonlyNotDisabled = {
  formMethods: formMethodsUnTouched,
  attributes: {
    readOnly: true,
    disabled: false
  }
};
const propsAttrDisabledNotReadonly = {
  formMethods: formMethodsUnTouched,
  attributes: {
    readOnly: false,
    disabled: true
  }
};

const SimpleInputForm = props => {
  return (
    <form>
      <InputControl
        inputClasses="first-name-input"
        labelClasses="first-name-label"
        fieldPlaceholder="Tim Stehlin"
        fieldName="fname"
        fieldTitle="First Name"
        fieldClasses="custom-class-field-input"
        formMethods={props.formMethods}
      />
    </form>
  );
};
const SimpleInputFormRequired = props => {
  return (
    <form>
      <InputControl
        fieldPlaceholder="Tim Stehlin"
        fieldName="fname"
        fieldTitle="First Name"
        fieldClasses="custom-class-field-input"
        formMethods={props.formMethods}
        validators={[validateRequired]}
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

const SimpleInputFormAttr = props => {
  return (
    <form>
      <InputControl
        fieldPlaceholder="Tim Stehlin"
        fieldName="fname"
        fieldTitle="First Name"
        fieldClasses="custom-class-field-input"
        formMethods={props.formMethods}
        attributes={props.attributes}
      />
    </form>
  );
};
const SimpleInputFormClasses = props => {
  return (
    <form>
      <InputControl
        inputClasses="first-name-input"
        labelClasses="first-name-label"
        fieldPlaceholder="Tim Stehlin"
        fieldName="fname"
        fieldTitle="First Name"
        fieldClasses="custom-class-field-input"
        formMethods={props.formMethods}
        attributes={props.attributes}
      />
    </form>
  );
};

export {
  SimpleInputForm,
  SimpleInputStates,
  SimpleInputFormRequired,
  SimpleInputFormAttr,
  SimpleInputFormClasses,
  propsUntouched,
  propsWithError,
  propsWithSuccess,
  propsOptional,
  propsAttrReadonlyDisabled,
  propsAttrReadonlyNotDisabled,
  propsAttrDisabledNotReadonly
};
