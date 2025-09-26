import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] = useState("");

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);
  const incrementFive = () => setCount(count + 5);

  return (
    <div className="App">
      <div className="card">
        <h1>Counter App</h1>
        <h2>Count: {count}</h2>

        <div className="buttons">
          <button onClick={increment}>Increment</button>
          <button onClick={decrement}>Decrement</button>
          <button onClick={reset}>Reset</button>
          <button onClick={incrementFive}>Increment Five</button>
        </div>

        <div className="name-inputs">
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Surname"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
          />
        </div>

        <h3>Full Name: {firstName} {surname}</h3>
      </div>
    </div>
  );
}

export default App;
