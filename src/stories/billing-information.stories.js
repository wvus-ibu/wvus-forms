import React from "react";
// import "swing-ui/dist/css/swing.css";
import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import WVForm from "../form-hoc.js";
import { BillingInfoForm } from "./shared/billing-address-form";
const Form = WVForm(BillingInfoForm);

storiesOf("Example Forms", module).add("Billing Info", () => <Form />);
