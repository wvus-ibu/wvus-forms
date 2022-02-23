require("core-js/modules/es.reflect.to-string-tag.js");

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "core-js/modules/esnext.async-iterator.map.js", "core-js/modules/esnext.iterator.map.js", "react", "prop-types", "./message.js"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("core-js/modules/esnext.async-iterator.map.js"), require("core-js/modules/esnext.iterator.map.js"), require("react"), require("prop-types"), require("./message.js"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.esnextAsyncIteratorMap, global.esnextIteratorMap, global.react, global.propTypes, global.message);
    global.selectControl = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _esnextAsyncIteratorMap, _esnextIteratorMap, _react, _propTypes, _message) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _react = _interopRequireDefault(_react);
  _propTypes = _interopRequireDefault(_propTypes);
  _message = _interopRequireDefault(_message);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  let SelectControl = /*#__PURE__*/function (_React$Component) {
    _inherits(SelectControl, _React$Component);

    var _super = _createSuper(SelectControl);

    function SelectControl(props) {
      var _this;

      _classCallCheck(this, SelectControl);

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

    _createClass(SelectControl, [{
      key: "render",
      value: function render() {
        const {
          formMethods,
          fieldOptions,
          fieldName,
          fieldId = fieldName,
          fieldClasses = "",
          fieldTitle,
          fieldPlaceholder,
          fieldState = formMethods.getFieldState(fieldName),
          inputClasses = "",
          labelClasses = "",
          handleValueChange = formMethods.handleValueChange,
          handleBlur = formMethods.handleBlur,
          handleFocus = () => {},
          showUISuccess = formMethods.showUISuccess(fieldState),
          showUIError = formMethods.showUIError(fieldState)
        } = this.props;
        const options = fieldOptions.map((option, index) => /*#__PURE__*/_react.default.createElement("option", {
          key: index,
          value: option.valueKey
        }, option.valueText));
        const validityClass = showUISuccess ? "has-success " : showUIError ? "has-error " : "";
        const requiredStar = fieldState.optional == true ? "" : /*#__PURE__*/_react.default.createElement("sup", null, "*");
        const fieldValue = fieldState.value || "";
        const fieldPrimaryClass = "wvus-field-".concat(fieldName);
        return /*#__PURE__*/_react.default.createElement("div", {
          className: "".concat(fieldPrimaryClass, " ").concat(fieldClasses, " form-group has-icon ").concat(validityClass)
        }, /*#__PURE__*/_react.default.createElement("label", {
          htmlFor: fieldName,
          className: labelClasses
        }, fieldTitle, " ", requiredStar), /*#__PURE__*/_react.default.createElement("div", {
          className: "form-control-wrapper"
        }, /*#__PURE__*/_react.default.createElement("select", {
          id: fieldName,
          className: "form-control select-control ".concat(inputClasses),
          value: fieldValue,
          name: fieldName,
          onBlur: handleBlur,
          onFocus: handleFocus,
          onChange: handleValueChange
        }, options), showUIError ? /*#__PURE__*/_react.default.createElement(_message.default, {
          showError: true,
          showSuccess: false,
          message: fieldState.errorMessage
        }) : "", showUISuccess ? /*#__PURE__*/_react.default.createElement(_message.default, {
          showError: false,
          showSuccess: true
        }) : ""));
      }
    }]);

    return SelectControl;
  }(_react.default.Component);

  SelectControl.propTypes = {
    fieldName: _propTypes.default.string.isRequired,
    fieldOptions: _propTypes.default.array.isRequired,
    formMethods: _propTypes.default.shape({
      handleBlur: _propTypes.default.func.isRequired,
      handleValueChange: _propTypes.default.func.isRequired,
      getFieldState: _propTypes.default.func.isRequired,
      showUIError: _propTypes.default.func.isRequired,
      showUISuccess: _propTypes.default.func.isRequired
    }).isRequired,
    validators: _propTypes.default.array
  };
  var _default = SelectControl;
  _exports.default = _default;
});