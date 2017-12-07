import React from "react";
import "swing-ui/dist/css/swing.css";
import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { WVUSForm, InputControl } from "../index.js";
import {
  validateRequired,
  validateEmail,
  validatePhone,
  validateZip,
  validateMin,
  validateMax
} from "../index";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      errorMessage: ""
    };
  }

  handleFormSubmit(e) {
    e.preventDefault();

    this.setState({ loading: true });
    setTimeout(() => {
      // Show error message
      this.setState({
        errorMessage:
          "Your email and password combination cannot be found. Please try again or reset your password. "
      });
    }, 800);
  }

  render() {
    const props = this.props;
    const signInIcon = <i className="fa fa-lock" aria-hidden="true" />;
    const submitDisabled =
      !this.props.formMethods.isFormValid() || this.state.loading
        ? true
        : false;
    const buttonClass = this.state.loading
      ? "btn btn-medium btn-secondary loading"
      : "btn btn-medium btn-secondary";

    return (
      <div className="user-checkout-login wv-flex-child">
        <h3 className="checkout-step-subheading epsilon text-center">
          Sign In
        </h3>
        {this.state.errorMessage.length > 0 ? (
          <div className="form-group">
            <p
              className="error-message alert alert-danger alert-danger-alt milli"
              role="alert"
            >
              {this.state.errorMessage}
            </p>
          </div>
        ) : (
          ""
        )}

        <div>
          <InputControl
            fieldName="wv-login-form-user"
            fieldTitle="Email"
            fieldPlaceholder="name@example.com"
            fieldClasses="wvus-field-login"
            formMethods={props.formMethods}
            validators={[validateRequired, validateEmail]}
          />
          <InputControl
            fieldName="wv-login-form-pass"
            fieldTitle="Password"
            fieldType="password"
            fieldPlaceholder=""
            fieldClasses="wvus-field-login"
            formMethods={props.formMethods}
            validators={[validateRequired, validateMin(6)]}
          />
        </div>
        <div className="wv-login-form-bottom-row">
          <p className="wv-login-form-bottom-child wv-login-submit-group">
            <button
              type="submit"
              id="wv-login-form-submit"
              className={buttonClass}
              disabled={submitDisabled}
              onClick={this.handleFormSubmit.bind(this)}
            >
              {signInIcon} Sign In
            </button>
          </p>
          <div className="wv-login-form-bottom-child wv-login-form-bottom-help">
            <p>
              <a href="#">Forgot Password?</a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

const Form = WVUSForm(LoginForm);

storiesOf("Example Forms", module).add("Login Form", () => <Form />);
