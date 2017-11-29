import React from "react";

import { WVUSForm, SelectControl, validateRequired } from "../../index";
// import { formMethodsChecked, formMethodsUnChecked } from "./props-mocks";
import USStateFieldOptions from "../../misc/us-states";

const SelectForm = props => {
  return (
    <form>
      <SelectControl
        fieldName="state"
        fieldOptions={USStateFieldOptions}
        fieldTitle="State"
        fieldClasses="wvus-field-33"
        formMethods={props.formMethods}
        validators={[validateRequired]}
      />
    </form>
  );
};

const SelectFormPreselected = props => {
  return (
    <form>
      <SelectControl
        fieldName="state"
        fieldValue="WA"
        fieldOptions={USStateFieldOptions}
        fieldTitle="State"
        isValid={true}
        fieldClasses="wvus-field-33"
        formMethods={props.formMethods}
        validators={[validateRequired]}
      />
    </form>
  );
};

const SelectFormNoConfig = props => {
  return (
    <form>
      <SelectControl
        fieldName="state"
        fieldOptions={props.fieldOptions}
        fieldTitle="State"
        fieldClasses="wvus-field-33"
        formMethods={props.formMethods}
        validators={[validateRequired]}
      />
    </form>
  );
};

export { SelectForm, SelectFormPreselected, SelectFormNoConfig };
