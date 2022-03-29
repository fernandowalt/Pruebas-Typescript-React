import { useState } from "react";

export const Counter = () => {
  const [counter, setCounter] = useState(0);
  const increment = (e: number): void => {
    setCounter(counter + e);
  };

  return (
    <div className="mt-5 ">
      <h3>React + Typescript</h3>
      <span>valor: {counter}</span>
      <br />
      <button
        className="btn btn-outline-primary mt-2"
        onClick={() => increment(1)}
      >
        +1
      </button>
      <button
        className="btn btn-outline-primary mt-2"
        onClick={() => increment(2)}
      >
        +2
      </button>
      <button
        className="btn btn-outline-danger mt-2"
        onClick={() => setCounter(0)}
      >
        Reset
      </button>
    </div>
  );
};
