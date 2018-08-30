import React from "react";
import {
  WVUSForm,
  CheckboxControl,
  InputControl,
  validateRequired
} from "./index";
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
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

const SimpleInputFormTwoFields = props => {
  return (
    <form>
      <InputControl
        fieldValue="Tim"
        fieldName="fname"
        fieldTitle="First Name"
        fieldClasses="custom-class-field-input"
        formMethods={props.formMethods}
        validators={[validateRequired]}
      />
      <InputControl
        fieldValue="Stehlin"
        fieldName="lname"
        fieldTitle="Last Name"
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

  it("should have required methods", () => {
    const Form = WVUSForm(SimpleInputForm);
    const wrapper = mount(<Form />);
    const formNode = wrapper.instance();

    expect(typeof formNode.addFieldToState).toBe("function");
    expect(typeof formNode.getFieldState).toBe("function");
    expect(typeof formNode.getFormState).toBe("function");
    expect(typeof formNode.resetField).toBe("function");
    expect(typeof formNode.validateField).toBe("function");
    expect(typeof formNode.validateFields).toBe("function");
    expect(typeof formNode.validateForm).toBe("function");
    expect(typeof formNode.updateFieldsState).toBe("function");
    expect(typeof formNode.getFormValid).toBe("function");
    expect(typeof formNode.isFormEmpty).toBe("function");
    expect(typeof formNode.isFormValid).toBe("function");
    expect(typeof formNode.handleValueChange).toBe("function");
    expect(typeof formNode.setValueChange).toBe("function");
    expect(typeof formNode.showUISuccess).toBe("function");
    expect(typeof formNode.showUIError).toBe("function");
  });

  it("getFormState should be able to return form state", () => {
    const Form = WVUSForm(SimpleInputForm);
    const wrapper = mount(<Form />);
    const formNode = wrapper.instance();
    const formState = formNode.getFormState();
    expect(typeof formState).toBe("object");
    expect(formState).toEqual(
      expect.objectContaining({
        fields: expect.objectContaining({
          fname: expect.any(Object)
        }),
        formValid: expect.any(Boolean)
      })
    );
  });

  it("getFieldState should be able to return a field's state", () => {
    const Form = WVUSForm(SimpleInputForm);
    const wrapper = mount(<Form />);
    const formNode = wrapper.instance();
    const formState = formNode.getFieldState("fname");
    expect(typeof formState).toBe("object");
    expect(formState).toEqual(
      expect.objectContaining({
        value: expect.any(String),
        isValid: expect.any(Boolean),
        secondInteraction: expect.any(Boolean),
        errorMessage: expect.any(String),
        validators: expect.any(Array),
        optional: expect.any(Boolean)
      })
    );
  });

  it("resetField should be able to reset a field", () => {
    const Form = WVUSForm(SimpleInputFormTwoFields);
    const wrapper = mount(<Form />);
    const formNode = wrapper.instance();
    const formStateFirst = formNode.getFieldState("fname");
    const formStateLast = formNode.getFieldState("lname");
    // Should not throw an error, and simply return
    formNode.resetField("fakefieldname");

    // Reset First Name
    formNode.resetField("fname");
    const formStateResetFName = formNode.getFieldState("fname");
    const formStateLName = formNode.getFieldState("lname");
    expect(typeof formStateResetFName).toBe("object");
    expect(typeof formStateLName).toBe("object");
    expect(formStateResetFName).toEqual(
      expect.objectContaining({
        value: "",
        isValid: false,
        secondInteraction: false,
        errorMessage: expect.any(String),
        validators: expect.any(Array),
        optional: expect.any(Boolean)
      })
    );
    expect(formStateLName).toEqual(
      expect.objectContaining({
        value: "Stehlin",
        isValid: false,
        secondInteraction: false,
        errorMessage: expect.any(String),
        validators: expect.any(Array),
        optional: expect.any(Boolean)
      })
    );
    // Reset Last Name
    formNode.resetField("lname");
    const formStateResetLName = formNode.getFieldState("lname");
    expect(formStateResetLName).toEqual(
      expect.objectContaining({
        value: "",
        isValid: false,
        secondInteraction: false,
        errorMessage: expect.any(String),
        validators: expect.any(Array),
        optional: expect.any(Boolean)
      })
    );
    expect(formNode.getFormState().formValid).toBe(false);
  });

  it("should be able to set and validate a field", () => {
    const Form = WVUSForm(SimpleInputForm);
    const wrapper = mount(<Form />);
    const formNode = wrapper.instance();
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
    const formNode = wrapper.instance();
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
    const formNode = wrapper.instance();
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
    const formNode = wrapper.instance();

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
    const formNode = wrapper.instance();
    formNode.handleValueChange({
      target: { type: "checkbox", name: "optIn", checked: false }
    });
    expect(formNode.getFieldState("optIn").value).toBe(false);
  });
});
