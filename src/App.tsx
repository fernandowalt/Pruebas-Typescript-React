import { ContadorReducer } from "./components/ContadorReducer";
import { Counter } from "./components/Counter";
import { Formulario } from "./components/Formulario";
import { TimerPadre } from "./components/TimerPadre";
import { Usuario } from "./components/Usuario";
import { Todo } from "./Todo";

function App() {
  return (
    <>
      {/* <h1>Hola mundo!!!</h1>
      <hr />
      <Counter />
      <Usuario />

      <h2>UseEffect</h2>
      <hr />
      <TimerPadre />

      <h2>UseReducer</h2>
      <hr />
      <ContadorReducer />

      <h2>Custom hooks</h2>
      <Formulario /> */}

      <Todo />
    </>
  );
}

export default App;
