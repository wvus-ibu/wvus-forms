(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "@storybook/addon-info", "@storybook/react", "@storybook/addon-actions", "@storybook/addon-links", "../form-hoc.js", "./shared/billing-address-form"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("@storybook/addon-info"), require("@storybook/react"), require("@storybook/addon-actions"), require("@storybook/addon-links"), require("../form-hoc.js"), require("./shared/billing-address-form"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.addonInfo, global.react, global.addonActions, global.addonLinks, global.formHoc, global.billingAddressForm);
    global.billingInformationStories = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_react, _addonInfo, _react2, _addonActions, _addonLinks, _formHoc, _billingAddressForm) {
  "use strict";

  _react = _interopRequireDefault(_react);
  _formHoc = _interopRequireDefault(_formHoc);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  // import "swing-ui/dist/css/swing.css";
  const Form = (0, _formHoc.default)(_billingAddressForm.BillingInfoForm);
  (0, _react2.storiesOf)("Example Forms", module).add("Billing Info", () => /*#__PURE__*/_react.default.createElement(Form, null));
});