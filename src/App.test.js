import { fireEvent, render, screen } from '@testing-library/react';
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
