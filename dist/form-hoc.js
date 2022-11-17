require("core-js/modules/es.error.cause.js");
require("core-js/modules/es.reflect.to-string-tag.js");
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "core-js/modules/esnext.async-iterator.map.js", "core-js/modules/esnext.iterator.map.js", "core-js/modules/esnext.async-iterator.filter.js", "core-js/modules/esnext.iterator.constructor.js", "core-js/modules/esnext.iterator.filter.js", "react", "./validation/validation-helpers.js", "lodash.merge", "./misc/analytics-helpers"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("core-js/modules/esnext.async-iterator.map.js"), require("core-js/modules/esnext.iterator.map.js"), require("core-js/modules/esnext.async-iterator.filter.js"), require("core-js/modules/esnext.iterator.constructor.js"), require("core-js/modules/esnext.iterator.filter.js"), require("react"), require("./validation/validation-helpers.js"), require("lodash.merge"), require("./misc/analytics-helpers"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.esnextAsyncIteratorMap, global.esnextIteratorMap, global.esnextAsyncIteratorFilter, global.esnextIteratorConstructor, global.esnextIteratorFilter, global.react, global.validationHelpers, global.lodash, global.analyticsHelpers);
    global.formHoc = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _esnextAsyncIteratorMap, _esnextIteratorMap, _esnextAsyncIteratorFilter, _esnextIteratorConstructor, _esnextIteratorFilter, _react, _validationHelpers, _lodash, _analyticsHelpers) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _react = _interopRequireDefault(_react);
  _lodash = _interopRequireDefault(_lodash);
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
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
  /* eslint-disable react/display-name */
  /**
   * @module WVUSForm
   */
  var _default = WVUSForm;
  /**
   * Form High Order Component
   * @alias module:WVUSForm
   * @description attaches functions to a custom form
   * and keeps track of form state and validity
   * @param {Object} WrapperForm  Custom form to be wrapped
   * @returns {Object} Component Wrapped react component
   */
  _exports.default = _default;
  function WVUSForm(WrapperForm) {
    return /*#__PURE__*/function (_React$Component) {
      _inherits(_class, _React$Component);
      var _super = _createSuper(_class);
      function _class(props) {
        var _this;
        _classCallCheck(this, _class);
        _this = _super.call(this, props);
        _this.props = props;
        _this.handleNextStep = props.handleNextStep;
        _this.state = {
          fields: {},
          formValid: false
        };
        _this.formName = _this.props.formName || "WVUSForm";
        _this.addFieldToState = _this.addFieldToState.bind(_assertThisInitialized(_this));
        return _this;
      }
      _createClass(_class, [{
        key: "componentDidUpdate",
        value: function componentDidUpdate(prevProps, prevState) {
          // Fires wvusClientMessage error event on every unique form error message show to user
          (0, _analyticsHelpers.checkForNewFormErrorsAndFireAnalytics)(this.formName, this.state, prevState);
        }

        /**
         * Sets initial state of a field,
         * used by all controls for state setup
         * @private
         * @param {string} fieldName name of field
         * @param {string} fieldValue initial value
         * @param {bool} secondInteraction whether field is initially touched
         * @param {bool} isValid whether field is initially valid
         * @param {array} validators list of validation functions
         * @param {bool} optional whether field is optional
         */
      }, {
        key: "addFieldToState",
        value: function addFieldToState(fieldName) {
          let fieldValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
          let secondInteraction = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
          let isValid = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
          let validators = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [];
          let optional = arguments.length > 5 ? arguments[5] : undefined;
          const newState = {
            fields: {}
          };
          newState.fields[fieldName] = {
            value: fieldValue,
            isValid,
            secondInteraction,
            errorMessage: "",
            validators,
            optional
          };
          this.setState(prevState => {
            const finalState = (0, _lodash.default)({}, prevState, newState);
            this.validationHelper = (0, _validationHelpers.createValidationHelper)(finalState["fields"]);
            return finalState;
          });
        }

        /**
         * Gets field state for a field
         * @param {string} fieldName field to get state for
         * @returns {object} field state
         */
      }, {
        key: "getFieldState",
        value: function getFieldState(fieldName) {
          return {
            ...this.state.fields[fieldName]
          } || {}; // returns copy to prevent mutation
        }

        /**
         * Gets all form state
         * @returns {object} form state
         */
      }, {
        key: "getFormState",
        value: function getFormState() {
          return {
            ...this.state
          }; // returns copy to prevent mutation
        }

        /**
         * Reset the field state to default for a field
         * Note: for Checkboxes and Radio controls,
         * you need to pass the original default value
         * (as default empty string is not valid for those field types)
         * @param {string} fieldName field name to reset
         * @param {string} fieldValue value to reset field to (optional)
         */
      }, {
        key: "resetField",
        value: function resetField(fieldName) {
          let fieldValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
          if (!this.state.fields[fieldName]) return;
          const newState = {
            fields: {
              [fieldName]: {
                value: fieldValue,
                secondInteraction: false,
                isValid: false
              }
            },
            formValid: false
          };

          // Update Value
          this.setState(prevState => {
            return (0, _lodash.default)({}, prevState, newState);
          });
        }

        /**
         * Validate a field
         * Primarily used internally by change handlers
         * @private
         * @param {string} fieldName fieldname to validate
         * @param {string} fieldValue fieldvalue to be validate
         * @returns {object} new fieldstate with validity updated
         */
      }, {
        key: "validateField",
        value: function validateField(fieldName, fieldValue) {
          this.validationHelper.validate(fieldName, fieldValue);
          let isValid = this.validationHelper.fieldIsValid(fieldName);
          const newFieldState = {
            fields: {}
          };
          newFieldState.fields[fieldName] = {
            isValid: isValid,
            errorMessage: this.validationHelper.firstErrorMessage(fieldName)
          };
          return newFieldState;
        }

        /**
         * Goes through all fields in state and updates their validity
         * Primarily used internally by validateForm
         * @param {bool} forceSecondInteraction force all fields to have secondInteraction of true,
         * which makes all error messages show. (Defaults to true)
         * @private
         */
      }, {
        key: "validateFields",
        value: function validateFields() {
          let forceSecondInteraction = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
          const fieldStateUpdate = {
            fields: {}
          };
          Object.keys(this.state.fields).map(fieldName => {
            let isValid = this.validationHelper.fieldIsValid(fieldName);
            this.validationHelper.firstErrorMessage(fieldName);
            fieldStateUpdate["fields"][fieldName] = {
              isValid: isValid,
              errorMessage: this.validationHelper.firstErrorMessage(fieldName)
            };
            if (forceSecondInteraction) {
              fieldStateUpdate["fields"][fieldName]["secondInteraction"] = true;
            }
          });
          this.updateFieldsState(fieldStateUpdate);
        }

        /**
         * Validates a form/subform
         * Note: Can be used to trigger validation of an entire form based
         * on some other interaction. By default will show all error messages, unless forceSecondInteraction is false.
         * This works for a subform because the Validation Helper's
         * validate method ignores form names unregistered in the config
         * @param {bool} forceSecondInteraction force all fields to have secondInteraction of true,
         * which makes all error messages show. (Defaults to true)
         * @returns {bool} validity of form
         */
      }, {
        key: "validateForm",
        value: function validateForm() {
          let forceSecondInteraction = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
          Object.keys(this.state.fields).map(fieldName => {
            const fieldValue = this.state.fields[fieldName].value;
            this.validationHelper.validate(fieldName, fieldValue);
          });
          const formValid = this.validationHelper.formIsValid();
          this.validateFields(forceSecondInteraction);
          return formValid;
        }

        /**
         * Update Field State
         * @private
         * @param {Object} fieldsState new state object to merge w/ existing stage
         */
      }, {
        key: "updateFieldsState",
        value: function updateFieldsState(fieldsState) {
          this.setState((prevState, props) => {
            const newFieldsState = (0, _lodash.default)({}, prevState.fields, fieldsState["fields"]);
            const formValid = this.getFormValid(newFieldsState);
            return (0, _lodash.default)({}, {
              fields: newFieldsState
            }, {
              formValid
            });
          });
        }

        /**
         * Get validity of current form
         * @private
         * @param {Object} newFieldsState field state to validate
         * @returns {bool} validity of entire form
         */
      }, {
        key: "getFormValid",
        value: function getFormValid(newFieldsState) {
          return Object.keys(newFieldsState).filter(field => !newFieldsState[field].isValid).length < 1;
        }

        /**
         * Checks if form is valid
         * @returns {bool} validity of entire form
         */
      }, {
        key: "isFormValid",
        value: function isFormValid() {
          return this.getFormValid(this.state.fields);
        }

        /**
         * Checks if form is completely empty
         * @returns {bool} validity of entire form
         */
      }, {
        key: "isFormEmpty",
        value: function isFormEmpty() {
          return Object.keys(this.state.fields).filter(field => !(this.state.fields[field].value === "")).length < 1;
        }

        /**
         * Primary value change handler for onChange event
         * Does NOT update the secondInteraction value
         * @param {Object} e React event object
         * @param {Function} callback function to be called after handler
         */
      }, {
        key: "handleValueChange",
        value: function handleValueChange(e) {
          let callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
          const fieldName = e.target.name;
          const fieldValue = e.target.type === "checkbox" ? e.target.checked : e.target.value;
          this.setValueChange(fieldName, fieldValue, callback);
        }

        /**
         * Primary value setting handler, called by handleValueChange
         * Great for use with custom event handlers
         * Does NOT update the secondInteraction value
         * @param {string} fieldName name of field to update
         * @param {string} fieldValue new value of field
         * @param {string} callback function to call after value update
         */
      }, {
        key: "setValueChange",
        value: function setValueChange(fieldName, fieldValue) {
          let callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
          const newState = {
            fields: {}
          };
          newState.fields[fieldName] = {
            value: fieldValue
          };
          // Update Value
          this.setState(prevState => {
            return (0, _lodash.default)({}, prevState, newState);
          });

          // Validate Field
          this.setState(prevState => {
            const newFieldState = this.validateField(fieldName, fieldValue);
            return (0, _lodash.default)({}, prevState, newFieldState);
          });

          // Validate Form
          this.setState(prevState => {
            const formValid = this.getFormValid(prevState["fields"]);
            return (0, _lodash.default)({}, prevState, {
              formValid
            });
          }, callback); //Callback important for validation on Last item
        }

        /**
         * Handles blur event on fields
         * Update the secondInteraction value to true,
         * since used with onBlur event
         * @param {Object} e React synthetic event object
         */
      }, {
        key: "handleBlur",
        value: function handleBlur(e) {
          const fieldName = e.target.name;
          const fieldValue = e.target.value;
          const secondInteractionState = {
            fields: {}
          };

          // Only add SecondInteraction if not already added
          if (typeof this.state.fields[e.target.name] !== "undefined" && !this.state.fields[e.target.name].secondInteraction) {
            secondInteractionState.fields[fieldName] = {
              secondInteraction: true
            };
          }

          // Validate this field
          this.setState(prevState => {
            const newFieldState = this.validateField(fieldName, fieldValue);
            return (0, _lodash.default)({}, prevState, newFieldState, secondInteractionState);
          });

          // Validate Form
          this.setState(prevState => {
            const formValid = this.getFormValid(prevState["fields"]);
            return (0, _lodash.default)({}, prevState, {
              formValid
            });
          });
        }

        /**
         * Determines whether to show success ui states
         * @param {object} fieldState field's state to check for success
         * @returns {bool} whether to show success ui states to user
         */
      }, {
        key: "showUISuccess",
        value: function showUISuccess(fieldState) {
          const optionalAndEmpty = fieldState.optional && fieldState.value === "";
          return fieldState.isValid && !optionalAndEmpty;
        }

        /**
         * Determines whether to show error ui states
         * @param {object} fieldState field's state to check for error
         * @returns {bool} whether to show error ui states to user
         */
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
          return /*#__PURE__*/_react.default.createElement("div", {
            className: this.props.formWrapperClassName ? this.props.formWrapperClassName : ""
          }, /*#__PURE__*/_react.default.createElement(WrapperForm, _extends({}, this.props, {
            formMethods: this.formMethods,
            formState: this.state,
            handleNextStep: this.handleNextStep,
            selectedForm: this.props.selectedForm,
            updateSubFormValidity: this.props.updateSubFormValidity
          })));
        }
      }]);
      return _class;
    }(_react.default.Component);
  }
});