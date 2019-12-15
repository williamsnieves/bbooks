import React from "react";
import "./styles/App.css";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import { Router } from "@reach/router";

function App() {
  return (
    <div className="App" data-testid="main-container">
      <Router>
        <Login path="/login" />
        <Dashboard path="/dashboard" />
      </Router>
    </div>
  );
}

export default App;
