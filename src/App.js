import './App.css';
import { useState } from 'react';

function App() {
  const [buttonColor, setButtonColor] = useState('red');
  const [disabled, setDisabled] = useState(false);
  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';
  return (
    <div className="container">
      <div>
        <button style={{ backgroundColor: disabled ? 'grey' : buttonColor }} onClick={() => setButtonColor(newButtonColor)} disabled={disabled}>
          Change to {newButtonColor}
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
