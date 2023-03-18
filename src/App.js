import "./styles.css";
import { Board } from "./components/Board";

export default function App() {
  return (
    <div className="App">
      <h1>Tic-Tac-Toe</h1>
      <h2>Let's freshen up childhood memories!</h2>
      <Board />
    </div>
  );
}
