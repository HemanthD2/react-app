import React, { useState, useEffect } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);
  const clearCounter = () => setCounter(0);

    useEffect(() => {
  document.title = `you clicked ${counter} times`;
   }​​);
  return (
    <div style={{ textAlign: "center", color: "burlywood" }}>
      <p style={{ fontSize: "20px" }}>you clicked increment {counter} times</p>
      <button onClick={() => setCounter(counter + 1)}>+1</button>
      <button onClick={() => setCounter(counter + 10)}>+10</button>
      <button onClick={() => setCounter(counter + 100)}>+100</button>
      <button onClick={() => setCounter(counter - 1)}>-1</button>
      <button onClick={() => setCounter(counter - 10)}>-10</button>
      <button onClick={() => setCounter(counter - 100)}>-100</button>
      <button onClick={clearCounter}>clear </button>
    </div>
  );
}
export default Counter;