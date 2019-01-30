import React from "react";
import renderer from "react-test-renderer";
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import { mount } from "enzyme";
import sinon from "sinon";

import {
  SelectForm,
  SelectFormPreselected,
  SelectFormNoConfig
} from "./shared/select-control-form";
import {
  formMethodsUnTouched,
  formMethodsWithSuccess,
  formMethodsWithError,
  formMethodsOptional
} from "./shared/props-mocks";
import { WVUSForm, Message, validateRequired, SelectControl } from "../index";

const Form = WVUSForm(SelectForm);
const FormPreselected = WVUSForm(SelectFormPreselected);

/**
 * SNAPSHOTS
 */

test("Snapshot:  Select control renders correctly with no selection", () => {
  const tree = renderer.create(<Form />).toJSON();
  expect(tree).toMatchSnapshot();
});

test("Snapshot: Select control renders correctly with preselection of WA", () => {
  const tree = renderer.create(<FormPreselected />).toJSON();
  expect(tree).toMatchSnapshot();
});

/**
 * Interactive - Enzyme tests
 */
describe("SelectControl", function() {
  const expectedFieldsState = {
    state: {
      value: "",
      isValid: false,
      secondInteraction: false,
      errorMessage: "",
      validators: [validateRequired],
      optional: false
    }
  };
  const sharedFieldOptions = [
    {
      valueKey: "",
      valueText: "▾ Select a state"
    },
    {
      valueKey: "AL",
      valueText: "Alabama"
    },
    {
      valueKey: "AK",
      valueText: "Alaska"
    }
  ];

  it("should save initial field state", () => {
    const wrapper = mount(<Form />);
    const actual = wrapper.state("fields");
    expect(actual).toEqual(expectedFieldsState);
  });

  it("should take preselected fieldValue", function() {
    const wrapper = mount(<FormPreselected />);
    const selectedOption = wrapper.instance().getFieldState("state").value;
    expect(selectedOption).toBe("WA");
  });

  it("getFieldState should return fieldState", () => {
    const wrapper = mount(<Form />);
    const expected = expectedFieldsState.state;
    const actual = wrapper.instance().getFieldState("state");
    expect(actual).toEqual(expected);
  });

  it("should call handleValueChange if field has changed", function() {
    sinon.spy(Form.prototype, "handleValueChange");
    const wrapper = mount(<Form />);
    wrapper
      .find("select")
      .simulate("change", { target: { name: "state", value: "OR" } });
    expect(Form.prototype.handleValueChange.calledOnce).toEqual(true);
  });

  it("should call handleBlur if field is blurred", function() {
    sinon.spy(Form.prototype, "handleBlur");
    const wrapper = mount(<Form />);
    wrapper.find("select").simulate("blur");
    expect(Form.prototype.handleBlur.calledOnce).toEqual(true);
  });

  it("should call handleFocus if input is focus", function() {
    const handleFocus =  sinon.spy();

    const USStateFieldOptions = [
      {
        valueKey: "AL",
        valueText: "Alabama"
      },
      {
        valueKey: "AK",
        valueText: "Alaska"
      }];
 
    const SelectForm = props => {
      return (
        <form>
          <SelectControl
            fieldName="state"
            fieldOptions={USStateFieldOptions}
            fieldTitle="State"
            fieldClasses="wvus-field-33"
            formMethods={props.formMethods}
            handleFocus={handleFocus}
            validators={[validateRequired]}
          />
        </form>
      );
    };

    const Form = WVUSForm(SelectForm);
    
    const wrapper = mount(<Form />);
   // console.log(wrapper);
    wrapper.find("select").simulate("focus");
 
    expect(handleFocus.calledOnce).toEqual(true);
  });

  it("should show required star if required field", function() {
    const props = { formMethods: formMethodsUnTouched };
    const wrapper = mount(<SelectForm {...props} />);
    expect(wrapper.contains(<sup>*</sup>)).toBe(true);
  });

  it("should NOT show required star if optional field", function() {
    const props = { formMethods: formMethodsOptional };
    const wrapper = mount(<SelectForm {...props} />);
    expect(wrapper.contains(<sup>*</sup>)).toBe(false);
  });

  it("should render all field options passed via prop", function() {
    const props = {
      formMethods: formMethodsUnTouched,
      fieldOptions: sharedFieldOptions
    };
    const wrapper = mount(<SelectFormNoConfig {...props} />);
    expect(wrapper.find("option")).toHaveLength(sharedFieldOptions.length);
  });

  it("should have correct classes if optional field", function() {
    const props = {
      formMethods: formMethodsOptional,
      fieldOptions: sharedFieldOptions
    };
    const wrapper = mount(<SelectFormNoConfig {...props} />);
    expect(wrapper.find(".has-error")).toHaveLength(0);
    expect(wrapper.find(".has-success")).toHaveLength(0);
  });

  it("should have correct classes if has success", function() {
    const props = {
      formMethods: formMethodsWithSuccess,
      fieldOptions: sharedFieldOptions
    };
    const wrapper = mount(<SelectFormNoConfig {...props} />);
    expect(wrapper.find(".has-success")).toHaveLength(1);
    expect(wrapper.find(".has-error")).toHaveLength(0);
  });

  it("should have correct classes if has error", function() {
    const props = {
      formMethods: formMethodsWithError,
      fieldOptions: sharedFieldOptions
    };
    const wrapper = mount(<SelectFormNoConfig {...props} />);
    expect(wrapper.find(".has-error")).toHaveLength(1);
    expect(wrapper.find(".has-success")).toHaveLength(0);
  });

  it("should show error Message if has error", function() {
    const props = {
      formMethods: formMethodsWithError,
      fieldOptions: sharedFieldOptions
    };
    const wrapper = mount(<SelectFormNoConfig {...props} />);
    const errorMessage = props.formMethods.getFieldState().errorMessage;
    expect(
      wrapper.contains(
        <Message showError={true} showSuccess={false} message={errorMessage} />
      )
    ).toBe(true);
  });

  it("should show success Message if has success", function() {
    const props = {
      formMethods: formMethodsWithSuccess,
      fieldOptions: sharedFieldOptions
    };
    const wrapper = mount(<SelectFormNoConfig {...props} />);
    expect(
      wrapper.contains(<Message showError={false} showSuccess={true} />)
    ).toBe(true);
  });

  it("should be capable of having custom label and input classes", function() {
    const wrapper = mount(<Form />);
    expect(wrapper.find(".wvus-field-state label").hasClass("state-label")).toBe(true);
    expect(wrapper.find(".wvus-field-state select").hasClass("state-input")).toBe(true);
  });
});
