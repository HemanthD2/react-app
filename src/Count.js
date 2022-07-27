import React, { useState, useEffect } from "react";

function Count() {
  const [counter, setCounter] = useState(0);
  const [counter1, setCounter1] = useState(0);
  const clearCounter = () => setCounter(0);

  useEffect(() => {
    setCounter1(counter);
  }, [counter]);

  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ backgroundColor: "navajowhite" }} className="highlight">
        <h1>This is incrementing and decrementing the Counter</h1>
      </div>
      <div style={{ fontSize: "40px" }}>
        <button onClick={() => setCounter(counter + 1)}>click+1 </button>
        <button onClick={() => setCounter(counter + 10)}>click+10 </button>
        <button onClick={() => setCounter(counter + 100)}>click 100</button>
      </div>
      <div style={{ fontSize: "40px" }}>
        <button onClick={() => setCounter(counter - 1)}>click-1 </button>
        <button onClick={() => setCounter(counter - 10)}>click-10 </button>
        <button onClick={() => setCounter(counter - 100)}>click-100</button>
      </div>
      <div style={{ fontSize: "40px" }}>
        <button onClick={clearCounter}>clear </button>
        <p>{counter1}</p>
      </div>
    </div>
  );
}
export default Count;
