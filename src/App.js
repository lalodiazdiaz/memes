import "./App.css";
import React, { useState } from "react";

function App() {
  const [linea1, setLinea1] = useState("");
  const [linea2, setLinea2] = useState("");

  return (
    <div className="App">
      <select>
        <option value="Casa en llamas" key="">
          Casa en llamas
        </option>
        <option value="Futurama" key="">
          Futurama
        </option>
        <option value="History Channel" key="">
          History Channel
        </option>
        <option value="Matrix" key="">
          Matrix
        </option>
        <option value="Philosoraptor" key="">
          Philosoraptor
        </option>
        <option value="Smart Guy" key="">
          Smart Guy
        </option>
      </select>
      <br />
      <input type="text" placeholder="Linea 1" />
      <br />
      <input type="text" placeholder="Linea 2" />
      <br />
      <button>Exportar</button>

      <div>
        <span> {linea1} </span>
        <span> {linea2} </span>
        <img src="" alt="" />
      </div>
    </div>
  );
}

export default App;
