import React from "react";

import { WVUSForm, RadioControl } from "../../index";

const RadioForm = props => {
  return (
    <form>
      <RadioControl
        fieldId="payment_method_new_cc"
        fieldName="payment_method"
        fieldTitle={"New Credit Card"}
        formMethods={props.formMethods}
        fieldCheckedDefault={true}
      />
      <RadioControl
        fieldId="payment_method_existing_cc"
        fieldName="payment_method"
        fieldTitle={"Existing Credit Card"}
        formMethods={props.formMethods}
      />
      <RadioControl
        fieldId="payment_method_paypal"
        fieldName="payment_method"
        fieldTitle={"Paypal"}
        formMethods={props.formMethods}
      />
    </form>
  );
};

export { RadioForm };
