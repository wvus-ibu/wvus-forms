(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "@testing-library/react", "@testing-library/jest-dom", "./shared/simple-address-form", "../index"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("@testing-library/react"), require("@testing-library/jest-dom"), require("./shared/simple-address-form"), require("../index"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.react, global.jestDom, global.simpleAddressForm, global.index);
    global.addressFormTest = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_react, _react2, _jestDom, _simpleAddressForm, _index) {
  "use strict";

  _react = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  const Form = (0, _index.WVUSForm)(_simpleAddressForm.SimpleAddressForm);
  test("Simple Address Form renders correctly", () => {
    (0, _react2.render)( /*#__PURE__*/_react.default.createElement(Form, null));
    expect(_react2.screen.getByText('First Name')).toBeInTheDocument();
    expect(_react2.screen.getByText('Last Name')).toBeInTheDocument();
    expect(_react2.screen.getByText('Mailing Address')).toBeInTheDocument();
    expect(_react2.screen.getByText('City')).toBeInTheDocument();
    expect(_react2.screen.getByText('State')).toBeInTheDocument();
    expect(_react2.screen.getByText('Zip')).toBeInTheDocument();
  });
});