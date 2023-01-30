import React from "react";
import "./Login.css";

function Login() {
  return (
    <React.Fragment>
      <p>Login to access the full dashboard</p>
      <form>
        <label htmlFor="email">Email:</label>
        <input type="email" name="email">
          {" "}
        </input>
        <label htmlFor="password">password:</label>
        <input type="password" name="password"></input>
        <button>OK</button>
      </form>
    </React.Fragment>
  );
}

export default Login;
