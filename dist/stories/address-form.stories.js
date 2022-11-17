(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "@storybook/react", "./shared/simple-address-form", "../index"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("@storybook/react"), require("./shared/simple-address-form"), require("../index"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.react, global.simpleAddressForm, global.index);
    global.addressFormStories = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_react, _react2, _simpleAddressForm, _index) {
  "use strict";

  _react = _interopRequireDefault(_react);
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  const Form = (0, _index.WVUSForm)(_simpleAddressForm.SimpleAddressForm);
  (0, _react2.storiesOf)("Example Forms", module).add("Simple Address Form", () => /*#__PURE__*/_react.default.createElement(Form, {
    formName: "SimpleAddressForm"
  }));
});