import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import UserRegistration from '../UserRegistration';


test('UserRegistration component renders', () => {
  render(<UserRegistration />);
  const usernameInput = screen.getByPlaceholderText('Username');
  const emailInput = screen.getByPlaceholderText('Email');
  const passwordInput = screen.getByPlaceholderText('Password');
  const registerButton = screen.getByText('Register');

  expect(usernameInput).toBeInTheDocument();
  expect(emailInput).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();
  expect(registerButton).toBeInTheDocument();
});

test('UserRegistration form input validation', () => {
  render(<UserRegistration />);
  const usernameInput = screen.getByPlaceholderText('Username');
  const emailInput = screen.getByPlaceholderText('Email');
  const passwordInput = screen.getByPlaceholderText('Password');

  fireEvent.change(usernameInput, { target: { value: 'fatema' } });
  fireEvent.change(emailInput, { target: { value: 'adsds@gmail.com' } });
  fireEvent.change(passwordInput, { target: { value: '123456' } });

  // Assert that error messages are displayed or other validation logic is working
});
