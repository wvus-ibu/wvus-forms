(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["core-js/modules/esnext.async-iterator.find.js", "core-js/modules/esnext.iterator.constructor.js", "core-js/modules/esnext.iterator.find.js", "react", "react-test-renderer", "enzyme", "enzyme-adapter-react-16", "sinon", "./shared/select-control-form", "./shared/props-mocks", "../index"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("core-js/modules/esnext.async-iterator.find.js"), require("core-js/modules/esnext.iterator.constructor.js"), require("core-js/modules/esnext.iterator.find.js"), require("react"), require("react-test-renderer"), require("enzyme"), require("enzyme-adapter-react-16"), require("sinon"), require("./shared/select-control-form"), require("./shared/props-mocks"), require("../index"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.esnextAsyncIteratorFind, global.esnextIteratorConstructor, global.esnextIteratorFind, global.react, global.reactTestRenderer, global.enzyme, global.enzymeAdapterReact16, global.sinon, global.selectControlForm, global.propsMocks, global.index);
    global.formSelectTest = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_esnextAsyncIteratorFind, _esnextIteratorConstructor, _esnextIteratorFind, _react, _reactTestRenderer, _enzyme, _enzymeAdapterReact, _sinon, _selectControlForm, _propsMocks, _index) {
  "use strict";

  _react = _interopRequireDefault(_react);
  _reactTestRenderer = _interopRequireDefault(_reactTestRenderer);
  _enzymeAdapterReact = _interopRequireDefault(_enzymeAdapterReact);
  _sinon = _interopRequireDefault(_sinon);
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  (0, _enzyme.configure)({
    adapter: new _enzymeAdapterReact.default()
  });
  const Form = (0, _index.WVUSForm)(_selectControlForm.SelectForm);
  const FormPreselected = (0, _index.WVUSForm)(_selectControlForm.SelectFormPreselected);

  /**
   * SNAPSHOTS
   */

  test("Snapshot:  Select control renders correctly with no selection", () => {
    const tree = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(Form, null)).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test("Snapshot: Select control renders correctly with preselection of WA", () => {
    const tree = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(FormPreselected, null)).toJSON();
    expect(tree).toMatchSnapshot();
  });

  /**
   * Interactive - Enzyme tests
   */
  describe("SelectControl", function () {
    const expectedFieldsState = {
      state: {
        value: "",
        isValid: false,
        secondInteraction: false,
        errorMessage: "",
        validators: [_index.validateRequired],
        optional: false
      }
    };
    const sharedFieldOptions = [{
      valueKey: "",
      valueText: "▾ Select a state"
    }, {
      valueKey: "AL",
      valueText: "Alabama"
    }, {
      valueKey: "AK",
      valueText: "Alaska"
    }];
    it("should save initial field state", () => {
      const wrapper = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(Form, null));
      const actual = wrapper.state("fields");
      expect(actual).toEqual(expectedFieldsState);
    });
    it("should take preselected fieldValue", function () {
      const wrapper = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(FormPreselected, null));
      const selectedOption = wrapper.instance().getFieldState("state").value;
      expect(selectedOption).toBe("WA");
    });
    it("getFieldState should return fieldState", () => {
      const wrapper = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(Form, null));
      const expected = expectedFieldsState.state;
      const actual = wrapper.instance().getFieldState("state");
      expect(actual).toEqual(expected);
    });
    it("should call handleValueChange if field has changed", function () {
      _sinon.default.spy(Form.prototype, "handleValueChange");
      const wrapper = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(Form, null));
      wrapper.find("select").simulate("change", {
        target: {
          name: "state",
          value: "OR"
        }
      });
      expect(Form.prototype.handleValueChange.calledOnce).toEqual(true);
    });
    it("should call handleBlur if field is blurred", function () {
      _sinon.default.spy(Form.prototype, "handleBlur");
      const wrapper = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(Form, null));
      wrapper.find("select").simulate("blur");
      expect(Form.prototype.handleBlur.calledOnce).toEqual(true);
    });
    it("should call handleFocus if input is focus", function () {
      const handleFocus = _sinon.default.spy();
      const USStateFieldOptions = [{
        valueKey: "AL",
        valueText: "Alabama"
      }, {
        valueKey: "AK",
        valueText: "Alaska"
      }];
      const SelectForm = props => {
        return /*#__PURE__*/_react.default.createElement("form", null, /*#__PURE__*/_react.default.createElement(_index.SelectControl, {
          fieldName: "state",
          fieldOptions: USStateFieldOptions,
          fieldTitle: "State",
          fieldClasses: "wvus-field-33",
          formMethods: props.formMethods,
          handleFocus: handleFocus,
          validators: [_index.validateRequired]
        }));
      };
      const Form = (0, _index.WVUSForm)(SelectForm);
      const wrapper = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(Form, null));
      // console.log(wrapper);
      wrapper.find("select").simulate("focus");
      expect(handleFocus.calledOnce).toEqual(true);
    });
    it("should show required star if required field", function () {
      const props = {
        formMethods: _propsMocks.formMethodsUnTouched
      };
      const wrapper = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_selectControlForm.SelectForm, props));
      expect(wrapper.contains( /*#__PURE__*/_react.default.createElement("sup", null, "*"))).toBe(true);
    });
    it("should NOT show required star if optional field", function () {
      const props = {
        formMethods: _propsMocks.formMethodsOptional
      };
      const wrapper = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_selectControlForm.SelectForm, props));
      expect(wrapper.contains( /*#__PURE__*/_react.default.createElement("sup", null, "*"))).toBe(false);
    });
    it("should render all field options passed via prop", function () {
      const props = {
        formMethods: _propsMocks.formMethodsUnTouched,
        fieldOptions: sharedFieldOptions
      };
      const wrapper = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_selectControlForm.SelectFormNoConfig, props));
      expect(wrapper.find("option")).toHaveLength(sharedFieldOptions.length);
    });
    it("should have correct classes if optional field", function () {
      const props = {
        formMethods: _propsMocks.formMethodsOptional,
        fieldOptions: sharedFieldOptions
      };
      const wrapper = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_selectControlForm.SelectFormNoConfig, props));
      expect(wrapper.find(".has-error")).toHaveLength(0);
      expect(wrapper.find(".has-success")).toHaveLength(0);
    });
    it("should have correct classes if has success", function () {
      const props = {
        formMethods: _propsMocks.formMethodsWithSuccess,
        fieldOptions: sharedFieldOptions
      };
      const wrapper = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_selectControlForm.SelectFormNoConfig, props));
      expect(wrapper.find(".has-success")).toHaveLength(1);
      expect(wrapper.find(".has-error")).toHaveLength(0);
    });
    it("should have correct classes if has error", function () {
      const props = {
        formMethods: _propsMocks.formMethodsWithError,
        fieldOptions: sharedFieldOptions
      };
      const wrapper = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_selectControlForm.SelectFormNoConfig, props));
      expect(wrapper.find(".has-error")).toHaveLength(1);
      expect(wrapper.find(".has-success")).toHaveLength(0);
    });
    it("should show error Message if has error", function () {
      const props = {
        formMethods: _propsMocks.formMethodsWithError,
        fieldOptions: sharedFieldOptions
      };
      const wrapper = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_selectControlForm.SelectFormNoConfig, props));
      const errorMessage = props.formMethods.getFieldState().errorMessage;
      expect(wrapper.contains( /*#__PURE__*/_react.default.createElement(_index.Message, {
        showError: true,
        showSuccess: false,
        message: errorMessage
      }))).toBe(true);
    });
    it("should show success Message if has success", function () {
      const props = {
        formMethods: _propsMocks.formMethodsWithSuccess,
        fieldOptions: sharedFieldOptions
      };
      const wrapper = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_selectControlForm.SelectFormNoConfig, props));
      expect(wrapper.contains( /*#__PURE__*/_react.default.createElement(_index.Message, {
        showError: false,
        showSuccess: true
      }))).toBe(true);
    });
    it("should be capable of having custom label and input classes", function () {
      const wrapper = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(Form, null));
      expect(wrapper.find(".wvus-field-state label").hasClass("state-label")).toBe(true);
      expect(wrapper.find(".wvus-field-state select").hasClass("state-input")).toBe(true);
    });
  });
});