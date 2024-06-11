import React, { useState } from "react";
import { Link } from "react-router-dom";
import './LoginPage.css'

function LoginPage({ setUsername }) {
  const [name, setName] = useState("");

  const handleLogin = () => {
    setUsername(name); 
  };

  return (
    <div className="login-page-container">
      <div className="centre">
        <h2>Введите ваше имя</h2>
        <div className="flex">
          <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter name"/>
          <Link
            to={{
              pathname: "/",
              state: { userName: name } 
            }}
          >
            <button onClick={handleLogin} title="Login">Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
