import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState<number>(0);

  const handleClick = () => {
    setCount((c) => c + 1);
  };

  return (
    <div className="App">
      <div className="card">
        <button type="button" onClick={handleClick}>
          count is {count}
        </button>
      </div>
    </div>
  );
}

export default App;
