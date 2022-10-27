import { Header } from "./components/Header";
import { Board } from "./containers/Board";
import "./App.css";
import { BoardProvider } from "./contexts/BoardContext";

const App = () => {
  return (
    <div className="app">
      <BoardProvider>
        <Header />
        <Board />
      </BoardProvider>
    </div>
  );
};

export default App;
