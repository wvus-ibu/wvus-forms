(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["core-js/modules/web.url.to-json.js", "react", "react-test-renderer", "./shared/simple-address-form", "../index"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("core-js/modules/web.url.to-json.js"), require("react"), require("react-test-renderer"), require("./shared/simple-address-form"), require("../index"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.webUrlToJson, global.react, global.reactTestRenderer, global.simpleAddressForm, global.index);
    global.addressFormTest = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_webUrlToJson, _react, _reactTestRenderer, _simpleAddressForm, _index) {
  "use strict";

  _react = _interopRequireDefault(_react);
  _reactTestRenderer = _interopRequireDefault(_reactTestRenderer);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  const Form = (0, _index.WVUSForm)(_simpleAddressForm.SimpleAddressForm);
  test("Simple Address Form renders correctly", () => {
    const tree = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(Form, null)).toJSON();

    expect(tree).toMatchSnapshot();
  });
});