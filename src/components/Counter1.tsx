import { useState } from "react";
import "./App.css";

function Counter1() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <header className="App-header">
        <div className="round no-select">
                <h1>{count}</h1>
            </div>

        <div className="button-wrapper no-select">
            <button className="btn1" onClick={() => setCount(count - 1)}>-</button>
            <button className="btn2" onClick={() => setCount(count + 1)}>+</button>
        </div>
        <p className="no-select">
            Нажимайте минус или плюс, чтобы уменишить или увеличить счётчик соответственно.
        </p>
      </header>
    </div>
  );
}

export default Counter1;
