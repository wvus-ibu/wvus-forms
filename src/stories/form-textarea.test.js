import React, { Component } from "react";
import renderer from "react-test-renderer";

import {
  TextAreaForm,
  TextAreaFormTooMuchText
} from "./shared/textarea-control-form";
import { WVUSForm } from "../index";

const Form = WVUSForm(TextAreaForm);
const FormTooMuchText = WVUSForm(TextAreaFormTooMuchText);

/**
 * SNAPSHOTS
 */

test("Snapshot:  Textarea control renders correctly with no selection", () => {
  const tree = renderer.create(<Form />).toJSON();
  expect(tree).toMatchSnapshot();
});

test("Snapshot:  Textarea control renders correctly with too much text", () => {
  const tree = renderer.create(<FormTooMuchText />).toJSON();
  expect(tree).toMatchSnapshot();
});
