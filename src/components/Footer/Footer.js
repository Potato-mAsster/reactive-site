import "./Footer.css";
import { ThemeContext } from "../ThemeContext";
import React, { useContext } from "react";

export default function Footer() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className={darkMode ? "footer-container-dark" : "footer-container"}>
      <div className="column">
        <a href="https://pr-cy.ru/technologies/react/">
          <img
            src="https://pr-cy.ru/assets/node/images/b2ba662b04f7fe349133a1ad75542c12.svg"
            alt="PR-CY"
          />
        </a>
        <h3>© 2006—2024 PR-CY</h3>
        <p>ООО «Анализ Сайта»</p>
        <p>ИНН 5256210197</p>
        <p>ОГРН 1235200031890</p>
        <div className="icons">
          <img
            src="https://cdn.iconscout.com/icon/free/png-256/free-vk-17-898037.png?f=webp"
            alt="VK"
          />
          <img
            src="https://png.klev.club/uploads/posts/2024-03/png-klev-club-p-ikonka-tg-png-11.png"
            alt="Telegram"
          />
        </div>
      </div>
      <div className="column"></div>
      <div className="column">
        <p>Инструменты</p>
        <p>Анализ сайта</p>
        <p>SEO-анализ страницы</p>
        <p>Разовая проверка позиций</p>
        <p>Чат GPT</p>
        <p>Проверка посещаемости</p>
        <p>Аудит сайта</p>
        <p>Антиплагиат онлайн</p>
        <p>Мой IP</p>
        <p>WHOIS домена</p>
        <p>Проверить сайт на мошенников</p>
        <p>Нейросеть для написания текста</p>
        <p>Генератор картинок Нейросетью</p>
      </div>
      <div className="column">
        <p>Сообщество</p>
        <p>Блог</p>
        <p>Сообщество</p>
        <p>Словарь</p>
        <p>База Знаний</p>
        <p>Ресурсы</p>
        <p>API анализ сайта</p>
        <p>API проверки позиций</p>
        <p>Партнёрская программа</p>
        <p>Рейтинги сайтов</p>
        <p>Сайты на технологиях</p>
        <p>Бесплатные лимиты</p>
      </div>
      <div className="column">
      <p>Продукты</p>
        <p>Тарифы и цены</p>
        <p>Возможности</p>
        <p>Инструменты</p>
        <p>Проверка позиций (LINE)</p>
        <p>SEO расширение для Chrome</p>
        <p>Информация</p>
        <p>О компании</p>
        <p>Написать нам</p>
        <p>Справка</p>
        <p>Условия использования</p>
        <p>Обновления</p>
      </div>
    </div>
  );
}
