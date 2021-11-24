import { render, screen, fireEvent } from '@testing-library/react';
import App, { replaceCamelWithSpaces } from './App';

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
  const colorButton = screen.getByRole('button', { name: 'Change to blue' })
  expect(colorButton).toBeEnabled();
  const checkBox = screen.getByRole('checkbox');
  expect(checkBox).not.toBeChecked();
})

test('checkbox disabled button on first click and enable on second click', () => {
  render(<App />);;
  const checkBox = screen.getByRole('checkbox', { name: 'Disable button' });
  const colorButton = screen.getByRole('button', { name: 'Change to blue' })

  fireEvent.click(checkBox);
  expect(colorButton).toBeDisabled();

  fireEvent.click(checkBox);
  expect(colorButton).not.toBeDisabled();
})

test('button color on when checkbox is checked is grey', () => {
  render(<App />);
  const checkBox = screen.getByRole('checkbox', { name: 'Disable button' });
  const colorButton = screen.getByRole('button', { name: 'Change to blue' });

  fireEvent.click(checkBox)
  expect(colorButton).toHaveStyle({ backgroundColor: 'grey' })
})

test('disabled button have grey background, change back to red "red to grey to red"', () => {
  render(<App />);
  const checkBox = screen.getByRole('checkbox', { name: 'Disable button' });
  const colorButton = screen.getByRole('button', { name: 'Change to blue' });

  fireEvent.click(checkBox)
  expect(colorButton).toHaveStyle({ backgroundColor: 'grey' })

  fireEvent.click(checkBox)
  expect(colorButton).toHaveStyle({ backgroundColor: 'red' })
})
test('disabled button have grey background, change back to blue"blue to grey to blue"', () => {
  render(<App />);
  const checkBox = screen.getByRole('checkbox', { name: 'Disable button' });
  const colorButton = screen.getByRole('button', { name: 'Change to blue' });

  fireEvent.click(colorButton)

  fireEvent.click(checkBox)
  expect(colorButton).toHaveStyle({ backgroundColor: 'grey' })

  fireEvent.click(checkBox)
  expect(colorButton).toHaveStyle({ backgroundColor: 'blue' })
})

describe('spaces before camel-case capital letters', () => {
  test('Works for no inner capital letter', () => {
    expect(replaceCamelWithSpaces('Red')).toBe('Red')
  })
  test('Works for one inner capital letter', () => {
    expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue')
  })
  test('Works for multiple inner capital letter', () => {
    expect(replaceCamelWithSpaces('MidnightVioletRed')).toBe('Midnight Violet Red')
  })
})