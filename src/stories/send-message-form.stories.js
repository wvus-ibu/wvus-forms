import React from "react";
import "swing-ui/dist/css/swing.css";
import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import {
  WVUSForm,
  InputControl,
  CheckboxControl,
  TextAreaControl,
  validateRequired,
  validateEmail,
  validatePhone,
  validateMax
} from "../index";

const MessageForm = props => {
  const { isFormValid, getFieldState } = props.formMethods;
  const submitDisabled = !isFormValid();
  const handleFormSubmit = e => {
    e.preventDefault();
  };
  const MAX_MESSAGE_CHAR = 255;
  // @TODO:

  const messageFieldLength =
    getFieldState("message").value && !!getFieldState("message").value.length
      ? getFieldState("message").value.length
      : 0;
  const messageCharacterCount =
    parseInt(MAX_MESSAGE_CHAR, 10) - parseInt(messageFieldLength, 10);

  return (
    <form>
      <h2>Send a message!</h2>
      <InputControl
        fieldName="recipient_email"
        fieldTitle="Recipient Email"
        fieldType="email"
        fieldClasses="wvus-field-newletter-email"
        formMethods={props.formMethods}
        validators={[validateRequired, validateEmail]}
      />
      <TextAreaControl
        fieldName="message"
        fieldRows={6}
        fieldPlaceholder="Type your message here"
        fieldTitle="Message"
        fieldClasses="wvus-field-newletter-message"
        formMethods={props.formMethods}
        validators={[validateRequired, validateMax(MAX_MESSAGE_CHAR)]}
        characterCount={messageCharacterCount}
      />
      <CheckboxControl
        fieldName="optIn"
        fieldValue={true}
        fieldTitle="Yes, please send me a confirmation message."
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
const Form = WVUSForm(MessageForm);

storiesOf("Example Forms", module).add("Send Email Form", () => <Form />);
