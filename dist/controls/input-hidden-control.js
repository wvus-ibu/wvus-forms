require("core-js/modules/esnext.weak-map.delete-all.js");
require("core-js/modules/esnext.weak-map.emplace.js");
require("core-js/modules/es.error.cause.js");
require("core-js/modules/es.reflect.to-string-tag.js");
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "./message.js"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("./message.js"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.message);
    global.inputHiddenControl = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _react, _message) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _react = _interopRequireWildcard(_react);
  _message = _interopRequireDefault(_message);
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
  function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
  let InputHiddenControl = /*#__PURE__*/function (_Component) {
    _inherits(InputHiddenControl, _Component);
    var _super = _createSuper(InputHiddenControl);
    function InputHiddenControl(props) {
      var _this;
      _classCallCheck(this, InputHiddenControl);
      _this = _super.call(this, props);
      const {
        fieldName,
        fieldValue = "",
        secondInteraction = false,
        isValid = false,
        validators = [],
        optional = false,
        formMethods
      } = _this.props;
      formMethods.addFieldToState(fieldName, fieldValue, secondInteraction, isValid, validators, optional);
      return _this;
    }
    _createClass(InputHiddenControl, [{
      key: "render",
      value: function render() {
        const {
          formMethods,
          fieldName,
          fieldId = fieldName,
          fieldClasses = "",
          inputClasses = "",
          fieldState = formMethods.getFieldState(fieldName)
        } = this.props;
        const fieldValue = fieldState.value || "";
        const fieldPrimaryClass = `wvus-field-${fieldName}`;
        return /*#__PURE__*/_react.default.createElement("span", {
          className: `${fieldPrimaryClass} ${fieldClasses} input-hidden-control-wrapper`,
          "data-field-container": fieldId
        }, /*#__PURE__*/_react.default.createElement("input", {
          id: fieldId,
          className: `input-hidden-control ${inputClasses}`,
          name: fieldName,
          value: fieldValue,
          type: "hidden"
        }));
      }
    }]);
    return InputHiddenControl;
  }(_react.Component);
  var _default = InputHiddenControl;
  _exports.default = _default;
});