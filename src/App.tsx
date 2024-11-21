import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function Demo() {
  return (
    <div>
      <a href="https://vite.dev" target="_blank">
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </a>
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
    </div>
  );
}

function CounterButton(props: { onClick: () => void }) {
  return <button onClick={props.onClick}>Increase count</button>;
}

function ParentComponent() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("#ffffff");

  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "1rem",
          border: "1px solid black",
        }}
      >
        <h2>Color Picker</h2>
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          style={{ width: "100%" }}
        />
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <CounterButton onClick={() => setCount((count) => count + 1)} />
        <div>Count is {count}</div>
      </div>
    </div>
  );
}

export default ParentComponent;
