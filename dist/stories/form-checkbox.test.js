(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["core-js/modules/esnext.async-iterator.find.js", "core-js/modules/esnext.iterator.constructor.js", "core-js/modules/esnext.iterator.find.js", "react", "react-test-renderer", "enzyme", "enzyme-adapter-react-16", "./shared/checkbox-control-form", "../index"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("core-js/modules/esnext.async-iterator.find.js"), require("core-js/modules/esnext.iterator.constructor.js"), require("core-js/modules/esnext.iterator.find.js"), require("react"), require("react-test-renderer"), require("enzyme"), require("enzyme-adapter-react-16"), require("./shared/checkbox-control-form"), require("../index"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.esnextAsyncIteratorFind, global.esnextIteratorConstructor, global.esnextIteratorFind, global.react, global.reactTestRenderer, global.enzyme, global.enzymeAdapterReact16, global.checkboxControlForm, global.index);
    global.formCheckboxTest = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_esnextAsyncIteratorFind, _esnextIteratorConstructor, _esnextIteratorFind, _react, _reactTestRenderer, _enzyme, _enzymeAdapterReact, _checkboxControlForm, _index) {
  "use strict";

  _react = _interopRequireDefault(_react);
  _reactTestRenderer = _interopRequireDefault(_reactTestRenderer);
  _enzymeAdapterReact = _interopRequireDefault(_enzymeAdapterReact);
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  (0, _enzyme.configure)({
    adapter: new _enzymeAdapterReact.default()
  });
  const Form = (0, _index.WVUSForm)(_checkboxControlForm.SimpleCheckboxForm);

  /**
   * SNAPSHOTS
   */

  test("Snapshot: Checkbox Form renders correctly", () => {
    const tree = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(Form, null)).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test("Snapshot: Checkbox renders checked state", () => {
    const tree = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_checkboxControlForm.SimpleCheckboxForm, _checkboxControlForm.propsChecked)).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test("Snapshot: Checkbox renders unchecked state", () => {
    const tree = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_checkboxControlForm.SimpleCheckboxForm, _checkboxControlForm.propsUnchecked)).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test("Snapshot: Checkbox can be disabled", () => {
    const tree = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_checkboxControlForm.SimpleCheckboxForm, _checkboxControlForm.propsDisabled)).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test("should be capable of having custom label and input classes", function () {
    const wrapper = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_checkboxControlForm.SimpleCheckboxForm, _checkboxControlForm.propsChecked));
    expect(wrapper.find("label").hasClass("opt-in-label")).toBe(true);
    expect(wrapper.find("input").hasClass("opt-in-input")).toBe(true);
  });
});