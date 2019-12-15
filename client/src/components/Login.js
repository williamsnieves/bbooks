import React, { useState } from "react";
import { auth } from "../services/auth";
import "../styles/Login.css";

const Login = props => {
  const [logged, setLogged] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onHandleLogin = e => {
    e.preventDefault();
    auth({ username, password })
      .then(resAuth => {
        setLogged(resAuth.data.authorized);
        if (resAuth.data.authorized) {
          props.navigate("/dashboard");
        }
      })
      .catch(err =>
        console.log("handle error to show into app or send to logger")
      );
  };

  return (
    <section className="parent-wrapper">
      <section className="login-wrapper">
        <h1>B Books store</h1>
        <form>
          <input
            type="text"
            placeholder="username"
            onChange={e => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            onChange={e => setPassword(e.target.value)}
          />
          {logged === false && (
            <span className="warning-alert">User does not exist</span>
          )}
          <button onClick={onHandleLogin}>Log in</button>
        </form>
      </section>
    </section>
  );
};

export default Login;
