import React from "react";

import { WVUSForm, InputHiddenControl } from "../../index";

const SimpleInputHiddenForm = props => {
  return (
    <form>
      <InputHiddenControl
        fieldPlaceholder="Tim Stehlin"
        fieldName="test-hidden-field"
        fieldTitle="First Name"
        fieldClasses="test-hidden-field"
        formMethods={props.formMethods}
      />
    </form>
  );
};

export { SimpleInputHiddenForm };
