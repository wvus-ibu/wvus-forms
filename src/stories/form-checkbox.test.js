import React from "react";
import renderer from "react-test-renderer";

import {
  propsChecked,
  propsUnchecked,
  SimpleCheckboxForm
} from "./shared/checkbox-control-form";
import { WVUSForm } from "../index";

const Form = WVUSForm(SimpleCheckboxForm);

/**
 * SNAPSHOTS
 */

test("Snapshot: Checkbox Form renders correctly", () => {
  const tree = renderer.create(<Form />).toJSON();
  expect(tree).toMatchSnapshot();
});

test("Snapshot: Checkbox renders checked state", () => {
  const tree = renderer
    .create(<SimpleCheckboxForm {...propsChecked} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test("Snapshot: Checkbox renders unchecked state", () => {
  const tree = renderer
    .create(<SimpleCheckboxForm {...propsUnchecked} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
