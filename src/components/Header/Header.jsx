import React from "react";

import logo from "../../assets/svg/logo.svg";
import phone from "../../assets/svg/phone.svg";
import mesto from "../../assets/svg/mesto.svg";
import line from "../../assets/svg/line.svg";
import menu from "../../assets/svg/menu.svg";

import "./Header.scss";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="container">
        <div className="header__content">
          <Link to="/">
            <img className="header__logo" src={logo} alt="" />
          </Link>
          <ul>
            <Link to="/about">
              <li>Подбор тура</li>
            </Link>
            <Link to="/main">
              <li>Горящие туры</li>
            </Link>
            <li>Страны</li>
            <li>отели</li>
          </ul>
          <div className="header__block">
            <button>оставить заявку</button>
            <div className="header__a1">
              <img src={phone} alt="" />
              <img src={mesto} alt="" />
            </div>
            <img src={line} alt="" />
            <Link to="/menu">
              <img className="header__menu" src={menu} alt="" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
