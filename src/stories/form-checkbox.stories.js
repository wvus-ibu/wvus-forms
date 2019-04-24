import React from "react";
import "swing-ui/dist/css/swing.css";
import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import {
  propsChecked,
  propsUnchecked,
  propsDisabled,
  SimpleCheckboxForm,
  DisabledCheckboxForm
} from "./shared/checkbox-control-form";
import { WVUSForm } from "../index";

const Form = WVUSForm(SimpleCheckboxForm);

storiesOf("Form Components", module).add("Checkbox Field States", () => (
  <div>
    <h1>Checkbox Control</h1>
    <h2>Interactive Form:</h2>
    <Form />

    <hr />
    <h2 className="text-center">STATES</h2>
    <hr />

    <h2>Checkbox - checked</h2>
    <SimpleCheckboxForm {...propsChecked} />
    <p>
      FieldState:
      <br />
      {window.JSON.stringify(propsChecked.formMethods.getFieldState())}
    </p>

    <h2>Checkbox - unchecked</h2>
    <SimpleCheckboxForm {...propsUnchecked} />
    <p>
      FieldState:
      <br />
      {window.JSON.stringify(propsUnchecked.formMethods.getFieldState())}
    </p>

    <h2>Checkbox - disabled</h2>
    <DisabledCheckboxForm {...propsDisabled} />
    <p>
      Note: Disabled styling not included in form library. Wrap form in fieldset
      disabled to get Bootstrap disabled styling as shown here.
    </p>
  </div>
));
