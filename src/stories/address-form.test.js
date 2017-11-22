import React from "react";
import renderer from "react-test-renderer";

import { SimpleAddressForm } from "./shared/simple-address-form";
import { WVUSForm } from "../index";
const Form = WVUSForm(SimpleAddressForm);

test("Simple Address Form renders correctly", () => {
  const tree = renderer.create(<Form />).toJSON();
  expect(tree).toMatchSnapshot();
});
