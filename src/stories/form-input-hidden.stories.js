import React from "react";
import "swing-ui/dist/css/swing.css";
import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { SimpleInputHiddenForm } from "./shared/input-hidden-control-form";
import { WVUSForm } from "../index";

const Form = WVUSForm(SimpleInputHiddenForm);

storiesOf("Form Components", module).add("Hidden Field", () => (
  <div>
    <h1>Hidden Field Control</h1>
    <Form />
  </div>
));
