import React from "react";
import renderer from "react-test-renderer";
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import { mount } from "enzyme";
import sinon from "sinon";

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

/**
 * Interactive - Enzyme tests
 */

describe("InputControl", function() {
  const expectedFieldsState = {
    payment_method: {
      value: "payment_method_new_cc",
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

    const expected = expectedFieldsState.payment_method;
    const actual = wrapper.instance().getFieldState("payment_method");
    expect(expected).toEqual(actual);
  });

  it("should call setValueChange on Form HOC if radio button has changed", function() {
    sinon.spy(Form.prototype, "setValueChange");
    const wrapper = mount(<Form />);
    wrapper.find("input#payment_method_new_cc").simulate("change", {
      target: { name: "payment_method", id: "payment_method_existing_cc" }
    });
    expect(Form.prototype.setValueChange.calledOnce).toEqual(true);
  });

  it("should NOT call handleBlur on Form HOC if radio button is blurred", function() {
    sinon.spy(Form.prototype, "handleBlur");
    const wrapper = mount(<Form />);
    wrapper.find("input#payment_method_new_cc").simulate("blur");
    expect(Form.prototype.handleBlur.calledOnce).toEqual(false);
  });
});
