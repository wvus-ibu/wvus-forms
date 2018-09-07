import React from "react";

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
import USStateFieldOptions from "../../misc/us-states";

const SimpleAddressForm = props => {
  return (
    <form>
      <h2>Simple Address Form</h2>
      <InputControl
        labelClasses="first-name-label"
        inputClasses="first-name-input"
        fieldName="fname"
        fieldTitle="First Name"
        fieldClasses="wvus-field-50"
        formMethods={props.formMethods}
        validators={[validateRequired]}
      />

      <InputControl
        fieldName="lname"
        fieldTitle="Last Name"
        fieldClasses="wvus-field- wvus-field--end"
        formMethods={props.formMethods}
        validators={[validateRequired]}
      />

      <InputControl
        fieldName="address1"
        fieldTitle="Mailing Address"
        formMethods={props.formMethods}
        validators={[validateRequired]}
      />

      <InputControl
        fieldName="city"
        fieldTitle="City"
        fieldClasses="wvus-field-33"
        formMethods={props.formMethods}
        validators={[validateRequired]}
      />

      <SelectControl
        fieldName="state"
        fieldOptions={USStateFieldOptions}
        fieldTitle="State"
        fieldClasses="wvus-field-33"
        formMethods={props.formMethods}
        validators={[validateRequired, validateMin(2)]}
      />
      <InputControl
        fieldName="zip"
        fieldTitle="Zip"
        fieldClasses="wvus-field-33 wvus-field--end"
        formMethods={props.formMethods}
        validators={[validateRequired, validateZip]}
      />
    </form>
  );
};
export { SimpleAddressForm };
