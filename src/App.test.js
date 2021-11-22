import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('button has correct initial color', () => {
  render(<App />);
  const colorButton = screen.getByRole('button', { name: 'Change to blue' });
  expect(colorButton).toHaveStyle({ backgroundColor: 'red' })
})

test('button has correct initial text', () => {
  render(<App />);
  const colorButton = screen.getByRole('button', { name: 'Change to blue' });
  expect(colorButton).toHaveTextContent('Change to blue')
})
test('button turns blue when clicked', () => {
  render(<App />);
  const colorButton = screen.getByRole('button', { name: 'Change to blue' })
  fireEvent.click(colorButton);
  expect(colorButton).toHaveStyle({ backgroundColor: 'blue' })
  expect(colorButton.textContent).toBe('Change to red')
})

test('initial state - button enable, checkbox unchecked', () => {
  render(<App />);
  const colorButton = screen.getByRole('button', { name : 'Change to blue'})
  expect(colorButton).toBeEnabled();
  const checkBox = screen.getByRole('checkbox');
  expect(checkBox).not.toBeChecked();
})

test('checkbox disabled button on first click and enable on second click', () => {
  render(<App />);;
  const checkBox = screen.getByRole('checkbox');
  const colorButton = screen.getByRole('button', { name: 'Change to blue'})

  fireEvent.click(checkBox);
  expect(colorButton).toBeDisabled();

  fireEvent.click(checkBox);
  expect(colorButton).not.toBeDisabled();
})