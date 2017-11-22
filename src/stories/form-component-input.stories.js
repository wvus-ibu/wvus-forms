import React from "react";
import "swing-ui/dist/css/swing.css";
import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { WVUSForm } from "../index";

import {
  propsUntouched,
  propsWithSuccess,
  propsWithError,
  SimpleInputStates,
  SimpleInputForm
} from "./shared/input-control-form";

const Form = WVUSForm(SimpleInputForm);

storiesOf("Form Components", module).add("Input Field", () => (
  <div>
    <h1>Input Control</h1>
    <Form />
    <h2>STATES</h2>
    <h3>Input - untouched</h3>
    <SimpleInputForm {...propsUntouched} />
    <h3>Input - showing success state</h3>
    <p>
      isValid: true,<br />
      secondInteraction: false, //only factored into showing error state.<br />
      showUISuccess() => true,<br />
      showUIError() => false,
    </p>
    <SimpleInputForm {...propsWithSuccess} />
    <h3>Input - showing error state</h3>
    <p>
      secondInteraction: true, <br />
      isValid: false, <br />
      showUISuccess() => true, <br />
      showUIError() => false,
    </p>
    <SimpleInputForm {...propsWithError} />
  </div>
));
