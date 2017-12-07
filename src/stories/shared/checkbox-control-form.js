import React from "react";

import { WVUSForm, CheckboxControl } from "../../index";
import { formMethodsChecked, formMethodsUnChecked } from "./props-mocks";

const propsChecked = {
  formMethods: formMethodsChecked
};

const propsUnchecked = {
  formMethods: formMethodsUnChecked
};

const SimpleCheckboxForm = props => {
  return (
    <form>
      <CheckboxControl
        fieldName="optIn"
        fieldValue={true}
        fieldTitle="Yes, I would like to receive the email newsletter."
        fieldClasses="wvus-field-newletter-optin"
        formMethods={props.formMethods}
      />
    </form>
  );
};

export { SimpleCheckboxForm, propsChecked, propsUnchecked };
