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

const Form = WVForm(SimpleInputForm);

storiesOf("Form Components", module).add("Input Field", () => (
  <div>
    <Form />
    <h2>STATES</h2>
    <h3>Input - untouched</h3>
    <SimpleInputStates {...propsUntouched} />
    <h3>Input - showing success state</h3>
    <p>
      isValid: true,<br />
      secondInteraction: false, //only factored into showing error state.<br />
      showUISuccess() => true,<br />
      showUIError() => false,
    </p>
    <SimpleInputStates {...propsWithSuccess} />
    <h3>Input - showing error state</h3>
    <p>
      secondInteraction: true, <br />
      isValid: false, <br />
      showUISuccess() => true, <br />
      showUIError() => false,
    </p>
    <SimpleInputStates {...propsWithError} />
  </div>
));

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
