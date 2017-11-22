import React from "react";
import renderer from "react-test-renderer";

import { WVUSForm } from "../index";
import {
  SimpleInputForm,
  SimpleInputStates,
  propsUntouched,
  propsWithError,
  propsWithSuccess,
  propsOptional
} from "./shared/input-control-form";

const Form = WVUSForm(SimpleInputForm);

/**
 * SNAPSHOTS
 */

test("Snapshot: Input Form renders correctly", () => {
  const tree = renderer.create(<Form />).toJSON();
  expect(tree).toMatchSnapshot();
});

test("Snapshot: Input renders untouched state", () => {
  const tree = renderer
    .create(<SimpleInputStates {...propsUntouched} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test("Snapshot: Input renders success state", () => {
  const tree = renderer
    .create(<SimpleInputStates {...propsWithSuccess} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test("Snapshot: Input renders error state", () => {
  const tree = renderer
    .create(<SimpleInputStates {...propsWithError} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test("Snapshot: Input renders with optional/valid ustate", () => {
  const tree = renderer
    .create(<SimpleInputStates {...propsOptional} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
