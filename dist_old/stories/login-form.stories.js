require("core-js/modules/es.reflect.to-string-tag.js");

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "swing-ui/dist/css/swing.css", "@storybook/addon-info", "@storybook/react", "@storybook/addon-actions", "@storybook/addon-links", "../index.js", "../index"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("swing-ui/dist/css/swing.css"), require("@storybook/addon-info"), require("@storybook/react"), require("@storybook/addon-actions"), require("@storybook/addon-links"), require("../index.js"), require("../index"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.swing, global.addonInfo, global.react, global.addonActions, global.addonLinks, global.index, global.index);
    global.loginFormStories = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_react, _swing, _addonInfo, _react2, _addonActions, _addonLinks, _index, _index2) {
  "use strict";

  _react = _interopRequireDefault(_react);

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

  let LoginForm = /*#__PURE__*/function (_React$Component) {
    _inherits(LoginForm, _React$Component);

    var _super = _createSuper(LoginForm);

    function LoginForm(props) {
      var _this;

      _classCallCheck(this, LoginForm);

      _this = _super.call(this, props);
      _this.state = {
        loading: false,
        errorMessage: ""
      };
      return _this;
    }

    _createClass(LoginForm, [{
      key: "handleFormSubmit",
      value: function handleFormSubmit(e) {
        e.preventDefault();
        this.setState({
          loading: true
        });
        setTimeout(() => {
          // Show error message
          this.setState({
            errorMessage: "Your email and password combination cannot be found. Please try again or reset your password. "
          });
        }, 800);
      }
    }, {
      key: "render",
      value: function render() {
        const props = this.props;

        const signInIcon = /*#__PURE__*/_react.default.createElement("i", {
          className: "fa fa-lock",
          "aria-hidden": "true"
        });

        const submitDisabled = !this.props.formMethods.isFormValid() || this.state.loading ? true : false;
        const buttonClass = this.state.loading ? "btn btn-medium btn-secondary loading" : "btn btn-medium btn-secondary";
        return /*#__PURE__*/_react.default.createElement("div", {
          className: "user-checkout-login wv-flex-child"
        }, /*#__PURE__*/_react.default.createElement("h3", {
          className: "checkout-step-subheading epsilon text-center"
        }, "Sign In"), this.state.errorMessage.length > 0 ? /*#__PURE__*/_react.default.createElement("div", {
          className: "form-group"
        }, /*#__PURE__*/_react.default.createElement("p", {
          className: "error-message alert alert-danger alert-danger-alt milli",
          role: "alert"
        }, this.state.errorMessage)) : "", /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_index.InputControl, {
          fieldName: "wv-login-form-user",
          fieldTitle: "Email",
          fieldPlaceholder: "name@example.com",
          fieldClasses: "wvus-field-login",
          formMethods: props.formMethods,
          validators: [_index2.validateRequired, _index2.validateEmail]
        }), /*#__PURE__*/_react.default.createElement(_index.InputControl, {
          fieldName: "wv-login-form-pass",
          fieldTitle: "Password",
          fieldType: "password",
          fieldPlaceholder: "",
          fieldClasses: "wvus-field-login",
          formMethods: props.formMethods,
          validators: [_index2.validateRequired, (0, _index2.validateMin)(6)]
        })), /*#__PURE__*/_react.default.createElement("div", {
          className: "wv-login-form-bottom-row"
        }, /*#__PURE__*/_react.default.createElement("p", {
          className: "wv-login-form-bottom-child wv-login-submit-group"
        }, /*#__PURE__*/_react.default.createElement("button", {
          type: "submit",
          id: "wv-login-form-submit",
          className: buttonClass,
          disabled: submitDisabled,
          onClick: this.handleFormSubmit.bind(this)
        }, signInIcon, " Sign In")), /*#__PURE__*/_react.default.createElement("div", {
          className: "wv-login-form-bottom-child wv-login-form-bottom-help"
        }, /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement("a", {
          href: "#"
        }, "Forgot Password?")))));
      }
    }]);

    return LoginForm;
  }(_react.default.Component);

  const Form = (0, _index.WVUSForm)(LoginForm);
  (0, _react2.storiesOf)("Example Forms", module).add("Login Form", () => /*#__PURE__*/_react.default.createElement(Form, null));
});