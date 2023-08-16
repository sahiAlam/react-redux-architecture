import Counter from "./components/Counter";
import "./styles.css";

import { useDispatch } from "react-redux";

export default function App() {
  const dispatch = useDispatch();

  return (
    <div className="App">
      <button onClick={(e) => dispatch({ type: "PLUS" })}>Increment</button>
      <Counter />
      <button onClick={(e) => dispatch({ type: "MINUS" })}>Decrement</button>
    </div>
  );
}
