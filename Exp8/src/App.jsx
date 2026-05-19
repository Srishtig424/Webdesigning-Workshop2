import { useState } from "react";
import "./App.css";

function App() {

  const [count, setCount] = useState(0);

  return (
    <div className="app-container">

      <div className="counter-card">

        <h1>React Counter App</h1>

        <div className="counter-display">
          {count}
        </div>

        <div className="buttons-container">

          <button
            className="btn"
            onClick={() => setCount(count + 1)}
          >
            Increment
          </button>

          <button
            className="btn"
            onClick={() => setCount(count - 1)}
          >
            Decrement
          </button>

        </div>

        <button
          className="btn"
          onClick={() => setCount(0)}
        >
          Reset
        </button>

      </div>

    </div>
  );
}

export default App;