(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@storybook/addon-storyshots"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@storybook/addon-storyshots"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.addonStoryshots);
    global.storyshotsTest = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_addonStoryshots) {
  "use strict";

  _addonStoryshots = _interopRequireDefault(_addonStoryshots);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  (0, _addonStoryshots.default)({
    /* configuration options */
  });
});