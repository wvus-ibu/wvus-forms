import React from "react";
import "swing-ui/dist/css/swing.css";
import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { RadioForm } from "./shared/radio-control-form";
import { WVUSForm } from "../index";

const Form = WVUSForm(RadioForm);

storiesOf("Form Components", module).add("Radio Field States", () => (
  <div>
    <h1>Radio Control</h1>
    <h2>Example: Payment options</h2>
    <Form />
  </div>
));
