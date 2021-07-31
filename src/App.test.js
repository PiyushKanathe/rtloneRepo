import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('button has the correct initial color', () => {
  render(<App />);
  let colorButton = screen.getByRole('button', { name: 'Change to blue'});
  // Check the button 
  expect(colorButton).toHaveStyle({backgroundColor: 'red'});
  // click the button
  fireEvent.click(colorButton);
  // expect the button to have changed its olor to blue
  expect(colorButton).toHaveStyle({backgroundColor : 'blue'});
  // expect the button to have changed text 'change to red
  expect(colorButton.textContent).toBe('Change to red');
});

test('initial conditions', () => {
  render(<App />);
  // check that button starts out enabled 
  const colorButton = screen.getByRole('button', { name: 'Change to blue'});
  expect(colorButton).toBeEnabled();
  // check that the checkbox starts out unchecked
  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();
})

test('Checkbox disables button on first click and enable on second click', () => {
  render(<App />);
  const checkbox = screen.getByRole('checkbox');
  const button = screen.getByRole('button');

  userEvent.click(checkbox);
  expect(button).toBeDisabled();

  userEvent.click(checkbox);
  expect(button).toBeEnabled()
})