import { Timer } from "./Timer";
import { useState } from "react";

export const TimerPadre = () => {
  const [milisegundos, setMillisegundos] = useState(1000);

  return (
    <>
      <span>{milisegundos}</span>
      <br />
      <button
        onClick={() => setMillisegundos(1000)}
        className="btn btn-outline-success"
      >
        1000
      </button>
      <button
        onClick={() => setMillisegundos(2000)}
        className="btn btn-outline-success"
      >
        2000
      </button>
      <Timer milisegundos={milisegundos} />
    </>
  );
};
