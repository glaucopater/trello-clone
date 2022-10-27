import { Header } from "./components/Header";
import { Board } from "./containers/Board";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Board />
    </div>
  );
};

export default App;
