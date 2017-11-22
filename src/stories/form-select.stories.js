import React from "react";
import "swing-ui/dist/css/swing.css";
import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import {
  SelectForm,
  SelectFormPreselected
} from "./shared/select-control-form";
import { WVUSForm } from "../index";

const Form = WVUSForm(SelectForm);
const FormPreselected = WVUSForm(SelectFormPreselected);

storiesOf("Form Components", module).add("Select Field States", () => (
  <div>
    <h1>Select Control</h1>
    <h2>Default (no selected value):</h2>
    <Form />

    <h2>Preselected:</h2>
    <FormPreselected />
  </div>
));
