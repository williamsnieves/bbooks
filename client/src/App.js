import React from "react";
import "./styles/App.css";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import { Router, Redirect } from "@reach/router";

function App() {
  return (
    <div className="App" data-testid="main-container">
      <Router>
      	<Redirect noThrow from="/" to="login"/>
        <Login path="/login" />
        <Dashboard path="/dashboard" />
      </Router>
    </div>
  );
}

export default App;
