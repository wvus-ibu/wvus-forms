(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["core-js/modules/esnext.async-iterator.find.js", "core-js/modules/esnext.iterator.constructor.js", "core-js/modules/esnext.iterator.find.js", "react", "react-test-renderer", "enzyme", "enzyme-adapter-react-16", "sinon", "./shared/radio-control-form", "../index"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("core-js/modules/esnext.async-iterator.find.js"), require("core-js/modules/esnext.iterator.constructor.js"), require("core-js/modules/esnext.iterator.find.js"), require("react"), require("react-test-renderer"), require("enzyme"), require("enzyme-adapter-react-16"), require("sinon"), require("./shared/radio-control-form"), require("../index"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.esnextAsyncIteratorFind, global.esnextIteratorConstructor, global.esnextIteratorFind, global.react, global.reactTestRenderer, global.enzyme, global.enzymeAdapterReact16, global.sinon, global.radioControlForm, global.index);
    global.formRadioTest = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_esnextAsyncIteratorFind, _esnextIteratorConstructor, _esnextIteratorFind, _react, _reactTestRenderer, _enzyme, _enzymeAdapterReact, _sinon, _radioControlForm, _index) {
  "use strict";

  _react = _interopRequireDefault(_react);
  _reactTestRenderer = _interopRequireDefault(_reactTestRenderer);
  _enzymeAdapterReact = _interopRequireDefault(_enzymeAdapterReact);
  _sinon = _interopRequireDefault(_sinon);
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  (0, _enzyme.configure)({
    adapter: new _enzymeAdapterReact.default()
  });
  const Form = (0, _index.WVUSForm)(_radioControlForm.RadioForm);

  /**
   * SNAPSHOTS
   */
  test("Snapshot: Radio Form renders correctly", () => {
    const tree = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(Form, null)).toJSON();
    expect(tree).toMatchSnapshot();
  });

  /**
   * Interactive - Enzyme tests
   */

  describe("InputControl", function () {
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
      const wrapper = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(Form, null));
      const actual = wrapper.state("fields");
      expect(actual).toEqual(expectedFieldsState);
    });
    it(" getFieldState should return fieldState", () => {
      const wrapper = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(Form, null));
      const expected = expectedFieldsState.payment_method;
      const actual = wrapper.instance().getFieldState("payment_method");
      expect(expected).toEqual(actual);
    });
    it("should call setValueChange on Form HOC if radio button has changed", function () {
      _sinon.default.spy(Form.prototype, "setValueChange");
      const wrapper = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(Form, null));
      wrapper.find("input#payment_method_new_cc").simulate("change", {
        target: {
          name: "payment_method",
          id: "payment_method_existing_cc"
        }
      });
      expect(Form.prototype.setValueChange.calledOnce).toEqual(true);
    });
    it("should NOT call handleBlur on Form HOC if radio button is blurred", function () {
      _sinon.default.spy(Form.prototype, "handleBlur");
      const wrapper = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(Form, null));
      wrapper.find("input#payment_method_new_cc").simulate("blur");
      expect(Form.prototype.handleBlur.calledOnce).toEqual(false);
    });
    it("should call handleFocus if input is focus", function () {
      const handleFocus = _sinon.default.spy();
      const RadioForm = props => {
        return /*#__PURE__*/_react.default.createElement("form", null, /*#__PURE__*/_react.default.createElement(_index.RadioControl, {
          fieldId: "payment_method_new_cc",
          fieldName: "payment_method",
          fieldTitle: "New Credit Card",
          labelClasses: "payment-method-new-cc-label",
          inputClasses: "payment-method-new-cc-input",
          handleFocus: handleFocus,
          formMethods: props.formMethods,
          fieldCheckedDefault: true
        }), /*#__PURE__*/_react.default.createElement(_index.RadioControl, {
          fieldId: "payment_method_existing_cc",
          fieldName: "payment_method",
          fieldTitle: "Existing Credit Card",
          handleFocus: handleFocus,
          formMethods: props.formMethods
        }), /*#__PURE__*/_react.default.createElement(_index.RadioControl, {
          fieldId: "payment_method_paypal",
          fieldName: "payment_method",
          fieldTitle: "Paypal",
          handleFocus: handleFocus,
          formMethods: props.formMethods
        }));
      };
      const Form = (0, _index.WVUSForm)(RadioForm);
      const wrapper = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(Form, null));
      wrapper.find("input#payment_method_new_cc").simulate("focus");
      expect(handleFocus.calledOnce).toEqual(true);
    });
    it("should be capable of having custom label and input classes", function () {
      const wrapper = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(Form, null));
      expect(wrapper.find(".wvus-field-payment_method_new_cc label").hasClass("payment-method-new-cc-label")).toBe(true);
      expect(wrapper.find(".wvus-field-payment_method_new_cc input").hasClass("payment-method-new-cc-input")).toBe(true);
    });
  });
});