import logo from './logo.svg';
import './App.css';
//import Greeting from "./components/pure/greeting";
//import Greetingf from "./components/pure/greetingF";
import TaskList from "./components/container/task_list";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* EJEMPLO DE COMPONENTE DE CLASE */}
        {/* Importamos el Componente propio Greeting.jsx y lo renderizamos*/}
        {/*le pasamos la propiedad name*/}
        {/* <Greeting name="Miryam"></Greeting> */}

        {/* EJEMPLO DE COMPONENTE FUNCIONAL */}
        {/* Componente de ejemplo de componente funcional */}
        {/* <Greetingf name="Miryam"></Greetingf> */}

        {/* Componente de listado de tareas */}
        <TaskList></TaskList>
      </header>
    </div>
  );
}

export default App;
