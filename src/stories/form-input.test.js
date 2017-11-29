import React from "react";
import renderer from "react-test-renderer";
import { shallow, mount, render } from "enzyme";
import sinon from "sinon";

import { WVUSForm, Message } from "../index";
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

test("Snapshot: Input renders with optional/valid state", () => {
  const tree = renderer
    .create(<SimpleInputStates {...propsOptional} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

/**
 * Interactive - Enzyme tests
 */

describe("InputControl", function() {
  const expectedFieldsState = {
    fname: {
      value: "",
      isValid: false,
      secondInteraction: false,
      errorMessage: "",
      validators: [],
      optional: false
    }
  };

  it("should save initial field state", () => {
    const wrapper = mount(<Form />);
    const actual = wrapper.state("fields");
    expect(actual).toEqual(expectedFieldsState);
  });

  it(" getFieldState should return fieldState", () => {
    const wrapper = mount(<Form />);

    const expected = expectedFieldsState.fname;
    const actual = wrapper.getNode().getFieldState("fname");
    expect(expected).toEqual(actual);
  });

  it("should call handleValueChange if input has changed", function() {
    sinon.spy(Form.prototype, "handleValueChange");
    const wrapper = mount(<Form />);
    wrapper
      .find("input")
      .simulate("change", { target: { name: "fname", value: "Scott Rees" } });
    expect(Form.prototype.handleValueChange.calledOnce).toEqual(true);
  });

  it("should call handleBlur if input is blurred", function() {
    sinon.spy(Form.prototype, "handleBlur");
    const wrapper = mount(<Form />);
    wrapper.find("input").simulate("blur");
    expect(Form.prototype.handleBlur.calledOnce).toEqual(true);
  });

  it("should show required star if required field", function() {
    const wrapper = mount(<SimpleInputForm {...propsUntouched} />);
    expect(wrapper.contains(<sup>*</sup>)).toBe(true);
  });

  it("should NOT show required star if optional field", function() {
    const wrapper = mount(<SimpleInputForm {...propsOptional} />);
    expect(wrapper.contains(<sup>*</sup>)).toBe(false);
  });

  it("should have correct classes if optional field", function() {
    const wrapper = mount(<SimpleInputForm {...propsOptional} />);
    expect(wrapper.find(".has-error")).toHaveLength(0);
    expect(wrapper.find(".has-success")).toHaveLength(0);
  });

  it("should have correct classes if has success", function() {
    const wrapper = mount(<SimpleInputForm {...propsWithSuccess} />);
    expect(wrapper.find(".has-success")).toHaveLength(1);
    expect(wrapper.find(".has-error")).toHaveLength(0);
  });

  it("should have correct classes if has error", function() {
    const wrapper = mount(<SimpleInputForm {...propsWithError} />);
    expect(wrapper.find(".has-error")).toHaveLength(1);
    expect(wrapper.find(".has-success")).toHaveLength(0);
  });

  it("should show error Message if has error", function() {
    const wrapper = mount(<SimpleInputForm {...propsWithError} />);
    const errorMessage = propsWithError.formMethods.getFieldState()
      .errorMessage;
    expect(
      wrapper.contains(
        <Message showError={true} showSuccess={false} message={errorMessage} />
      )
    ).toBe(true);
    // expect(wrapper.find(".has-success")).toHaveLength(0);
  });

  it("should show success Message if has success", function() {
    const wrapper = mount(<SimpleInputForm {...propsWithSuccess} />);
    expect(
      wrapper.contains(<Message showError={false} showSuccess={true} />)
    ).toBe(true);
  });
});
