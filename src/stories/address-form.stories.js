import React from "react";
import { storiesOf } from "@storybook/react";
import { SimpleAddressForm } from "./shared/simple-address-form";
import { WVUSForm } from "../index";

const Form = WVUSForm(SimpleAddressForm);

storiesOf("Example Forms", module).add("Simple Address Form", () => <Form />);
