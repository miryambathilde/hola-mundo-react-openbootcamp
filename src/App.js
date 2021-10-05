import logo from './logo.svg';
import './App.css';
//import Greeting from "./components/pure/greeting";
import Greetingf from "./components/pure/greetingF";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* Importamos el Componente propio Greeting.jsx y lo renderizamos*/}
        {/*le pasamos la propiedad name*/}
        {/* <Greeting name="Miryam"></Greeting> */}
        <Greetingf name="Miryam"></Greetingf>
      </header>
    </div>
  );
}

export default App;
