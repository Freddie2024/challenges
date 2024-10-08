import { useState } from "react";
import "./App.css";

export default function App() {
  // let isActive = false;
  const [isActive, setIsActive] = useState(false)

  function handleClick() {
    // isActive = !isActive;
    // Check that the value changes correctly.
    // console.log(isActive);
    setIsActive(!isActive)
  }

  return (
    <main>
      <div className={`box ${isActive ? "box--active" : ""}`} />
      <button onClick={handleClick}>{isActive ? "Dectivate" : "Activate"}</button>
    </main>
  );
}
