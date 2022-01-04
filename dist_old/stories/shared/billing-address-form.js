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
})(this, function (exports, _react, _index) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.BillingInfoForm = undefined;

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var BillingInfoForm = function (_Component) {
    _inherits(BillingInfoForm, _Component);

    function BillingInfoForm(props) {
      _classCallCheck(this, BillingInfoForm);

      var _this = _possibleConstructorReturn(this, (BillingInfoForm.__proto__ || Object.getPrototypeOf(BillingInfoForm)).call(this, props));

      _this.handleFormSubmit = _this.handleFormSubmit.bind(_this);
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
        var formMethods = this.props.formMethods;

        var submitDisabled = !formMethods.isFormValid();
        return _react2.default.createElement(
          "form",
          null,
          _react2.default.createElement(
            "h2",
            null,
            "Billing Info Form"
          ),
          _react2.default.createElement(_index.InputControl, {
            labelClasses: "first-name-label",
            inputClasses: "first-name-input",
            fieldName: "fname",
            fieldTitle: "First Name",
            fieldClasses: "wvus-field-50",
            formMethods: formMethods,
            validators: [_index.validateRequired]
          }),
          _react2.default.createElement(_index.InputControl, {
            fieldName: "lname",
            fieldTitle: "Last Name",
            fieldClasses: "wvus-field-50 wvus-field--end",
            formMethods: formMethods,
            validators: [_index.validateRequired]
          }),
          _react2.default.createElement(_index.InputControl, {
            fieldName: "address1",
            fieldTitle: "Mailing Address Line 1",
            formMethods: formMethods,
            validators: [_index.validateRequired]
          }),
          _react2.default.createElement(_index.InputControl, {
            fieldName: "address2",
            fieldTitle: "Mailing Address Line 2",
            optional: true,
            isValid: true,
            secondInteraction: false,
            formMethods: formMethods,
            validators: []
          }),
          _react2.default.createElement(_index.InputControl, {
            fieldName: "city",
            fieldTitle: "City",
            fieldClasses: "wvus-field-33",
            formMethods: formMethods,
            validators: [_index.validateRequired]
          }),
          _react2.default.createElement(_index.SelectControl, {
            fieldName: "state",
            fieldOptions: _index.USStateFieldOptions,
            fieldTitle: "State",
            fieldClasses: "wvus-field-33",
            formMethods: formMethods,
            validators: [_index.validateRequired, (0, _index.validateMin)(2)]
          }),
          _react2.default.createElement(_index.InputControl, {
            fieldName: "zip",
            fieldTitle: "Zip",
            fieldClasses: "wvus-field-33 wvus-field--end",
            formMethods: formMethods,
            validators: [_index.validateRequired, _index.validateZip]
          }),
          _react2.default.createElement(_index.InputControl, {
            fieldName: "email",
            fieldTitle: "Email",
            fieldType: "email",
            fieldClasses: "wvus-field-newletter",
            formMethods: formMethods,
            validators: [_index.validateRequired, _index.validateEmail]
          }),
          _react2.default.createElement(_index.InputControl, {
            fieldName: "phone",
            fieldTitle: "Phone",
            fieldType: "tel",
            fieldClasses: "wvus-field-newletter",
            formMethods: formMethods,
            validators: [_index.validateRequired, _index.validatePhone]
          }),
          _react2.default.createElement(_index.CheckboxControl, {
            fieldName: "optIn",
            fieldValue: true,
            fieldTitle: "Yes, please add me to your email newsletter",
            labelClasses: "optIn-label",
            inputClasses: "optIn-input",
            fieldClasses: "wvus-field-newletter-optin",
            formMethods: formMethods
          }),
          _react2.default.createElement(
            "button",
            {
              type: "submit",
              id: "wv-login-form-submit",
              className: "btn btn-medium btn-secondary",
              disabled: submitDisabled,
              onClick: this.handleFormSubmit
            },
            "Submit"
          )
        );
      }
    }]);

    return BillingInfoForm;
  }(_react.Component);

  exports.BillingInfoForm = BillingInfoForm;
});