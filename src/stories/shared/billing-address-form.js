import React, { Component } from "react";
import {
  WVUSForm,
  CheckboxControl,
  SelectControl,
  InputControl,
  validateRequired,
  validateEmail,
  validatePhone,
  validateZip,
  validateMin,
  validateMax,
  validateEmpty,
  USStateFieldOptions
} from "../../index";

class BillingInfoForm extends Component {
  constructor(props) {
    super(props);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit(e) {
    // Handle your form submission however you would like
    e.preventDefault();
    // fail safe to bail if they get around disabled button
    if (!this.props.formMethods.isFormValid()) return false;
  }

  render() {
    const { formMethods } = this.props;
    const submitDisabled = !formMethods.isFormValid();
    return (
      <form>
        <h2>Billing Info Form</h2>
        <InputControl
          labelClasses="first-name-label"
          inputClasses="first-name-input"
          fieldName="fname"
          fieldTitle="First Name"
          fieldClasses="wvus-field-50"
          formMethods={formMethods}
          validators={[validateRequired]}
        />

        <InputControl
          fieldName="lname"
          fieldTitle="Last Name"
          fieldClasses="wvus-field-50 wvus-field--end"
          formMethods={formMethods}
          validators={[validateRequired]}
        />

        <InputControl
          fieldName="address1"
          fieldTitle="Mailing Address Line 1"
          formMethods={formMethods}
          validators={[validateRequired]}
        />

        <InputControl
          fieldName="address2"
          fieldTitle="Mailing Address Line 2"
          optional={true}
          isValid={true}
          secondInteraction={false}
          formMethods={formMethods}
          validators={[]}
        />

        <InputControl
          fieldName="city"
          fieldTitle="City"
          fieldClasses="wvus-field-33"
          formMethods={formMethods}
          validators={[validateRequired]}
        />

        <SelectControl
          fieldName="state"
          fieldOptions={USStateFieldOptions}
          fieldTitle="State"
          fieldClasses="wvus-field-33"
          formMethods={formMethods}
          validators={[validateRequired, validateMin(2)]}
        />

        <InputControl
          fieldName="zip"
          fieldTitle="Zip"
          fieldClasses="wvus-field-33 wvus-field--end"
          formMethods={formMethods}
          validators={[validateRequired, validateZip]}
        />
        <InputControl
          fieldName="email"
          fieldTitle="Email"
          fieldType="email"
          fieldClasses="wvus-field-newletter"
          formMethods={formMethods}
          validators={[validateRequired, validateEmail]}
        />

        <InputControl
          fieldName="phone"
          fieldTitle="Phone"
          fieldType="tel"
          fieldClasses="wvus-field-newletter"
          formMethods={formMethods}
          validators={[validateRequired, validatePhone]}
        />
        <CheckboxControl
          fieldName="optIn"
          fieldValue={true}
          fieldTitle="Yes, please add me to your email newsletter"
          labelClasses="optIn-label"
          inputClasses="optIn-input"
          fieldClasses="wvus-field-newletter-optin"
          formMethods={formMethods}
        />

        <button
          type="submit"
          id="wv-login-form-submit"
          className="btn btn-medium btn-secondary"
          disabled={submitDisabled}
          onClick={this.handleFormSubmit}
        >
          Submit
        </button>
      </form>
    );
  }
}
export { BillingInfoForm };
