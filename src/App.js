import React from "react";
import "./App.css";
import CircleWave from "./CircleWave";

function App() {
  return (
    <div className="App">
      <svg
        width="960"
        height="500"
        // angles={d3.range(0, 2 * Math.PI, Math.PI / 200)}
      >
        <CircleWave
        width={960}
        height={500}
        // angles={d3.range(0, 2 * Math.PI, Math.PI / 200)}
        />
      </svg>
    </div>
  );
}

export default App;
