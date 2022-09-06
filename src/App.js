import './wdyr';
import './App.css';

import {useMemo, useState} from 'react';

export function MyComponent() {
  const [number, setNumber] = useState(1);
  const [inc, setInc] = useState(0);

  const factorialResult = useMemo(() => calculateFactorial(number) , [number]);
  const onChange = event => {
    setNumber(Number(event.target.value));
  };
  const onClick = () => setInc(i => i + 1);

  return (
      <>
        Factorial of the number
        <input type="number" value={number} onChange={onChange} />
        is {factorialResult}
        <button onClick={onClick}>Increment</button> <span>{inc}</span>
      </>
  );
}

function calculateFactorial(number) {
  console.log('calculateFactorial called!');
  return number <= 0 ? 1 : number * calculateFactorial(number - 1);
}

function App() {
  return (
    <div className="App">
      <MyComponent/>
    </div>
  );
}

export default App;
