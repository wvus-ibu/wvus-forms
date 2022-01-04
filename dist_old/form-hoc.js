(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "./validation/validation-helpers.js", "lodash.merge", "./misc/analytics-helpers"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("./validation/validation-helpers.js"), require("lodash.merge"), require("./misc/analytics-helpers"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.validationHelpers, global.lodash, global.analyticsHelpers);
    global.formHoc = mod.exports;
  }
})(this, function (exports, _react, _validationHelpers, _lodash, _analyticsHelpers) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _lodash2 = _interopRequireDefault(_lodash);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

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

  exports.default = WVUSForm;


  /**
   * Form High Order Component
   * @alias module:WVUSForm
   * @description attaches functions to a custom form
   * and keeps track of form state and validity
   * @param {Object} WrapperForm  Custom form to be wrapped
   * @returns {Object} Component Wrapped react component
   */
  function WVUSForm(WrapperForm) {
    return function (_React$Component) {
      _inherits(_class, _React$Component);

      function _class(props) {
        _classCallCheck(this, _class);

        var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));

        _this.props = props;
        _this.handleNextStep = props.handleNextStep;
        _this.state = {
          fields: {},
          formValid: false
        };
        _this.formName = _this.props.formName || "WVUSForm";

        _this.addFieldToState = _this.addFieldToState.bind(_this);
        return _this;
      }

      _createClass(_class, [{
        key: "componentDidUpdate",
        value: function componentDidUpdate(prevProps, prevState) {
          // Fires wvusClientMessage error event on every unique form error message show to user
          (0, _analyticsHelpers.checkForNewFormErrorsAndFireAnalytics)(this.formName, this.state, prevState);
        }
      }, {
        key: "addFieldToState",
        value: function addFieldToState(fieldName) {
          var fieldValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
          var secondInteraction = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
          var isValid = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

          var _this2 = this;

          var validators = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [];
          var optional = arguments[5];

          var newState = { fields: {} };
          newState.fields[fieldName] = {
            value: fieldValue,
            isValid: isValid,
            secondInteraction: secondInteraction,
            errorMessage: "",
            validators: validators,
            optional: optional
          };

          this.setState(function (prevState) {
            var finalState = (0, _lodash2.default)({}, prevState, newState);
            _this2.validationHelper = (0, _validationHelpers.createValidationHelper)(finalState["fields"]);
            return finalState;
          });
        }
      }, {
        key: "getFieldState",
        value: function getFieldState(fieldName) {
          return _extends({}, this.state.fields[fieldName]) || {}; // returns copy to prevent mutation
        }
      }, {
        key: "getFormState",
        value: function getFormState() {
          return _extends({}, this.state); // returns copy to prevent mutation
        }
      }, {
        key: "resetField",
        value: function resetField(fieldName) {
          var fieldValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";

          if (!this.state.fields[fieldName]) return;

          var newState = {
            fields: _defineProperty({}, fieldName, {
              value: fieldValue,
              secondInteraction: false,
              isValid: false
            }),
            formValid: false
          };

          // Update Value
          this.setState(function (prevState) {
            return (0, _lodash2.default)({}, prevState, newState);
          });
        }
      }, {
        key: "validateField",
        value: function validateField(fieldName, fieldValue) {
          this.validationHelper.validate(fieldName, fieldValue);
          var isValid = this.validationHelper.fieldIsValid(fieldName);

          var newFieldState = { fields: {} };
          newFieldState.fields[fieldName] = {
            isValid: isValid,
            errorMessage: this.validationHelper.firstErrorMessage(fieldName)
          };
          return newFieldState;
        }
      }, {
        key: "validateFields",
        value: function validateFields() {
          var _this3 = this;

          var forceSecondInteraction = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

          var fieldStateUpdate = { fields: {} };
          Object.keys(this.state.fields).map(function (fieldName) {
            var isValid = _this3.validationHelper.fieldIsValid(fieldName);
            _this3.validationHelper.firstErrorMessage(fieldName);
            fieldStateUpdate["fields"][fieldName] = {
              isValid: isValid,
              errorMessage: _this3.validationHelper.firstErrorMessage(fieldName)
            };
            if (forceSecondInteraction) {
              fieldStateUpdate["fields"][fieldName]["secondInteraction"] = true;
            }
          });
          this.updateFieldsState(fieldStateUpdate);
        }
      }, {
        key: "validateForm",
        value: function validateForm() {
          var _this4 = this;

          var forceSecondInteraction = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

          Object.keys(this.state.fields).map(function (fieldName) {
            var fieldValue = _this4.state.fields[fieldName].value;
            _this4.validationHelper.validate(fieldName, fieldValue);
          });

          var formValid = this.validationHelper.formIsValid();

          this.validateFields(forceSecondInteraction);

          return formValid;
        }
      }, {
        key: "updateFieldsState",
        value: function updateFieldsState(fieldsState) {
          var _this5 = this;

          this.setState(function (prevState, props) {
            var newFieldsState = (0, _lodash2.default)({}, prevState.fields, fieldsState["fields"]);
            var formValid = _this5.getFormValid(newFieldsState);
            return (0, _lodash2.default)({}, { fields: newFieldsState }, { formValid: formValid });
          });
        }
      }, {
        key: "getFormValid",
        value: function getFormValid(newFieldsState) {
          return Object.keys(newFieldsState).filter(function (field) {
            return !newFieldsState[field].isValid;
          }).length < 1;
        }
      }, {
        key: "isFormValid",
        value: function isFormValid() {
          return this.getFormValid(this.state.fields);
        }
      }, {
        key: "isFormEmpty",
        value: function isFormEmpty() {
          var _this6 = this;

          return Object.keys(this.state.fields).filter(function (field) {
            return !(_this6.state.fields[field].value === "");
          }).length < 1;
        }
      }, {
        key: "handleValueChange",
        value: function handleValueChange(e) {
          var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

          var fieldName = e.target.name;
          var fieldValue = e.target.type === "checkbox" ? e.target.checked : e.target.value;
          this.setValueChange(fieldName, fieldValue, callback);
        }
      }, {
        key: "setValueChange",
        value: function setValueChange(fieldName, fieldValue) {
          var _this7 = this;

          var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

          var newState = { fields: {} };
          newState.fields[fieldName] = {
            value: fieldValue
          };
          // Update Value
          this.setState(function (prevState) {
            return (0, _lodash2.default)({}, prevState, newState);
          });

          // Validate Field
          this.setState(function (prevState) {
            var newFieldState = _this7.validateField(fieldName, fieldValue);
            return (0, _lodash2.default)({}, prevState, newFieldState);
          });

          // Validate Form
          this.setState(function (prevState) {
            var formValid = _this7.getFormValid(prevState["fields"]);
            return (0, _lodash2.default)({}, prevState, { formValid: formValid });
          }, callback); //Callback important for validation on Last item
        }
      }, {
        key: "handleBlur",
        value: function handleBlur(e) {
          var _this8 = this;

          var fieldName = e.target.name;
          var fieldValue = e.target.value;

          var secondInteractionState = { fields: {} };

          // Only add SecondInteraction if not already added
          if (typeof this.state.fields[e.target.name] !== "undefined" && !this.state.fields[e.target.name].secondInteraction) {
            secondInteractionState.fields[fieldName] = {
              secondInteraction: true
            };
          }

          // Validate this field
          this.setState(function (prevState) {
            var newFieldState = _this8.validateField(fieldName, fieldValue);
            return (0, _lodash2.default)({}, prevState, newFieldState, secondInteractionState);
          });

          // Validate Form
          this.setState(function (prevState) {
            var formValid = _this8.getFormValid(prevState["fields"]);
            return (0, _lodash2.default)({}, prevState, { formValid: formValid });
          });
        }
      }, {
        key: "showUISuccess",
        value: function showUISuccess(fieldState) {
          var optionalAndEmpty = fieldState.optional && fieldState.value === "";
          return fieldState.isValid && !optionalAndEmpty;
        }
      }, {
        key: "showUIError",
        value: function showUIError(fieldState) {
          return !fieldState.isValid && fieldState.secondInteraction;
        }
      }, {
        key: "render",
        value: function render() {
          this.formMethods = {
            addFieldToState: this.addFieldToState.bind(this),
            getFieldState: this.getFieldState.bind(this),
            getFormState: this.getFormState.bind(this),
            resetField: this.resetField.bind(this),
            validateField: this.validateField.bind(this),
            validateFields: this.validateFields.bind(this),
            validateForm: this.validateForm.bind(this),
            updateFieldsState: this.updateFieldsState.bind(this),
            getFormValid: this.getFormValid.bind(this),
            isFormEmpty: this.isFormEmpty.bind(this),
            isFormValid: this.isFormValid.bind(this),
            handleValueChange: this.handleValueChange.bind(this),
            setValueChange: this.setValueChange.bind(this),
            handleBlur: this.handleBlur.bind(this),
            showUISuccess: this.showUISuccess.bind(this),
            showUIError: this.showUIError.bind(this)
          };

          return _react2.default.createElement(
            "div",
            {
              className: this.props.formWrapperClassName ? this.props.formWrapperClassName : ""
            },
            _react2.default.createElement(WrapperForm, _extends({}, this.props, {
              formMethods: this.formMethods,
              formState: this.state,
              handleNextStep: this.handleNextStep,
              selectedForm: this.props.selectedForm,
              updateSubFormValidity: this.props.updateSubFormValidity
            }))
          );
        }
      }]);

      return _class;
    }(_react2.default.Component);
  }
});