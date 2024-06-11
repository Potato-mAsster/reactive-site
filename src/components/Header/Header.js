import React, { useContext } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { ThemeContext } from "../ThemeContext";

export default function Header({ userName }) {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <div>
      <div className={darkMode ? "header-container-dark" : "header-container"}>
        <div className="header-logo">
          <Link to="/">
            <img
              src="https://pr-cy.ru/assets/node/images/b2ba662b04f7fe349133a1ad75542c12.svg"
              alt="React Logo"
            />
          </Link>
        </div>

        <div className="header-tools">
          <Link to="/tools">Инструменты</Link>
        </div>

        <div className="header-dark-light">
          <a href="#" onClick={toggleDarkMode}>
            {darkMode ? "Светлая тема" : "Темная тема"}
          </a>
        </div>

        <div className="log-in">
          {userName ? (
            <Link to="/login">{userName}</Link>
          ) : (
            <Link to="/login">Войти</Link>
          )}
          <p></p>
        </div>
      </div>
      <div className={darkMode ? "home-container-dark" : "home-container"}>
        <div className="home-logo">
          <img
            src="https://pr-cy.ru/assets/img/apps/React.svg"
            alt="React Home Logo"
          />
        </div>

        <div className={darkMode ? "home-text-dark" : "home-text"}>
          <h1>React</h1>
          <a href="https://pr-cy.ru/technologies-category/javascript-frameworks/">
            Фреймворки JavaScript
          </a>
        </div>
      </div>
    </div>
  );
}
