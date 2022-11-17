require("core-js/modules/esnext.weak-map.delete-all.js");
require("core-js/modules/esnext.weak-map.emplace.js");
require("core-js/modules/es.error.cause.js");
require("core-js/modules/es.reflect.to-string-tag.js");
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "prop-types", "./message.js"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("prop-types"), require("./message.js"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.message);
    global.inputControl = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _react, _propTypes, _message) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _react = _interopRequireWildcard(_react);
  _propTypes = _interopRequireDefault(_propTypes);
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
  let InputControl = /*#__PURE__*/function (_Component) {
    _inherits(InputControl, _Component);
    var _super = _createSuper(InputControl);
    function InputControl(props) {
      var _this;
      _classCallCheck(this, InputControl);
      _this = _super.call(this, props);
      const {
        fieldName,
        fieldValue = "",
        secondInteraction = false,
        isValid = false,
        validators = [],
        optional = false,
        formMethods,
        renderFieldPrefix = ''
      } = _this.props;
      formMethods.addFieldToState(fieldName, fieldValue, secondInteraction, isValid, validators, optional);
      return _this;
    }
    _createClass(InputControl, [{
      key: "render",
      value: function render() {
        const {
          formMethods,
          fieldName,
          fieldId = fieldName,
          fieldClasses = "",
          fieldType = "text",
          fieldTitle,
          fieldPlaceholder,
          fieldState = formMethods.getFieldState(fieldName),
          characterCount,
          attributes = {},
          inputClasses = "",
          inputWrapperClasses = "",
          labelClasses = "",
          handleValueChange = formMethods.handleValueChange,
          handleBlur = formMethods.handleBlur,
          handleFocus = () => {},
          showUISuccess = formMethods.showUISuccess(fieldState),
          showUIError = formMethods.showUIError(fieldState),
          hideMessage = false,
          successIcon,
          errorIcon,
          renderFieldPrefix = ''
        } = this.props;
        const readOnly = attributes.readOnly ? attributes.readOnly : false;
        const disabled = attributes.disabled ? attributes.disabled : false;
        const validityClass = showUISuccess ? "has-success " : showUIError ? "has-error " : "";
        const requiredStar = fieldState.optional == true ? "" : /*#__PURE__*/_react.default.createElement("sup", null, "*");
        const label = !(fieldType === "hidden") ? /*#__PURE__*/_react.default.createElement("label", {
          htmlFor: fieldName,
          className: labelClasses
        }, fieldTitle, " ", requiredStar) : null;
        const fieldValue = fieldState.value || "";
        const fieldPrimaryClass = `wvus-field-${fieldName}`;
        return /*#__PURE__*/_react.default.createElement("div", {
          className: `${fieldPrimaryClass} ${fieldClasses} form-group has-icon ${validityClass}`,
          "data-field-container": fieldId,
          "data-field-is-valid": fieldState.isValid
        }, label, /*#__PURE__*/_react.default.createElement("div", {
          className: `form-control-wrapper ${inputWrapperClasses}`
        }, renderFieldPrefix && renderFieldPrefix, /*#__PURE__*/_react.default.createElement("input", {
          id: fieldId || fieldName,
          className: `form-control ${inputClasses}`,
          value: fieldValue,
          name: fieldName,
          onBlur: handleBlur,
          onChange: handleValueChange,
          onFocus: handleFocus,
          type: fieldType,
          placeholder: fieldPlaceholder,
          readOnly: readOnly,
          disabled: disabled
        }), typeof characterCount !== "undefined" ? /*#__PURE__*/_react.default.createElement("span", {
          className: "message character-count"
        }, characterCount) : "", showUIError ? /*#__PURE__*/_react.default.createElement(_message.default, {
          showError: true,
          showSuccess: false,
          message: fieldState.errorMessage,
          errorIcon: errorIcon,
          hideMessage: hideMessage
        }) : "", showUISuccess ? /*#__PURE__*/_react.default.createElement(_message.default, {
          showError: false,
          showSuccess: true,
          successIcon: successIcon,
          hideMessage: hideMessage
        }) : ""));
      }
    }]);
    return InputControl;
  }(_react.Component);
  InputControl.propTypes = {
    fieldName: _propTypes.default.string.isRequired,
    renderFieldPrefix: _propTypes.default.element,
    formMethods: _propTypes.default.shape({
      handleBlur: _propTypes.default.func.isRequired,
      handleValueChange: _propTypes.default.func.isRequired,
      getFieldState: _propTypes.default.func.isRequired,
      addFieldToState: _propTypes.default.func.isRequired,
      showUIError: _propTypes.default.func.isRequired,
      showUISuccess: _propTypes.default.func.isRequired
    }).isRequired,
    attributes: _propTypes.default.shape({
      readonly: _propTypes.default.bool,
      disabled: _propTypes.default.bool
    }),
    validators: _propTypes.default.array
  };
  var _default = InputControl;
  _exports.default = _default;
});