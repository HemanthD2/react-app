import React, { useEffect, useState } from "react";
import "./index.css";
//import ReactDOM from "react-dom";

function Calculator() {
  const [n1, setN1] = useState(0);
  const [n2, setN2] = useState(0);
  const [total, setTotal] = useState(0);
  const [final, setFinal] = useState(0);

  useEffect(() => {
    document.title = `Calculator`;
    setFinal(total);
  }, [total]);
  return (
    <center>
      <h1>Calculator</h1>
      <input
        style={{ width: "60px" }}
        type="number"
        onChange={(e) => setN1(+e.target.value)}
      />
      <input
        style={{ width: "60px" }}
        type="number"
        onChange={(e) => setN2(+e.target.value)}
      />
      <div class="button" style={{ fontSize: "20px" }}>
        <button onClick={() => setTotal(n1 + n2)}>+</button>
        <button onClick={() => setTotal(n1 - n2)}>-</button>
        <button onClick={() => setTotal(n1 * n2)}>*</button>
        <button onClick={() => setTotal(n1 / n2)}>/</button>
        <button onClick={() => setTotal(n1 % n2)}>%</button>
        <br />
        <button onClick={() => setTotal(Math.sin(n1))}>sin</button>
        <button onClick={() => setTotal(Math.log(n1))}>log</button>
        <button onClick={() => setTotal(Math.cos(n1))}>cos</button>

        <p>{final}</p>
      </div>
    </center>
  );
}

export default Calculator;
