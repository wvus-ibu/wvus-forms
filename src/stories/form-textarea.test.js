import React, { Component } from "react";
import renderer from "react-test-renderer";
import { shallow, mount, render } from "enzyme";
import sinon from "sinon";

import {
  TextAreaForm,
  TextAreaFormTooMuchText,
  TextAreaFormNoConfig
} from "./shared/textarea-control-form";
import {
  formMethodsUnTouched,
  formMethodsWithSuccess,
  formMethodsWithError,
  formMethodsOptional
} from "./shared/props-mocks";
import { WVUSForm, Message, validateRequired, validateMax } from "../index";

const Form = WVUSForm(TextAreaForm);
const FormNoConfig = WVUSForm(TextAreaFormNoConfig);
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

/**
 * Interactive - Enzyme tests
 */
describe("SelectControl", function() {
  const expectedFieldsState = {
    message: {
      value: "",
      isValid: false,
      secondInteraction: false,
      errorMessage: "",
      validators: [],
      optional: false
    }
  };

  it("should save initial field state", () => {
    const wrapper = mount(<FormNoConfig />);
    const actual = wrapper.state("fields");
    expect(actual).toEqual(expectedFieldsState);
  });

  it("getFieldState should return fieldState", () => {
    const wrapper = mount(<FormNoConfig />);
    const expected = expectedFieldsState.message;
    const actual = wrapper.getNode().getFieldState("message");
    expect(actual).toEqual(expected);
  });

  it("should call handleValueChange if field has changed", function() {
    sinon.spy(FormNoConfig.prototype, "handleValueChange");
    const wrapper = mount(<FormNoConfig />);
    wrapper.find("textarea").simulate("change", {
      target: { name: "message", value: "Some new message" }
    });
    expect(FormNoConfig.prototype.handleValueChange.calledOnce).toEqual(true);
  });

  it("should call handleBlur if field is blurred", function() {
    sinon.spy(FormNoConfig.prototype, "handleBlur");
    const wrapper = mount(<FormNoConfig />);
    wrapper.find("textarea").simulate("blur");
    expect(FormNoConfig.prototype.handleBlur.calledOnce).toEqual(true);
  });

  it("should show required star if required field", function() {
    const props = { formMethods: formMethodsUnTouched };
    const wrapper = mount(<TextAreaFormNoConfig {...props} />);
    expect(wrapper.contains(<sup>*</sup>)).toBe(true);
  });

  it("should NOT show required star if optional field", function() {
    const props = { formMethods: formMethodsOptional };
    const wrapper = mount(<TextAreaFormNoConfig {...props} />);
    expect(wrapper.contains(<sup>*</sup>)).toBe(false);
  });

  it("should have correct classes if optional field", function() {
    const props = {
      formMethods: formMethodsOptional
    };
    const wrapper = mount(<TextAreaFormNoConfig {...props} />);
    expect(wrapper.find(".has-error")).toHaveLength(0);
    expect(wrapper.find(".has-success")).toHaveLength(0);
  });

  it("should have correct classes if has success", function() {
    const props = {
      formMethods: formMethodsWithSuccess
    };
    const wrapper = mount(<TextAreaFormNoConfig {...props} />);
    expect(wrapper.find(".has-success")).toHaveLength(1);
    expect(wrapper.find(".has-error")).toHaveLength(0);
  });

  it("should have correct classes if has error", function() {
    const props = {
      formMethods: formMethodsWithError
    };
    const wrapper = mount(<TextAreaFormNoConfig {...props} />);
    expect(wrapper.find(".has-error")).toHaveLength(1);
    expect(wrapper.find(".has-success")).toHaveLength(0);
  });

  it("should show error Message if has error", function() {
    const props = {
      formMethods: formMethodsWithError
    };
    const wrapper = mount(<TextAreaFormNoConfig {...props} />);
    const errorMessage = props.formMethods.getFieldState().errorMessage;
    expect(
      wrapper.contains(
        <Message
          visible={true}
          showError={true}
          showSuccess={false}
          message={errorMessage}
        />
      )
    ).toBe(true);
  });

  it("should show success Message if has success", function() {
    const props = {
      formMethods: formMethodsWithSuccess
    };
    const wrapper = mount(<TextAreaFormNoConfig {...props} />);
    expect(
      wrapper.contains(
        <Message visible={true} showError={false} showSuccess={true} />
      )
    ).toBe(true);
  });
});
