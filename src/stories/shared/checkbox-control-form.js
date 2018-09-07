import React from "react";

import { WVUSForm, CheckboxControl } from "../../index";
import { formMethodsChecked, formMethodsUnChecked } from "./props-mocks";

const propsChecked = {
  formMethods: formMethodsChecked
};

const propsUnchecked = {
  formMethods: formMethodsUnChecked
};

const propsDisabled = {
  formMethods: formMethodsChecked,
  attributes: {
    disabled: true
  }
};

const SimpleCheckboxForm = props => {
  return (
    <form>
      <CheckboxControl
        labelClasses="opt-in-label"
        inputClasses="opt-in-input"
        fieldName="optIn"
        fieldValue={true}
        fieldTitle="Yes, I would like to receive the email newsletter."
        fieldClasses="wvus-field-newletter-optin"
        formMethods={props.formMethods}
      />
    </form>
  );
};

const DisabledCheckboxForm = props => {
  return (
    <form>
      <fieldset disabled>
        <CheckboxControl
          fieldName="optIn"
          fieldValue={true}
          fieldTitle="Yes, I would like to receive the email newsletter."
          fieldClasses="wvus-field-newletter-optin"
          formMethods={props.formMethods}
        />
      </fieldset>
    </form>
  );
};

export {
  SimpleCheckboxForm,
  DisabledCheckboxForm,
  propsChecked,
  propsUnchecked,
  propsDisabled
};
