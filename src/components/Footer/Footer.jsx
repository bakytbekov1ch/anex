import React from "react";

import logo from "../../assets/svg/footerLogo.svg";
import sms from "../../assets/svg/sms.svg";
import vector from "../../assets/svg/vector.svg";

import facebook from "../../assets/svg/facebook.svg";
import instagram from "../../assets/svg/instagram.svg";
import telegram from "../../assets/svg/telegram.svg";
import whatsapp from "../../assets/svg/whatsapp.svg";
import ok from "../../assets/svg/ok.svg";
import vk from "../../assets/svg/vk.svg";

import "./Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__block">
            <img src={logo} alt="" />
            <div className="footer__a1">
              <h2>Узнавайте о горящих турах первыми</h2>
              <div className="footer__input">
                <img className="footer__sms" src={sms} alt="" />
                <input type="text" placeholder="Введите почту" />
                <img src={vector} alt="" />
              </div>
            </div>
          </div>
          <div className="footer__hr"></div>
          <ul>
            <li>Подбор тура</li>
            <li>Горящие туры</li>
            <li>Страны и отели</li>
            <li>Priority</li>
            <li>оплата</li>
            <li>отзывы</li>
            <li>О нас</li>
            <li>контакты</li>
          </ul>
          <div className="footer__hr"></div>
          <div className="footer__images">
            <img src={facebook} alt="" />
            <img src={instagram} alt="" />
            <img src={telegram} alt="" />
            <img src={whatsapp} alt="" />
            <img src={ok} alt="" />
            <img src={vk} alt="" />
          </div>
          <p>2023 © Anex Tour - Туристическая компания</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
