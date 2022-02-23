(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["core-js/modules/web.url.to-json.js", "core-js/modules/esnext.async-iterator.find.js", "core-js/modules/esnext.iterator.constructor.js", "core-js/modules/esnext.iterator.find.js", "react", "react-test-renderer", "enzyme", "enzyme-adapter-react-16", "sinon", "../index", "./shared/input-control-form"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("core-js/modules/web.url.to-json.js"), require("core-js/modules/esnext.async-iterator.find.js"), require("core-js/modules/esnext.iterator.constructor.js"), require("core-js/modules/esnext.iterator.find.js"), require("react"), require("react-test-renderer"), require("enzyme"), require("enzyme-adapter-react-16"), require("sinon"), require("../index"), require("./shared/input-control-form"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.webUrlToJson, global.esnextAsyncIteratorFind, global.esnextIteratorConstructor, global.esnextIteratorFind, global.react, global.reactTestRenderer, global.enzyme, global.enzymeAdapterReact16, global.sinon, global.index, global.inputControlForm);
    global.formInputTest = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_webUrlToJson, _esnextAsyncIteratorFind, _esnextIteratorConstructor, _esnextIteratorFind, _react, _reactTestRenderer, _enzyme, _enzymeAdapterReact, _sinon, _index, _inputControlForm) {
  "use strict";

  _react = _interopRequireDefault(_react);
  _reactTestRenderer = _interopRequireDefault(_reactTestRenderer);
  _enzymeAdapterReact = _interopRequireDefault(_enzymeAdapterReact);
  _sinon = _interopRequireDefault(_sinon);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  (0, _enzyme.configure)({
    adapter: new _enzymeAdapterReact.default()
  });
  const Form = (0, _index.WVUSForm)(_inputControlForm.SimpleInputForm);
  /**
   * SNAPSHOTS
   */

  test("Snapshot: Input Form renders correctly", () => {
    const tree = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(Form, null)).toJSON();

    expect(tree).toMatchSnapshot();
  });
  test("Snapshot: Input renders untouched state", () => {
    const tree = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_inputControlForm.SimpleInputStates, _inputControlForm.propsUntouched)).toJSON();

    expect(tree).toMatchSnapshot();
  });
  test("Snapshot: Input renders success state", () => {
    const tree = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_inputControlForm.SimpleInputStates, _inputControlForm.propsWithSuccess)).toJSON();

    expect(tree).toMatchSnapshot();
  });
  test("Snapshot: Input renders error state", () => {
    const tree = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_inputControlForm.SimpleInputStates, _inputControlForm.propsWithError)).toJSON();

    expect(tree).toMatchSnapshot();
  });
  test("Snapshot: Input renders with optional/valid state", () => {
    const tree = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_inputControlForm.SimpleInputStates, _inputControlForm.propsOptional)).toJSON();

    expect(tree).toMatchSnapshot();
  });
  test("Snapshot: Input renders with readonly/disabled attributes", () => {
    const tree = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_inputControlForm.SimpleInputFormAttr, _inputControlForm.propsAttrReadonlyDisabled)).toJSON();

    expect(tree).toMatchSnapshot();
  });
  /**
   * Interactive - Enzyme tests
   */

  describe("InputControl", function () {
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
      const wrapper = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(Form, null));
      const actual = wrapper.state("fields");
      expect(actual).toEqual(expectedFieldsState);
    });
    it(" getFieldState should return fieldState", () => {
      const wrapper = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(Form, null));
      const expected = expectedFieldsState.fname;
      const actual = wrapper.instance().getFieldState("fname");
      expect(expected).toEqual(actual);
    });
    it("should call handleValueChange if input has changed", function () {
      _sinon.default.spy(Form.prototype, "handleValueChange");

      const wrapper = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(Form, null));
      wrapper.find("input").simulate("change", {
        target: {
          name: "fname",
          value: "Scott Rees"
        }
      });
      expect(Form.prototype.handleValueChange.calledOnce).toEqual(true);
    });
    it("should call handleBlur if input is blurred", function () {
      _sinon.default.spy(Form.prototype, "handleBlur");

      const wrapper = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(Form, null));
      wrapper.find("input").simulate("blur");
      expect(Form.prototype.handleBlur.calledOnce).toEqual(true);
    });
    it("should call handleFocus if input is focus", function () {
      const handleFocus = _sinon.default.spy();

      const InputForm = props => {
        return /*#__PURE__*/_react.default.createElement("form", null, /*#__PURE__*/_react.default.createElement(_index.InputControl, {
          inputClasses: "first-name-input",
          labelClasses: "first-name-label",
          fieldPlaceholder: "Tim Stehlin",
          fieldName: "fname",
          fieldTitle: "First Name",
          fieldClasses: "custom-class-field-input",
          handleFocus: handleFocus,
          formMethods: props.formMethods
        }));
      };

      const Form = (0, _index.WVUSForm)(InputForm);
      const wrapper = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(Form, null));
      wrapper.find("input").simulate("focus");
      expect(handleFocus.calledOnce).toEqual(true);
    });
    it("should show required star if required field", function () {
      const wrapper = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_inputControlForm.SimpleInputForm, _inputControlForm.propsUntouched));
      expect(wrapper.contains( /*#__PURE__*/_react.default.createElement("sup", null, "*"))).toBe(true);
    });
    it("should NOT show required star if optional field", function () {
      const wrapper = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_inputControlForm.SimpleInputForm, _inputControlForm.propsOptional));
      expect(wrapper.contains( /*#__PURE__*/_react.default.createElement("sup", null, "*"))).toBe(false);
    });
    it("should have correct classes if optional field", function () {
      const wrapper = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_inputControlForm.SimpleInputForm, _inputControlForm.propsOptional));
      expect(wrapper.find(".has-error")).toHaveLength(0);
      expect(wrapper.find(".has-success")).toHaveLength(0);
    });
    it("should have correct classes if has success", function () {
      const wrapper = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_inputControlForm.SimpleInputForm, _inputControlForm.propsWithSuccess));
      expect(wrapper.find(".has-success")).toHaveLength(1);
      expect(wrapper.find(".has-error")).toHaveLength(0);
    });
    it("should have correct classes if has error", function () {
      const wrapper = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_inputControlForm.SimpleInputForm, _inputControlForm.propsWithError));
      expect(wrapper.find(".has-error")).toHaveLength(1);
      expect(wrapper.find(".has-success")).toHaveLength(0);
    });
    it("should show error Message if has error", function () {
      const wrapper = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_inputControlForm.SimpleInputForm, _inputControlForm.propsWithError));

      const errorMessage = _inputControlForm.propsWithError.formMethods.getFieldState().errorMessage;

      expect(wrapper.contains( /*#__PURE__*/_react.default.createElement(_index.Message, {
        showError: true,
        showSuccess: false,
        message: errorMessage
      }))).toBe(true); // expect(wrapper.find(".has-success")).toHaveLength(0);
    });
    it("should NOT show error Message if hiddenMessage enabled", function () {
      const wrapper = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_inputControlForm.SimpleInputFormHiddenMessage, _inputControlForm.propsWithError));

      const errorMessage = _inputControlForm.propsWithError.formMethods.getFieldState().errorMessage;

      expect(wrapper.contains( /*#__PURE__*/_react.default.createElement(_index.Message, {
        showError: true,
        showSuccess: false,
        message: errorMessage
      }))).toBe(false); // expect(wrapper.find(".has-success")).toHaveLength(0);
    });
    it("should show success Message if has success", function () {
      const wrapper = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_inputControlForm.SimpleInputForm, _inputControlForm.propsWithSuccess));
      expect(wrapper.contains( /*#__PURE__*/_react.default.createElement(_index.Message, {
        showError: false,
        showSuccess: true
      }))).toBe(true);
    });
    it("should NOT show success Message if hiddenMessage enabled", function () {
      const wrapper = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_inputControlForm.SimpleInputFormHiddenMessage, _inputControlForm.propsWithSuccess));
      expect(wrapper.contains( /*#__PURE__*/_react.default.createElement(_index.Message, {
        showError: false,
        showSuccess: true
      }))).toBe(false); // expect(wrapper.find(".has-success")).toHaveLength(0);
    });
    it("should be capable of being disabled and readonly", function () {
      const wrapper = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_inputControlForm.SimpleInputFormAttr, _inputControlForm.propsAttrReadonlyDisabled));
      expect(wrapper.find("input").prop("disabled")).toBe(true);
      expect(wrapper.find("input").prop("readOnly")).toBe(true);
    });
    it("should be capable of being readonly but not disabled", function () {
      const wrapper = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_inputControlForm.SimpleInputFormAttr, _inputControlForm.propsAttrReadonlyNotDisabled));
      expect(wrapper.find("input").prop("disabled")).toBe(false);
      expect(wrapper.find("input").prop("readOnly")).toBe(true);
    });
    it("should be capable of being disabled but not readonly", function () {
      const wrapper = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_inputControlForm.SimpleInputFormAttr, _inputControlForm.propsAttrDisabledNotReadonly));
      expect(wrapper.find("input").prop("disabled")).toBe(true);
      expect(wrapper.find("input").prop("readOnly")).toBe(false);
    });
    it("should be capable of having custom label and input classes", function () {
      const wrapper = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_inputControlForm.SimpleInputFormClasses, _inputControlForm.propsUntouched));
      wrapper.find("input").debug();
      expect(wrapper.find("label").hasClass("first-name-label")).toBe(true);
      expect(wrapper.find("input").hasClass("first-name-input")).toBe(true);
    });
  });
});