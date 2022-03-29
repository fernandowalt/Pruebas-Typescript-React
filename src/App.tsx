import { Counter } from "./components/Counter";
import { TimerPadre } from "./components/TimerPadre";
import { Usuario } from "./components/Usuario";


function App() {
  return (
    <>
      <h1>Hola mundo!!!</h1>
      <hr />
      <Counter />
      <Usuario />

      <h2>UseEffect</h2>
      <hr />
      <TimerPadre/>

    </>
  );
}

export default App;
