require("core-js/modules/esnext.weak-map.delete-all.js");
require("core-js/modules/esnext.weak-map.emplace.js");
require("core-js/modules/es.error.cause.js");
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
    global.radioControl = mod.exports;
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
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
  let RadioControl = /*#__PURE__*/function (_Component) {
    _inherits(RadioControl, _Component);
    var _super = _createSuper(RadioControl);
    function RadioControl(props) {
      var _this;
      _classCallCheck(this, RadioControl);
      _this = _super.call(this, props);
      _this.handleValueChange = _this.handleValueChange.bind(_assertThisInitialized(_this));
      const {
        fieldId,
        fieldName,
        fieldCheckedDefault = false,
        secondInteraction = false,
        isValid = false,
        validators = [],
        optional = false,
        formMethods
      } = _this.props;

      // Only setup state if initally checked radio button
      if (fieldCheckedDefault) {
        // Set value to fieldId
        const fieldValue = fieldId;
        formMethods.addFieldToState(fieldName, fieldValue, secondInteraction, isValid, validators, optional);
      }
      return _this;
    }
    _createClass(RadioControl, [{
      key: "handleValueChange",
      value: function handleValueChange(e) {
        const {
          setValueChange
        } = this.props.formMethods;
        setValueChange(e.target.name, e.target.id);
      }
    }, {
      key: "render",
      value: function render() {
        const {
          formMethods,
          fieldId,
          fieldName,
          fieldClasses = "",
          fieldTitle,
          inputClasses = "",
          labelClasses = "",
          fieldState = formMethods.getFieldState(fieldName),
          handleValueChange = this.handleValueChange,
          handleBlur = () => {},
          handleFocus = () => {}
        } = this.props;
        const fieldPrimaryClass = `wvus-field-${fieldName} wvus-field-${fieldId}`;
        const fieldChecked = fieldState.value === fieldId;
        return /*#__PURE__*/_react.default.createElement("div", {
          className: `radio-group ${fieldPrimaryClass} ${fieldClasses}`
        }, /*#__PURE__*/_react.default.createElement("label", {
          className: `radio-inline ${labelClasses}`
        }, /*#__PURE__*/_react.default.createElement("input", {
          id: fieldId,
          className: inputClasses,
          value: fieldState.value,
          name: fieldName,
          onChange: handleValueChange,
          onFocus: handleFocus,
          onBlur: handleBlur,
          type: "radio",
          checked: fieldChecked
        }), fieldTitle));
      }
    }]);
    return RadioControl;
  }(_react.Component);
  RadioControl.propTypes = {
    fieldId: _propTypes.default.string.isRequired,
    fieldName: _propTypes.default.string.isRequired,
    fieldCheckedDefault: _propTypes.default.bool,
    formMethods: _propTypes.default.shape({
      handleBlur: _propTypes.default.func.isRequired,
      handleValueChange: _propTypes.default.func.isRequired,
      getFieldState: _propTypes.default.func.isRequired,
      addFieldToState: _propTypes.default.func.isRequired,
      showUIError: _propTypes.default.func.isRequired,
      showUISuccess: _propTypes.default.func.isRequired
    }).isRequired,
    validators: _propTypes.default.array
  };
  var _default = RadioControl;
  _exports.default = _default;
});