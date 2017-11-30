# VALIDESSA - Defender of Data

## WVUS Form Validation Library

<p align="center">
  <img src="validessa.png">
</p>

Validessa is a form validation library for WVUS React Apps. Its primary feature
is making validating forms easy with a flexible and extendable validation layer.
Form fields just work, and can even be modified with custom masks, validators,
and more.

## How to use in a React Project

### Installation via NPM

Validessa can be installed via NPM. To include it as a dependency for your React
project, follow these steps:

1. Add `wvus-forms` to your package.json file:

```
  "dependencies": {
    "wvus-forms": "github:wvus-ibu/wvus-forms#[VERSION/BRANCH]"
  }
```

* Example "github:wvus-ibu/wvus-forms#v2.0.0"

2. Run: `npm install --save wvus-forms`
3. Import into your project: `import Validessa from 'wvus-forms';`
4. Now you are ready to use it in your project. See Examples section.

Note: For more information on using Github repos in NPM, see:
[Github Urls](https://docs.npmjs.com/files/package.json#github-urls)

### Examples: How to use

```
// Example Address Form
// @file: BillingInfoForm.js
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
} from "wvus-forms";

class BillingInfoForm extends Component {
  constructor(props) {
    super(props);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit(e) {
    e.preventDefault();
    console.log("form submitted");
    // fail safe to bail if they get around disabled button
    if (!this.props.formMethods.isFormValid()) return false;

    // Now handle your form submission however you would like
  }

  render() {
    const { formMethods } = this.props;
    const submitDisabled = !formMethods.isFormValid();
    return (
      <form>
        <h2>Billing Info Form</h2>
        <InputControl
          fieldName="fname"
          fieldTitle="First Name"
          fieldClasses="wvus-field-50"
          formMethods={formMethods}
          validators={[validateRequired]}
        />

        <InputControl
          fieldName="lname"
          fieldTitle="Last Name"
          fieldClasses="wvus-field-50"
          optional={true}
          isValid={true}
          secondInteraction={false}
          formMethods={formMethods}
          validators={[]}
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
          fieldClasses="my-email-class"
          formMethods={formMethods}
          validators={[validateRequired, validateEmail]}
        />

        <InputControl
          fieldName="phone"
          fieldTitle="Phone"
          fieldType="tel"
          fieldClasses="my-phone-class"
          formMethods={formMethods}
          validators={[validateRequired, validatePhone]}
        />

        <CheckboxControl
          fieldName="optIn"
          fieldValue={true}
          fieldTitle="Yes, please add me to your email newsletter"
          fieldClasses="wvus-field-newsletter-optin"
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

// Render your custom form by passing it to WVUSForm HOC
// @file: App.js
import React, { Component } from "React";
import { WVUSForm } from "wvus-forms";

export default App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    // WVForm is a Higher Order Component that wraps your custom form
    // with form validation and state functionality.
    const MyBillingForm = WVForm(BillingInfoForm);

    return (
      <div class="form-wrapper">
        <MyBillingForm />
      </div>
    )
  }
}
```

For more examples, see the `/stories` folder.

## How to Develop VALIDESSA (JS app)

### Install dev dependencies and run script to watch JS files:

Install dependencies and start storybook dev server:

```
cd app
npm install
npm run storybook #run storybook
npm run test-watch #run unit tests
```

### Development

1. Edit files in `src` folder. Upon saving, Storybook will automatically compile
   and reload the pages.
2. When adding new features, be sure to add corresponding stories to provide
   examples of use and for testing purposes. Note: When you are finished
   developing you will run `npm run prepare` to compile the ES5 version for NPM
   modules use.
3. Keep the Jest tests running in another terminal window as you develop

### Versioning

* When working on Validessa, create a new feature branch with your changes.
  * Follow [Semantic Versioning](http://semver.org/) and name branch name with
    pattern `vX.X.X`
* To test, use the stories in Storybook by executing `npm run storybook`
* You can also test with your app by updating the dependency with the branch
  name:

```
  "dependencies": {
    "wvus-forms": "github:wvus-ibu/wvus-forms#[BRANCH]"
  }
```

* After your feature branch has passed QA, merge to master and tag with next
  version number (i.e. `vX.X.X`)
* See 'How to update' section below to update a property to your new version.

## How to update as dependency in a React App

We use [NPM](https://docs.npmjs.com) with
[Github Urls](https://docs.npmjs.com/files/package.json#github-urls) to import
this library into our different apps. Below is an example of how to update a
react app with a new version of Validessa IMPORTANT: Read Versioning section
above.

### Update Steps

1. Browse to your app folder containing the package.json file
2. If you need to update the version, change the following element in your
   `package.json` file. Tag is in form of vX.X.X (see Versioning above)

```
  "dependencies": {
    "wvus-forms": "github:wvus-ibu/wvus-forms#[TAG_VERSION_NUM]"
  }
```

3. Run: `npm update wvus-forms`

## Release Build Steps

1. `npm run prepare`
2. `npm run build-storybook`
3. Commit and merge to master
4. Add tag with version number (e.g. v2.8.1)
