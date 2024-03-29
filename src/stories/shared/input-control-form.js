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
const SimpleInputFormHiddenMessage = props => {
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
        hideMessage={true}
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

const SimpleInputNeo = props => {
  return (
    <form>
      <InputControl
        inputClasses="first-name-input"
        labelClasses="first-name-label"
        inputWrapperClasses="input-group input-group--neo"
        fieldPlaceholder="Tim Stehlin"
        fieldName="fname"
        fieldTitle="First Name"
        fieldClasses="custom-class-field-input form-group form-group--neo"
        formMethods={props.formMethods}
        attributes={props.attributes}
        hideMessage={true}
      />
    </form>
  );
};

const SimpleInputPrefixNeo = props => {
  return (
    <form>
      <InputControl
        inputClasses="first-name-input giving-form__form-control widget-price"
        labelClasses="first-name-label"
        inputWrapperClasses="input-group input-group--neo"
        fieldPlaceholder="55"
        fieldName="fname"
        fieldTitle="Price"
        fieldClasses="custom-class-field-input form-group form-group--neo"
        formMethods={props.formMethods}
        attributes={props.attributes}
        renderFieldPrefix={<span class="giving-form__currency">$</span>}
        hideMessage={true}
      />
    </form>
  );
};

const SimpleInputNoLabelNeo = props => {
  return (
    <form>
      <InputControl
        inputClasses="first-name-input giving-form__form-control widget-price"
        labelClasses="first-name-label"
        inputWrapperClasses="input-group input-group--neo"
        fieldPlaceholder="Enter a value"
        fieldName="fname"
        fieldTitle="Price"
        fieldClasses="custom-class-field-input"
        formMethods={props.formMethods}
        attributes={props.attributes}
        renderFieldPrefix={<span class="giving-form__currency">$</span>}
        hideLabel={true}
        hideMessage={true}
      />
    </form>
  );
};

export {
  SimpleInputForm,
  SimpleInputStates,
  SimpleInputFormHiddenMessage,
  SimpleInputFormRequired,
  SimpleInputFormAttr,
  SimpleInputFormClasses,
  SimpleInputNeo,
  SimpleInputPrefixNeo,
  SimpleInputNoLabelNeo,
  propsUntouched,
  propsWithError,
  propsWithSuccess,
  propsOptional,
  propsAttrReadonlyDisabled,
  propsAttrReadonlyNotDisabled,
  propsAttrDisabledNotReadonly
};
