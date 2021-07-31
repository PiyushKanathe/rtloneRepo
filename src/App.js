import './App.css';
import { useState } from 'react';

function App() {
  const [buttonColor, setButtonColor] = useState('red');
  let newButtonColor = buttonColor === 'red' ? 'blue' : 'red';

  return (
    <div>
      <button style={{ backgroundColor: buttonColor }} onClick={() => setButtonColor(newButtonColor)}>Change to {newButtonColor}</button>
    </div>
  );
}

export default App;
