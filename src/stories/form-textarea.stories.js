import React from "react";
import "swing-ui/dist/css/swing.css";
import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import {
  TextAreaForm,
  TextAreaFormTooMuchText
} from "./shared/textarea-control-form";
import { WVUSForm } from "../index";

const Form = WVUSForm(TextAreaForm);
const FormTooMuchText = WVUSForm(TextAreaFormTooMuchText);

storiesOf("Form Components", module).add("Textarea Field States", () => (
  <div>
    <h1>Textarea Control</h1>
    <h2>Default (no message content):</h2>
    <Form />

    <h2>Error: too much text</h2>
    <FormTooMuchText />
  </div>
));
