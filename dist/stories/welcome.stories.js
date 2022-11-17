(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "swing-ui/dist/css/swing.css", "@storybook/addon-info", "@storybook/react", "@storybook/addon-actions", "@storybook/addon-links"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("swing-ui/dist/css/swing.css"), require("@storybook/addon-info"), require("@storybook/react"), require("@storybook/addon-actions"), require("@storybook/addon-links"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.swing, global.addonInfo, global.react, global.addonActions, global.addonLinks);
    global.welcomeStories = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_react, _swing, _addonInfo, _react2, _addonActions, _addonLinks) {
  "use strict";

  _react = _interopRequireDefault(_react);
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  (0, _react2.storiesOf)("Welcome", module).add("to Validessa Form Validation", () => /*#__PURE__*/_react.default.createElement("div", null, "Validessa - Form Validation for WVUS sites"));
});