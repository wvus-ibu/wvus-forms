import React from "react";

import { WVUSForm, InputHiddenControl } from "../../index";

const SimpleInputHiddenForm = props => {
  return (
    <form>
      <InputHiddenControl
        fieldName="campaign"
        fieldValue={1234567}
        fieldClasses="test-hidden-field"
        formMethods={props.formMethods}
      />
      <p>
        Hidden Field Value:{" "}
        {props.formMethods.getFieldState("campaign").value
          ? props.formMethods.getFieldState("campaign").value
          : ""}
      </p>
    </form>
  );
};

export { SimpleInputHiddenForm };
