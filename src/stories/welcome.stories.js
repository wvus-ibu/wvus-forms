import React from "react";
import "swing-ui/dist/css/swing.css";
import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

storiesOf("Welcome", module).add("to Validessa Form Validation", () => (
  <div>Validessa - Form Validation for WVUS sites</div>
));
