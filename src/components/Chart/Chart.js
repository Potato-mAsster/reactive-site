import React, { useContext } from "react";
import "./Chart.css";
import Top from "../Top/Top";
import graphic from "../../images/graphic.png";
import { ThemeContext } from "../ThemeContext";
import darkGraphic from "../../images/dark-graphic.png"

function Chart() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className={darkMode ? "chart-container-dark" : "chart-container"}>
      <div className={darkMode ? "popular-dark" : "popular"}>
        <div className={darkMode ? "popular-text-dark" : "popular-text"}>
          <h1>Популярность технологии React</h1>
          <p>Технология обнаружена на 4,39% проверенных нами сайтов.</p>
        </div>
        <div className={darkMode ? "graphic-none" : "graphic"}>
        <img src={graphic} alt="Graphic" />
        </div>
        <div className={darkMode ? "graphic" : "graphic-dark"}>
          <img src={darkGraphic} alt="darkGraphic" />
        </div>
      </div>
      <div className={darkMode ? "sites-uses-react-dark" : "sites-uses-react"}>
        <div className={darkMode ? "uses-text-dark" : "uses-text"}>
          <div className={darkMode ? "right-dark" : "right"}>
            <h1>Сайты, использующие React</h1>
            <p>ТОП-20</p>
          </div>
          <div className={darkMode ? "left-dark" : "left"}>
            <h1>42 115 сайтов</h1>
            <h2>найдено</h2>
          </div>
        </div>
        <table className={darkMode ? "table-dark": "table"}>
          <thead>
            <tr>
              <th>Сайт</th>
              <th>Рейтинг по трафику</th>
              <th>Страна</th>
              <th>Категория</th>
              <th>PR-CY Rank</th>
              <th>Дата обновления</th>
            </tr>
          </thead>
          <tbody>
            <Top
              site="tiktok.com"
              raiting="14"
              contry="США"
              category="Компьютеры, Электроника и Технологии"
              rank="86"
              updateData="08.06.2024"
            />
            <Top
              site="pinterest.com"
              raiting="25"
              contry="США"
              category="Компьютеры, Электроника и Технологии"
              rank="88"
              updateData="22.05.2024"
            />
            <Top
              site="max.com"
              raiting="36"
              contry="США"
              category="Искусство и развлечения"
              rank="52"
              updateData="08.05.2024"
            />
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Chart;
