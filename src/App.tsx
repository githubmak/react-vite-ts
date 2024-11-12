import { useEffect, useState } from "react";
import reactLogo from "@/assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Button from "@/component/Button";
import { minus, plus } from "@/utils";
// import useInterval from "@/hooks/useInterval";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(plus([0.1, 0.2]));
    console.log(minus([0.3, 0.2]));
  }, []);

  // useInterval(() => {
  //   console.log(1);
  // }, 100);
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Button></Button>
    </>
  );
}

export default App;
