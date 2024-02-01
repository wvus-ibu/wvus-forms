require("core-js/modules/esnext.weak-map.delete-all.js");
require("core-js/modules/esnext.weak-map.emplace.js");
require("core-js/modules/es.error.cause.js");
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "../../index"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("../../index"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.index);
    global.billingAddressForm = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _react, _index) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.BillingInfoForm = void 0;
  _react = _interopRequireWildcard(_react);
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
  let BillingInfoForm = /*#__PURE__*/function (_Component) {
    _inherits(BillingInfoForm, _Component);
    var _super = _createSuper(BillingInfoForm);
    function BillingInfoForm(props) {
      var _this;
      _classCallCheck(this, BillingInfoForm);
      _this = _super.call(this, props);
      _this.handleFormSubmit = _this.handleFormSubmit.bind(_assertThisInitialized(_this));
      return _this;
    }
    _createClass(BillingInfoForm, [{
      key: "handleFormSubmit",
      value: function handleFormSubmit(e) {
        // Handle your form submission however you would like
        e.preventDefault();
        // fail safe to bail if they get around disabled button
        if (!this.props.formMethods.isFormValid()) return false;
      }
    }, {
      key: "render",
      value: function render() {
        const {
          formMethods
        } = this.props;
        const submitDisabled = !formMethods.isFormValid();
        return /*#__PURE__*/_react.default.createElement("form", null, /*#__PURE__*/_react.default.createElement("h2", null, "Billing Info Form"), /*#__PURE__*/_react.default.createElement(_index.InputControl, {
          labelClasses: "first-name-label",
          inputClasses: "first-name-input",
          fieldName: "fname",
          fieldTitle: "First Name",
          fieldClasses: "wvus-field-50",
          formMethods: formMethods,
          validators: [_index.validateRequired]
        }), /*#__PURE__*/_react.default.createElement(_index.InputControl, {
          fieldName: "lname",
          fieldTitle: "Last Name",
          fieldClasses: "wvus-field-50 wvus-field--end",
          formMethods: formMethods,
          validators: [_index.validateRequired]
        }), /*#__PURE__*/_react.default.createElement(_index.InputControl, {
          fieldName: "address1",
          fieldTitle: "Mailing Address Line 1",
          formMethods: formMethods,
          validators: [_index.validateRequired]
        }), /*#__PURE__*/_react.default.createElement(_index.InputControl, {
          fieldName: "address2",
          fieldTitle: "Mailing Address Line 2",
          optional: true,
          isValid: true,
          secondInteraction: false,
          formMethods: formMethods,
          validators: []
        }), /*#__PURE__*/_react.default.createElement(_index.InputControl, {
          fieldName: "city",
          fieldTitle: "City",
          fieldClasses: "wvus-field-33",
          formMethods: formMethods,
          validators: [_index.validateRequired]
        }), /*#__PURE__*/_react.default.createElement(_index.SelectControl, {
          fieldName: "state",
          fieldOptions: _index.USStateFieldOptions,
          fieldTitle: "State",
          fieldClasses: "wvus-field-33",
          formMethods: formMethods,
          validators: [_index.validateRequired, (0, _index.validateMin)(2)]
        }), /*#__PURE__*/_react.default.createElement(_index.InputControl, {
          fieldName: "zip",
          fieldTitle: "Zip",
          fieldClasses: "wvus-field-33 wvus-field--end",
          formMethods: formMethods,
          validators: [_index.validateRequired, _index.validateZip]
        }), /*#__PURE__*/_react.default.createElement(_index.InputControl, {
          fieldName: "email",
          fieldTitle: "Email",
          fieldType: "email",
          fieldClasses: "wvus-field-newletter",
          formMethods: formMethods,
          validators: [_index.validateRequired, _index.validateEmail]
        }), /*#__PURE__*/_react.default.createElement(_index.InputControl, {
          fieldName: "phone",
          fieldTitle: "Phone",
          fieldType: "tel",
          fieldClasses: "wvus-field-newletter",
          formMethods: formMethods,
          validators: [_index.validateRequired, _index.validatePhone]
        }), /*#__PURE__*/_react.default.createElement(_index.CheckboxControl, {
          fieldName: "optIn",
          fieldValue: true,
          fieldTitle: "Yes, please add me to your email newsletter",
          labelClasses: "optIn-label",
          inputClasses: "optIn-input",
          fieldClasses: "wvus-field-newletter-optin",
          formMethods: formMethods
        }), /*#__PURE__*/_react.default.createElement("button", {
          type: "submit",
          id: "wv-login-form-submit",
          className: "btn btn-medium btn-secondary",
          disabled: submitDisabled,
          onClick: this.handleFormSubmit
        }, "Submit"));
      }
    }]);
    return BillingInfoForm;
  }(_react.Component);
  _exports.BillingInfoForm = BillingInfoForm;
});