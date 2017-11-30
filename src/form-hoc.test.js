import React from "react";
import {
  WVUSForm,
  CheckboxControl,
  InputControl,
  validateRequired
} from "./index";
import { mount } from "enzyme";

const SimpleInputForm = props => {
  return (
    <form>
      <InputControl
        fieldPlaceholder="Tim Stehlin"
        fieldName="fname"
        fieldTitle="First Name"
        fieldClasses="custom-class-field-input"
        formMethods={props.formMethods}
        validators={[validateRequired]}
      />
    </form>
  );
};

describe("WVUSForm", () => {
  it("should be able to wrap a custom form component", () => {
    const MyForm = props => {
      return <form>Hello Form</form>;
    };
    const Form = WVUSForm(MyForm);
    const wrapper = mount(<Form />);
    expect(wrapper.contains(<form>Hello Form</form>)).toBe(true);
  });

  it("should be able to set and validate a field", () => {
    const Form = WVUSForm(SimpleInputForm);
    const wrapper = mount(<Form />);
    const formNode = wrapper.getNode();
    const expected = {
      value: "",
      isValid: false,
      secondInteraction: false,
      errorMessage: "This field is required.",
      validators: [validateRequired],
      optional: false
    };
    // Set a field that does NOT pass validation
    formNode.handleValueChange({ target: { name: "fname", value: "" } });
    expect(formNode.getFieldState("fname")).toEqual(expected);
    expect(formNode.isFormValid()).toBe(false);
    expect(formNode.isFormEmpty()).toBe(true);
    expect(formNode.showUISuccess(formNode.getFieldState("fname"))).toBe(false);
    expect(formNode.showUIError(formNode.getFieldState("fname"))).toBe(false);

    // Set a field that does pass validation
    const expectedValid = {
      value: "Scott",
      isValid: true,
      secondInteraction: false,
      errorMessage: "",
      validators: [validateRequired],
      optional: false
    };
    formNode.handleValueChange({ target: { name: "fname", value: "Scott" } });
    expect(formNode.getFieldState("fname")).toEqual(expectedValid);
    expect(formNode.isFormValid()).toBe(true);
    expect(formNode.isFormEmpty()).toBe(false);
    expect(formNode.showUISuccess(formNode.getFieldState("fname"))).toBe(true);
    expect(formNode.showUIError(formNode.getFieldState("fname"))).toBe(false);
  });

  it("should handleBlur by setting secondInteraction to true, allowing UI Errors to be shown", () => {
    const Form = WVUSForm(SimpleInputForm);
    const wrapper = mount(<Form />);
    const formNode = wrapper.getNode();
    const expected = {
      value: "",
      isValid: false,
      secondInteraction: true,
      errorMessage: "This field is required.",
      validators: [validateRequired],
      optional: false
    };
    // Simulate field blur
    formNode.handleBlur({ target: { name: "fname", value: "" } });
    expect(formNode.getFieldState("fname")).toEqual(expected);
    expect(formNode.showUIError(formNode.getFieldState("fname"))).toBe(true);
    expect(formNode.showUISuccess(formNode.getFieldState("fname"))).toBe(false);
  });

  it("updateFieldsState should be able to successfully update field state", () => {
    const Form = WVUSForm(SimpleInputForm);
    const wrapper = mount(<Form />);
    const formNode = wrapper.getNode();
    const newFieldState = {
      fields: {
        fname: {
          value: "Scott",
          isValid: true,
          secondInteraction: true,
          errorMessage: "",
          validators: [validateRequired],
          optional: false
        },
        lname: {
          value: "Rees",
          isValid: true,
          secondInteraction: true,
          errorMessage: "",
          validators: [validateRequired],
          optional: false
        }
      }
    };

    //Should have one field
    const fieldsBefore = Object.entries(formNode.state.fields);
    expect(fieldsBefore.length).toBe(1);

    formNode.updateFieldsState(newFieldState);
    expect(formNode.getFieldState("fname")).toEqual(newFieldState.fields.fname);
    expect(formNode.getFieldState("lname")).toEqual(newFieldState.fields.lname);

    //Should have two fields
    const fieldsAfter = Object.entries(formNode.state.fields);
    expect(fieldsAfter.length).toBe(2);
  });

  it("should be able to validate a form", () => {
    const Form = WVUSForm(SimpleInputForm);
    const wrapper = mount(<Form />);
    const formNode = wrapper.getNode();

    expect(formNode.validateForm()).toBe(false);

    formNode.handleValueChange({ target: { name: "fname", value: "Scott" } });
    expect(formNode.validateForm()).toBe(true);
  });

  it("should be able to handle a checkbox", () => {
    const SimpleCheckboxForm = props => {
      return (
        <form>
          <CheckboxControl
            fieldName="optIn"
            fieldValue={true}
            fieldTitle="Yes, I would like to receive the email newsletter."
            fieldClasses="wvus-field-newletter-optin"
            formMethods={props.formMethods}
          />
        </form>
      );
    };
    const Form = WVUSForm(SimpleCheckboxForm);
    const wrapper = mount(<Form />);
    const formNode = wrapper.getNode();
    formNode.handleValueChange({
      target: { type: "checkbox", name: "optIn", checked: false }
    });
    expect(formNode.getFieldState("optIn").value).toBe(false);
  });
});
