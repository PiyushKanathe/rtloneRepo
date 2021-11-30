import './App.css';
import { useState } from 'react';

export function replaceCamelWithSpaces(colorName){
  return colorName.replace(/\B([A-Z])\B/g, ' $1')
}

function App() {
  const [buttonColor, setButtonColor] = useState('MediumVioletRed');
  const [disabled, setDisabled] = useState(false);
  const newButtonColor = buttonColor === 'MediumVioletRed' ? 'MidnightBlue' : 'MediumVioletRed';
  return (
    <div className="container">
      <div>
        <button style={{ backgroundColor: disabled ? 'grey' : buttonColor }} onClick={() => setButtonColor(newButtonColor)} disabled={disabled}>
          Change to {replaceCamelWithSpaces(newButtonColor)}
        </button>
      </div>
      <div>
        <input type="checkbox" id="disable-button-checkbox" value={disabled} onChange={(e) => setDisabled(e.target.checked)} aria-checked={disabled} />
        <label htmlFor="disable-button-checkbox">Disable button</label>
      </div>
    </div>
  );
}

export default App;
