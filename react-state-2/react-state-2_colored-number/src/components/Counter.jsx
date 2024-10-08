import ColoredNumber from "./ColoredNumber";
import "./Counter.css";
import { useState } from "react";


export default function Counter() {
  const [count, setCount] = useState(0);
  
  function handleClickIncrement() {
    setCount (c => c + 1)
  }

  function handleClickDecrement() {
    setCount (c => c - 1)
  }

  return (
    <div className="counter">
      <h1>Colored Number</h1>
      <ColoredNumber value={count} />
      <div className="counter__buttons-container">
        <button onClick={handleClickIncrement}
          type="button"
          className="counter__button"
          aria-label="increment count"
        >
          +
        </button>
        <button onClick={handleClickDecrement}
          type="button"
          className="counter__button"
          aria-label="decrement count"
        >
          -
        </button>
      </div>
    </div>
  );
}
