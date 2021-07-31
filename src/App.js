import './App.css';
import { useState } from 'react';

function App() {
  const [buttonColor, setButtonColor] = useState('red');
  const [checkStatus, setCheckStatus] = useState(false);
  let newButtonColor = buttonColor === 'red' ? 'blue' : 'red';

  return (
    <div>
      <button style={{ backgroundColor: buttonColor }} onClick={() => setButtonColor(newButtonColor)} disabled={checkStatus}>
        Change to {newButtonColor}
      </button>
      <input type="checkbox" onClick={(e) => setCheckStatus(e.target.checked)} />
    </div>
  );
}

export default App;
