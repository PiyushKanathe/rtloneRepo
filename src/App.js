import './App.css';
import { useState } from 'react';

function App() {
  const [buttonColor, setButtonColor] = useState('red');
  const [checkStatus, setCheckStatus] = useState(false);
  let newButtonColor = buttonColor === 'red' ? 'blue' : 'red';

  return (
    <div>
      <button style={{ backgroundColor: checkStatus ? 'grey' : buttonColor }} onClick={() => setButtonColor(newButtonColor)} disabled={checkStatus}>
        Change to {newButtonColor}
      </button>
      <input type="checkbox" id="disable-button-checkbox" defaultChecked={checkStatus} aria-checked={checkStatus} 
        onClick={(e) => setCheckStatus(e.target.checked)} />
      <label htmlFor="disable-button-checkbox">Disable button</label>
    </div>
  );
}

export default App;