import React from "react";
import "swing-ui/dist/css/swing.css";
import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import WVForm from "../form-hoc.js";
import InputControl from "../controls/input-control";
import {
  validateRequired,
  validateEmail,
  validatePhone,
  validateZip,
  validateMin,
  validateMax
} from "../validation/validation-helpers.js";

const SimpleInputForm = props => {
  return (
    <form>
      <h2>Input Control - required field</h2>
      <hr />

      <h3>Type: Text with validateRequired:</h3>
      <InputControl
        fieldPlaceholder="Tim Stehlin"
        fieldName="fname"
        fieldTitle="First Name"
        fieldClasses="custom-class-field-input"
        formMethods={props.formMethods}
        validators={[validateRequired]}
      />

      <h3>Type: Email with validateRequired & validateEmail: </h3>
      <InputControl
        fieldPlaceholder="someone@worldvision.org"
        fieldName="email"
        fieldTitle="Email"
        fieldType="email"
        fieldClasses="custom-class-field-input"
        formMethods={props.formMethods}
        validators={[validateRequired, validateEmail]}
      />
    </form>
  );
};
const Form = WVForm(SimpleInputForm);

storiesOf("Form Validation", module).add("Input Field", () => <Form />);

// storiesOf("WVUS Form Controls", module).add("Plain Input Field", () => (
//   <InputControl
//     fieldPlaceholder="Tim Stehlin"
//     fieldName="recipient_fname"
//     fieldTitle="First Name"
//     fieldClasses="custom-class-field-input"
//     formMethods={props.formMethods}
//     validators={[validateRequired]}
//   />
// ));
