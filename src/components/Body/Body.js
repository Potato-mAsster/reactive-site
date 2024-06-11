import Chart from "../Chart/Chart";
import Footer from "../Footer/Footer";
import "./Body.css";
import { ThemeContext } from "../ThemeContext";
import React, { useContext } from "react";

function Body({ userName }) {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className={darkMode ? "body-container-dark" : "body-container"}>
      <Chart />
      <Footer />
    </div>
  );
}

export default Body;
