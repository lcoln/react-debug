import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [state, setState] = useState(0)
  useEffect(() => {
    setState(state + 1)
    setState(state + 1)
  }, [])
  return (
    <div className="App">
      {state}
    </div>
  );
}

export default App;
