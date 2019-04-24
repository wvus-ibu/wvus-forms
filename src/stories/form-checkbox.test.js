import React from "react";
import renderer from "react-test-renderer";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });
import { mount } from "enzyme";

import {
  propsChecked,
  propsUnchecked,
  propsDisabled,
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

test("Snapshot: Checkbox can be disabled", () => {
  const tree = renderer
    .create(<SimpleCheckboxForm {...propsDisabled} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test("should be capable of having custom label and input classes", function() {
  const wrapper = mount(<SimpleCheckboxForm {...propsChecked} />);
  expect(wrapper.find("label").hasClass("opt-in-label")).toBe(true);
  expect(wrapper.find("input").hasClass("opt-in-input")).toBe(true);
});
