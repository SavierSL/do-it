import React from "react";
import logo from "./logo.svg";
import "./App.css";
import DoIt from ".//DoIt/DoIt";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <DoIt />
      </div>
    </BrowserRouter>
  );
}

export default App;
