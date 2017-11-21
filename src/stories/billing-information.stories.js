import React from "react";
import "swing-ui/dist/css/swing.css";
import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import WVForm from "../form-hoc.js";
import {
  validateRequired,
  validateEmail,
  validatePhone,
  validateZip,
  validateMin,
  validateMax,
  validateEmpty
} from "../validation/validation-helpers.js";
import USStateFieldOptions from "../misc/us-states";

import { Button, Welcome } from "@storybook/react/demo";
import InputControl from "../controls/input-control";
import SelectControl from "../controls/select-control";
import CheckboxControl from "../controls/checkbox-control";

const NewsletterForm = props => {
  const submitDisabled = !props.formMethods.isFormValid();
  const handleFormSubmit = e => {
    e.preventDefault();
  };

  return (
    <form>
      <h2>Billing Info Form</h2>
      <InputControl
        fieldName="fname"
        fieldTitle="First Name"
        fieldClasses="wvus-field-50"
        formMethods={props.formMethods}
        validators={[validateRequired]}
      />

      <InputControl
        fieldName="lname"
        fieldTitle="Last Name"
        fieldClasses="wvus-field-50 wvus-field--end"
        formMethods={props.formMethods}
        validators={[validateRequired]}
      />

      <InputControl
        fieldName="address1"
        fieldTitle="Mailing Address Line 1"
        formMethods={props.formMethods}
        validators={[validateRequired]}
      />

      <InputControl
        fieldName="address2"
        fieldTitle="Mailing Address Line 2"
        optional={true}
        isValid={true}
        secondInteraction={false}
        formMethods={props.formMethods}
        validators={[]}
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
      <InputControl
        fieldName="email"
        fieldTitle="Email"
        fieldType="email"
        fieldClasses="wvus-field-newletter"
        formMethods={props.formMethods}
        validators={[validateRequired, validateEmail]}
      />

      <InputControl
        fieldName="phone"
        fieldTitle="Phone"
        fieldType="tel"
        fieldClasses="wvus-field-newletter"
        formMethods={props.formMethods}
        validators={[validateRequired, validatePhone]}
      />

      <button
        type="submit"
        id="wv-login-form-submit"
        className="btn btn-medium btn-secondary"
        disabled={submitDisabled}
        onClick={handleFormSubmit}
      >
        Sign In
      </button>
    </form>
  );
};
const Form = WVForm(NewsletterForm);

storiesOf("Example Forms", module).add("Billing Info", () => <Form />);
