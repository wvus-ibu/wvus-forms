import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { SimpleAddressForm } from "./shared/simple-address-form";
import { WVUSForm } from "../index";
const Form = WVUSForm(SimpleAddressForm);

test("Simple Address Form renders correctly", () => {
  render(<Form />);
  expect(screen.getByText('First Name')).toBeInTheDocument();
  expect(screen.getByText('Last Name')).toBeInTheDocument();
  expect(screen.getByText('Mailing Address')).toBeInTheDocument();
  expect(screen.getByText('City')).toBeInTheDocument();
  expect(screen.getByText('State')).toBeInTheDocument();
  expect(screen.getByText('Zip')).toBeInTheDocument();
});