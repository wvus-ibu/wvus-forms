import React from "react";
import renderer from "react-test-renderer";
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import { mount } from "enzyme";
import sinon from "sinon";

import { RadioForm } from "./shared/radio-control-form";
import { WVUSForm, RadioControl } from "../index";

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

  it("should call handleFocus if input is focus", function() {
    const handleFocus =  sinon.spy();
 
    const RadioForm = props => {
      return (
        <form>
        <RadioControl
          fieldId="payment_method_new_cc"
          fieldName="payment_method"
          fieldTitle={"New Credit Card"}
          labelClasses="payment-method-new-cc-label"
          inputClasses="payment-method-new-cc-input"
          handleFocus={handleFocus}
          formMethods={props.formMethods}
          fieldCheckedDefault={true}
        />
        <RadioControl
          fieldId="payment_method_existing_cc"
          fieldName="payment_method"
          fieldTitle={"Existing Credit Card"}
          handleFocus={handleFocus}
          formMethods={props.formMethods}
        />
        <RadioControl
          fieldId="payment_method_paypal"
          fieldName="payment_method"
          fieldTitle={"Paypal"}
          handleFocus={handleFocus}
          formMethods={props.formMethods}
        />
      </form>
      );
    };

    const Form = WVUSForm(RadioForm);
    
    const wrapper = mount(<Form />);
    wrapper.find("input#payment_method_new_cc").simulate("focus");
 
    expect(handleFocus.calledOnce).toEqual(true);
  });


  it("should be capable of having custom label and input classes", function() {
    const wrapper = mount(<Form />);
    expect(wrapper.find(".wvus-field-payment_method_new_cc label").hasClass("payment-method-new-cc-label")).toBe(true);
    expect(wrapper.find(".wvus-field-payment_method_new_cc input").hasClass("payment-method-new-cc-input")).toBe(true);
  });
});
