import React from "react";
import renderer from "react-test-renderer";
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import { mount } from "enzyme";
import sinon from "sinon";

import { WVUSForm, Message } from "../index";
import {
  SimpleInputForm,
  SimpleInputFormHiddenMessage,
  SimpleInputStates,
  SimpleInputFormAttr,
  SimpleInputFormClasses,
  propsUntouched,
  propsWithError,
  propsWithSuccess,
  propsOptional,
  propsAttrReadonlyDisabled,
  propsAttrDisabledNotReadonly,
  propsAttrReadonlyNotDisabled
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

test("Snapshot: Input renders with readonly/disabled attributes", () => {
  const tree = renderer
    .create(<SimpleInputFormAttr {...propsAttrReadonlyDisabled} />)
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
    const actual = wrapper.instance().getFieldState("fname");
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

  it("should NOT show error Message if hiddenMessage enabled", function() {
    const wrapper = mount(<SimpleInputFormHiddenMessage {...propsWithError} />);
    const errorMessage = propsWithError.formMethods.getFieldState()
      .errorMessage;
    expect(
      wrapper.contains(
        <Message showError={true} showSuccess={false} message={errorMessage} />
      )
    ).toBe(false);
    // expect(wrapper.find(".has-success")).toHaveLength(0);
  });

  it("should show success Message if has success", function() {
    const wrapper = mount(<SimpleInputForm {...propsWithSuccess} />);
    expect(
      wrapper.contains(<Message showError={false} showSuccess={true} />)
    ).toBe(true);
  });

  it("should NOT show success Message if hiddenMessage enabled", function() {
    const wrapper = mount(<SimpleInputFormHiddenMessage {...propsWithSuccess} />);
    expect(
      wrapper.contains(<Message showError={false} showSuccess={true} />)
    ).toBe(false);
    // expect(wrapper.find(".has-success")).toHaveLength(0);
  });

  it("should be capable of being disabled and readonly", function() {
    const wrapper = mount(
      <SimpleInputFormAttr {...propsAttrReadonlyDisabled} />
    );
    expect(wrapper.find("input").prop("disabled")).toBe(true);
    expect(wrapper.find("input").prop("readOnly")).toBe(true);
  });

  it("should be capable of being readonly but not disabled", function() {
    const wrapper = mount(
      <SimpleInputFormAttr {...propsAttrReadonlyNotDisabled} />
    );
    expect(wrapper.find("input").prop("disabled")).toBe(false);
    expect(wrapper.find("input").prop("readOnly")).toBe(true);
  });
  it("should be capable of being disabled but not readonly", function() {
    const wrapper = mount(
      <SimpleInputFormAttr {...propsAttrDisabledNotReadonly} />
    );

    expect(wrapper.find("input").prop("disabled")).toBe(true);
    expect(wrapper.find("input").prop("readOnly")).toBe(false);
  });

  it("should be capable of having custom label and input classes", function() {
    const wrapper = mount(<SimpleInputFormClasses {...propsUntouched} />);
    wrapper.find("input").debug();
    expect(wrapper.find("label").hasClass("first-name-label")).toBe(true);
    expect(wrapper.find("input").hasClass("first-name-input")).toBe(true);
  });
});
