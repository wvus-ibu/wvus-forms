import React from "react";
import renderer from "react-test-renderer";

import {
  SelectForm,
  SelectFormPreselected
} from "./shared/select-control-form";
import { WVUSForm } from "../index";

const Form = WVUSForm(SelectForm);
const FormPreselected = WVUSForm(SelectFormPreselected);

/**
 * SNAPSHOTS
 */

test("Snapshot:  Select control renders correctly with no selection", () => {
  const tree = renderer.create(<Form />).toJSON();
  expect(tree).toMatchSnapshot();
});

test("Snapshot: Select control renders correctly with preselection of WA", () => {
  const tree = renderer.create(<FormPreselected />).toJSON();
  expect(tree).toMatchSnapshot();
});
