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
  validateMax
} from "../validation/validation-helpers.js";

import InputControl from "../controls/input-control";
import CheckboxControl from "../controls/checkbox-control";

const NewsletterForm = props => {
  const submitDisabled = !props.formMethods.isFormValid();
  const handleFormSubmit = e => {
    e.preventDefault();
  };

  return (
    <form>
      <h2>Sign up for our newsletter</h2>
      <InputControl
        fieldName="email"
        fieldTitle="Email"
        fieldType="email"
        fieldClasses="wvus-field-newletter-email"
        formMethods={props.formMethods}
        validators={[validateRequired, validateEmail]}
      />
      <CheckboxControl
        fieldName="optIn"
        fieldValue={true}
        fieldTitle="Yes, I would like to receive the email newsletter."
        fieldClasses="wvus-field-newletter-optin"
        formMethods={props.formMethods}
      />
      <button
        type="submit"
        id="wv-login-form-submit"
        className="btn btn-medium btn-secondary"
        disabled={submitDisabled}
        onClick={handleFormSubmit}
      >
        Sign Me Up!
      </button>
    </form>
  );
};
const Form = WVForm(NewsletterForm);

storiesOf("Example Forms", module).add("Newsletter Signup Form", () => (
  <Form />
));
