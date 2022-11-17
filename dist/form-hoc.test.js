(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "./index", "enzyme", "enzyme-adapter-react-16"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("./index"), require("enzyme"), require("enzyme-adapter-react-16"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.index, global.enzyme, global.enzymeAdapterReact16);
    global.formHocTest = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_react, _index, _enzyme, _enzymeAdapterReact) {
  "use strict";

  _react = _interopRequireDefault(_react);
  _enzymeAdapterReact = _interopRequireDefault(_enzymeAdapterReact);
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  (0, _enzyme.configure)({
    adapter: new _enzymeAdapterReact.default()
  });
  const SimpleInputForm = props => {
    return /*#__PURE__*/_react.default.createElement("form", null, /*#__PURE__*/_react.default.createElement(_index.InputControl, {
      fieldPlaceholder: "Tim Stehlin",
      fieldName: "fname",
      fieldTitle: "First Name",
      fieldClasses: "custom-class-field-input",
      formMethods: props.formMethods,
      validators: [_index.validateRequired]
    }));
  };
  const SimpleInputFormTwoFields = props => {
    return /*#__PURE__*/_react.default.createElement("form", null, /*#__PURE__*/_react.default.createElement(_index.InputControl, {
      fieldValue: "Tim",
      fieldName: "fname",
      fieldTitle: "First Name",
      fieldClasses: "custom-class-field-input",
      formMethods: props.formMethods,
      validators: [_index.validateRequired]
    }), /*#__PURE__*/_react.default.createElement(_index.InputControl, {
      fieldValue: "Stehlin",
      fieldName: "lname",
      fieldTitle: "Last Name",
      fieldClasses: "custom-class-field-input",
      formMethods: props.formMethods,
      validators: [_index.validateRequired]
    }));
  };
  describe("WVUSForm", () => {
    it("should be able to wrap a custom form component", () => {
      const MyForm = props => {
        return /*#__PURE__*/_react.default.createElement("form", null, "Hello Form");
      };
      const Form = (0, _index.WVUSForm)(MyForm);
      const wrapper = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(Form, null));
      expect(wrapper.contains( /*#__PURE__*/_react.default.createElement("form", null, "Hello Form"))).toBe(true);
    });
    it("should have required methods", () => {
      const Form = (0, _index.WVUSForm)(SimpleInputForm);
      const wrapper = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(Form, null));
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
      const Form = (0, _index.WVUSForm)(SimpleInputForm);
      const wrapper = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(Form, null));
      const formNode = wrapper.instance();
      const formState = formNode.getFormState();
      expect(typeof formState).toBe("object");
      expect(formState).toEqual(expect.objectContaining({
        fields: expect.objectContaining({
          fname: expect.any(Object)
        }),
        formValid: expect.any(Boolean)
      }));
    });
    it("getFieldState should be able to return a field's state", () => {
      const Form = (0, _index.WVUSForm)(SimpleInputForm);
      const wrapper = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(Form, null));
      const formNode = wrapper.instance();
      const formState = formNode.getFieldState("fname");
      expect(typeof formState).toBe("object");
      expect(formState).toEqual(expect.objectContaining({
        value: expect.any(String),
        isValid: expect.any(Boolean),
        secondInteraction: expect.any(Boolean),
        errorMessage: expect.any(String),
        validators: expect.any(Array),
        optional: expect.any(Boolean)
      }));
    });
    it("resetField should be able to reset a field", () => {
      const Form = (0, _index.WVUSForm)(SimpleInputFormTwoFields);
      const wrapper = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(Form, null));
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
      expect(formStateResetFName).toEqual(expect.objectContaining({
        value: "",
        isValid: false,
        secondInteraction: false,
        errorMessage: expect.any(String),
        validators: expect.any(Array),
        optional: expect.any(Boolean)
      }));
      expect(formStateLName).toEqual(expect.objectContaining({
        value: "Stehlin",
        isValid: false,
        secondInteraction: false,
        errorMessage: expect.any(String),
        validators: expect.any(Array),
        optional: expect.any(Boolean)
      }));
      // Reset Last Name
      formNode.resetField("lname");
      const formStateResetLName = formNode.getFieldState("lname");
      expect(formStateResetLName).toEqual(expect.objectContaining({
        value: "",
        isValid: false,
        secondInteraction: false,
        errorMessage: expect.any(String),
        validators: expect.any(Array),
        optional: expect.any(Boolean)
      }));
      expect(formNode.getFormState().formValid).toBe(false);
    });
    it("should be able to set and validate a field", () => {
      const Form = (0, _index.WVUSForm)(SimpleInputForm);
      const wrapper = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(Form, null));
      const formNode = wrapper.instance();
      const expected = {
        value: "",
        isValid: false,
        secondInteraction: false,
        errorMessage: "This field is required.",
        validators: [_index.validateRequired],
        optional: false
      };
      // Set a field that does NOT pass validation
      formNode.handleValueChange({
        target: {
          name: "fname",
          value: ""
        }
      });
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
        validators: [_index.validateRequired],
        optional: false
      };
      formNode.handleValueChange({
        target: {
          name: "fname",
          value: "Scott"
        }
      });
      expect(formNode.getFieldState("fname")).toEqual(expectedValid);
      expect(formNode.isFormValid()).toBe(true);
      expect(formNode.isFormEmpty()).toBe(false);
      expect(formNode.showUISuccess(formNode.getFieldState("fname"))).toBe(true);
      expect(formNode.showUIError(formNode.getFieldState("fname"))).toBe(false);
    });
    it("should handleBlur by setting secondInteraction to true, allowing UI Errors to be shown", () => {
      const Form = (0, _index.WVUSForm)(SimpleInputForm);
      const wrapper = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(Form, null));
      const formNode = wrapper.instance();
      const expected = {
        value: "",
        isValid: false,
        secondInteraction: true,
        errorMessage: "This field is required.",
        validators: [_index.validateRequired],
        optional: false
      };
      // Simulate field blur
      formNode.handleBlur({
        target: {
          name: "fname",
          value: ""
        }
      });
      expect(formNode.getFieldState("fname")).toEqual(expected);
      expect(formNode.showUIError(formNode.getFieldState("fname"))).toBe(true);
      expect(formNode.showUISuccess(formNode.getFieldState("fname"))).toBe(false);
    });
    it("updateFieldsState should be able to successfully update field state", () => {
      const Form = (0, _index.WVUSForm)(SimpleInputForm);
      const wrapper = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(Form, null));
      const formNode = wrapper.instance();
      const newFieldState = {
        fields: {
          fname: {
            value: "Scott",
            isValid: true,
            secondInteraction: true,
            errorMessage: "",
            validators: [_index.validateRequired],
            optional: false
          },
          lname: {
            value: "Rees",
            isValid: true,
            secondInteraction: true,
            errorMessage: "",
            validators: [_index.validateRequired],
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
      const Form = (0, _index.WVUSForm)(SimpleInputForm);
      const wrapper = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(Form, null));
      const formNode = wrapper.instance();
      expect(formNode.validateForm()).toBe(false);
      formNode.handleValueChange({
        target: {
          name: "fname",
          value: "Scott"
        }
      });
      expect(formNode.validateForm()).toBe(true);
    });
    it("should be able to handle a checkbox", () => {
      const SimpleCheckboxForm = props => {
        return /*#__PURE__*/_react.default.createElement("form", null, /*#__PURE__*/_react.default.createElement(_index.CheckboxControl, {
          fieldName: "optIn",
          fieldValue: true,
          fieldTitle: "Yes, I would like to receive the email newsletter.",
          fieldClasses: "wvus-field-newletter-optin",
          formMethods: props.formMethods
        }));
      };
      const Form = (0, _index.WVUSForm)(SimpleCheckboxForm);
      const wrapper = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(Form, null));
      const formNode = wrapper.instance();
      formNode.handleValueChange({
        target: {
          type: "checkbox",
          name: "optIn",
          checked: false
        }
      });
      expect(formNode.getFieldState("optIn").value).toBe(false);
    });
  });
});