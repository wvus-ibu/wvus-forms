import React from "react";
import renderer from "react-test-renderer";

import { RadioForm } from "./shared/radio-control-form";
import { WVUSForm } from "../index";

const Form = WVUSForm(RadioForm);

/**
 * SNAPSHOTS
 */
test("Snapshot: Radio Form renders correctly", () => {
  const tree = renderer.create(<Form />).toJSON();
  expect(tree).toMatchSnapshot();
});
