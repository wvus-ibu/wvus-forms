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
  propsOptional,
  SimpleInputStates,
  SimpleInputForm,
  SimpleInputNeo,
  SimpleInputPrefixNeo,
  SimpleInputNoLabelNeo,
  SimpleInputFormHiddenMessage
} from "./shared/input-control-form";

const Form = WVUSForm(SimpleInputForm);

storiesOf("Form Components", module).add("Input Field States", () => (
  <div>
    <h1>Input Control</h1>
    <Form />
    <hr />
    <h2 className="text-center">STATES</h2>
    <hr />

    <div>
      <h3>Input - untouched</h3>
      <SimpleInputForm {...propsUntouched} />
      <p>
        FieldState:
        <br />
        {window.JSON.stringify(propsUntouched.formMethods.getFieldState())}
      </p>
      <hr />
    </div>

    <div>
      <h3>Input - showing success state</h3>
      <SimpleInputForm {...propsWithSuccess} />
      <p>
        FieldState:
        <br />
        {window.JSON.stringify(propsWithSuccess.formMethods.getFieldState())}
      </p>
      <hr />
    </div>

    <div>
      <h3>Input - showing error state</h3>
      <SimpleInputForm {...propsWithError} />
      <p>
        FieldState:
        <br />
        {window.JSON.stringify(propsWithError.formMethods.getFieldState())}
      </p>
    </div>

    <div>
      <h3>Input - showing optional field state</h3>
      <SimpleInputForm {...propsOptional} />
      <p>
        FieldState:
        <br />
        {window.JSON.stringify(propsOptional.formMethods.getFieldState())}
      </p>
    </div>

    <div>
      <h3>Input - hidden message, errored field</h3>
      <SimpleInputFormHiddenMessage {...propsWithError} />
    </div>

    <div>
      <h3>Input - Neo</h3>
      <SimpleInputNeo {...propsUntouched} />
    </div>

    <div>
      <h3>Input Success - Neo</h3>
      <SimpleInputNeo {...propsWithSuccess} />
    </div>

    <div>
      <h3>Input Error - Neo</h3>
      <SimpleInputNeo {...propsWithError} />
    </div>
    
    <div>
      <h3>Input - Neo - with prefix</h3>
      <SimpleInputPrefixNeo {...propsUntouched} />
    </div>
    
    <div>
      <h3>Input - Neo - no label</h3>
      <SimpleInputNoLabelNeo {...propsUntouched} />
    </div>
  </div>
));
