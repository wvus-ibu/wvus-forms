require("core-js/modules/esnext.weak-map.delete-all.js");
require("core-js/modules/esnext.weak-map.emplace.js");
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["core-js/modules/esnext.async-iterator.find.js", "core-js/modules/esnext.iterator.constructor.js", "core-js/modules/esnext.iterator.find.js", "react", "react-test-renderer", "enzyme", "enzyme-adapter-react-16", "sinon", "./shared/textarea-control-form", "./shared/props-mocks", "../index"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("core-js/modules/esnext.async-iterator.find.js"), require("core-js/modules/esnext.iterator.constructor.js"), require("core-js/modules/esnext.iterator.find.js"), require("react"), require("react-test-renderer"), require("enzyme"), require("enzyme-adapter-react-16"), require("sinon"), require("./shared/textarea-control-form"), require("./shared/props-mocks"), require("../index"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.esnextAsyncIteratorFind, global.esnextIteratorConstructor, global.esnextIteratorFind, global.react, global.reactTestRenderer, global.enzyme, global.enzymeAdapterReact16, global.sinon, global.textareaControlForm, global.propsMocks, global.index);
    global.formTextareaTest = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_esnextAsyncIteratorFind, _esnextIteratorConstructor, _esnextIteratorFind, _react, _reactTestRenderer, _enzyme, _enzymeAdapterReact, _sinon, _textareaControlForm, _propsMocks, _index) {
  "use strict";

  _react = _interopRequireWildcard(_react);
  _reactTestRenderer = _interopRequireDefault(_reactTestRenderer);
  _enzymeAdapterReact = _interopRequireDefault(_enzymeAdapterReact);
  _sinon = _interopRequireDefault(_sinon);
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
  function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
  (0, _enzyme.configure)({
    adapter: new _enzymeAdapterReact.default()
  });
  const Form = (0, _index.WVUSForm)(_textareaControlForm.TextAreaForm);
  const FormNoConfig = (0, _index.WVUSForm)(_textareaControlForm.TextAreaFormNoConfig);
  const FormTooMuchText = (0, _index.WVUSForm)(_textareaControlForm.TextAreaFormTooMuchText);

  /**
   * SNAPSHOTS
   */

  test("Snapshot:  Textarea control renders correctly with no selection", () => {
    const tree = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(Form, null)).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test("Snapshot:  Textarea control renders correctly with too much text", () => {
    const tree = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(FormTooMuchText, null)).toJSON();
    expect(tree).toMatchSnapshot();
  });

  /**
   * Interactive - Enzyme tests
   */
  describe("SelectControl", function () {
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
      const wrapper = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(FormNoConfig, null));
      const actual = wrapper.state("fields");
      expect(actual).toEqual(expectedFieldsState);
    });
    it("getFieldState should return fieldState", () => {
      const wrapper = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(FormNoConfig, null));
      const expected = expectedFieldsState.message;
      const actual = wrapper.instance().getFieldState("message");
      expect(actual).toEqual(expected);
    });
    it("should call handleValueChange if field has changed", function () {
      _sinon.default.spy(FormNoConfig.prototype, "handleValueChange");
      const wrapper = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(FormNoConfig, null));
      wrapper.find("textarea").simulate("change", {
        target: {
          name: "message",
          value: "Some new message"
        }
      });
      expect(FormNoConfig.prototype.handleValueChange.calledOnce).toEqual(true);
    });
    it("should call handleBlur if field is blurred", function () {
      _sinon.default.spy(FormNoConfig.prototype, "handleBlur");
      const wrapper = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(FormNoConfig, null));
      wrapper.find("textarea").simulate("blur");
      expect(FormNoConfig.prototype.handleBlur.calledOnce).toEqual(true);
    });
    it("should call handleFocus if input is focus", function () {
      const handleFocus = _sinon.default.spy();
      const TextAreaForm = props => {
        return /*#__PURE__*/_react.default.createElement("form", {
          className: "default-textarea-example"
        }, /*#__PURE__*/_react.default.createElement(_index.TextAreaControl, {
          fieldName: "message",
          fieldRows: 6,
          fieldPlaceholder: "Type your message here",
          fieldTitle: "Message",
          fieldClasses: "wvus-field-newletter-message",
          labelClasses: "message-label",
          inputClasses: "message-input",
          handleFocus: handleFocus,
          formMethods: props.formMethods,
          validators: [_index.validateRequired, (0, _index.validateMax)("50")],
          characterCount: "50"
        }));
      };
      const Form = (0, _index.WVUSForm)(TextAreaForm);
      const wrapper = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(Form, null));
      wrapper.find("textarea").simulate("focus");
      expect(handleFocus.calledOnce).toEqual(true);
    });
    it("should show required star if required field", function () {
      const props = {
        formMethods: _propsMocks.formMethodsUnTouched
      };
      const wrapper = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_textareaControlForm.TextAreaFormNoConfig, props));
      expect(wrapper.contains( /*#__PURE__*/_react.default.createElement("sup", null, "*"))).toBe(true);
    });
    it("should NOT show required star if optional field", function () {
      const props = {
        formMethods: _propsMocks.formMethodsOptional
      };
      const wrapper = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_textareaControlForm.TextAreaFormNoConfig, props));
      expect(wrapper.contains( /*#__PURE__*/_react.default.createElement("sup", null, "*"))).toBe(false);
    });
    it("should have correct classes if optional field", function () {
      const props = {
        formMethods: _propsMocks.formMethodsOptional
      };
      const wrapper = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_textareaControlForm.TextAreaFormNoConfig, props));
      expect(wrapper.find(".has-error")).toHaveLength(0);
      expect(wrapper.find(".has-success")).toHaveLength(0);
    });
    it("should have correct classes if has success", function () {
      const props = {
        formMethods: _propsMocks.formMethodsWithSuccess
      };
      const wrapper = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_textareaControlForm.TextAreaFormNoConfig, props));
      expect(wrapper.find(".has-success")).toHaveLength(1);
      expect(wrapper.find(".has-error")).toHaveLength(0);
    });
    it("should have correct classes if has error", function () {
      const props = {
        formMethods: _propsMocks.formMethodsWithError
      };
      const wrapper = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_textareaControlForm.TextAreaFormNoConfig, props));
      expect(wrapper.find(".has-error")).toHaveLength(1);
      expect(wrapper.find(".has-success")).toHaveLength(0);
    });
    it("should show error Message if has error", function () {
      const props = {
        formMethods: _propsMocks.formMethodsWithError
      };
      const wrapper = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_textareaControlForm.TextAreaFormNoConfig, props));
      const errorMessage = props.formMethods.getFieldState().errorMessage;
      expect(wrapper.contains( /*#__PURE__*/_react.default.createElement(_index.Message, {
        showError: true,
        showSuccess: false,
        message: errorMessage
      }))).toBe(true);
    });
    it("should show success Message if has success", function () {
      const props = {
        formMethods: _propsMocks.formMethodsWithSuccess
      };
      const wrapper = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_textareaControlForm.TextAreaFormNoConfig, props));
      expect(wrapper.contains( /*#__PURE__*/_react.default.createElement(_index.Message, {
        showError: false,
        showSuccess: true
      }))).toBe(true);
    });
    it("should be capable of having custom label and input classes", function () {
      const wrapper = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(Form, null));
      expect(wrapper.find(".default-textarea-example label").hasClass("message-label")).toBe(true);
      expect(wrapper.find(".default-textarea-example textarea").hasClass("message-input")).toBe(true);
    });
  });
});