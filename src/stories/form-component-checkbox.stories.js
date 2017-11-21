// import React from "react";
// import "swing-ui/dist/css/swing.css";
// import { withInfo } from "@storybook/addon-info";
// import { storiesOf } from "@storybook/react";
// import { action } from "@storybook/addon-actions";

// import WVForm from "../form-hoc.js";
// import CheckboxControl from "../controls/input-control";

// const formMethodsChecked = {
//   addFieldToState: () => {},
//   getFieldState: () => {
//     return {
//       value: true,
//       secondInteraction: false,
//       isValid: true,
//       optional: false,
//       errorMessage: "Error message displays here"
//     };
//   },
//   handleBlur: action("handleblur"),
//   handleValueChange: action("handleValueChange"),
//   showUIError: () => false,
//   showUISuccess: () => false
// };
// const propsChecked = {
//   formMethods: formMethodsChecked
// };

// const SimpleInputForm = props => {
//   return (
//     <form>
//       <CheckboxControl
//         fieldName="fname"
//         fieldTitle="First Name"
//         fieldClasses="custom-class-field-input"
//         formMethods={props.formMethods}
//       />
//     </form>
//   );
// };

// storiesOf("Form Components", module).add("Checkbox Field", () => (
//   <div>
//     <h2>Input - checked</h2>
//     <SimpleInputForm {...propsUntouched} />

//     <h2>Input - showing success state</h2>
//     <p>
//       isValid: true,<br />
//       secondInteraction: false, //only factored into showing error state.<br />
//       showUISuccess() => true,<br />
//       showUIError() => false,
//     </p>
//     <SimpleInputForm {...propsWithSuccess} />
//   </div>
// ));

// // storiesOf("WVUS Form Controls", module).add("Plain Input Field", () => (
// //   <InputControl
// //     fieldPlaceholder="Tim Stehlin"
// //     fieldName="recipient_fname"
// //     fieldTitle="First Name"
// //     fieldClasses="custom-class-field-input"
// //     formMethods={props.formMethods}
// //     validators={[validateRequired]}
// //   />
// // ));
