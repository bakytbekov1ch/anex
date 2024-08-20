import React from "react";

import "./Menu.scss";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div className="menu">
      <div className="container">
        <div className="menu__content">
          <div className="menu__nav">
            <h1>популярные страны</h1>
            <ul>
              <li>Турция</li>
              <li>Египет</li>
              <li>Мальдивы</li>
              <li>ОАЭ</li>
              <li>Куба</li>
              <li>Шри-Ланка</li>
            </ul>
          </div>
          <div className="menu__nav">
            <h1>туристам</h1>
            <ul>
              <li>Страны</li>
              <li>Отели</li>
              <Link to="/about">
                <li style={{ color: "blue" }}>Подбор тура</li>
              </Link>
              <Link to="/main">
                <li style={{ color: "blue" }}>Горящие туры</li>
              </Link>
              <li>Как купить и оплатить тур</li>
            </ul>
          </div>
          <div className="menu__nav">
            <h1>компания</h1>
            <ul>
              <li>О нас</li>
              <li>Отзывы</li>
              <li>Контакты</li>
              <li>Новости</li>
              <li>Priority</li>
              <li>Агентам</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
