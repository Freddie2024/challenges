import Counter from "./components/Counter";
import "./App.css";
import { useState } from "react";

export default function App() {
  const [people, setPeople] = useState(0);

 function handleIncrement(onIncrement) {
    setPeople (p => p + 1)
  }

 function handleDecrement(onDecrement) {
    setPeople (p => p - 1)
  }

  return (
    <div className="container">
      <h1>Place a Table Reservation</h1>
      <Counter onIncrement={handleIncrement} onDecrement={handleDecrement}/>
      <p>You are going to reserve a table for {people} people.</p>
    </div>
  );
}
