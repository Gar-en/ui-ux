import { useState } from "react";
import "./App.css";

function Counter2() {
    const [count, setCount] = useState(1000)
    const [str, setStr] = useState("Нажимайте минус, чтобы уменишить счётчик.")
    
    if (count <= 0) {
        setCount(1000)
    }
    return (
        <div className="App">
        <header className="App-header">
            <div className="round no-select">
                <h1>{count}</h1>
            </div>
            <div className="button-wrapper no-select">
                <button className="btn1" onClick={() => setCount(count - 7)}>-</button>
                <button className="btn2">X</button>
            </div>
            
            <p className="no-select">{str}</p>
        </header>
        </div>
    );
}

export default Counter2;
