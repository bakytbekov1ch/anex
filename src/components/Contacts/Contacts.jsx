import React from "react";

import facebook from "../../assets/images/facebook.png";
import instagram from "../../assets/images/instagram.png";
import telegram from "../../assets/images/telegram.png";
import whatsapp from "../../assets/images/whatsapp.png";
import ok from "../../assets/images/ok.png";
import vk from "../../assets/images/vk.png";
import line from "../../assets/images/line.png";

import "./Contacts.scss";

function Contacts() {
  return (
    <div className="contac">
      <div className="container">
        <div className="contac__content">
          <div className="contac__block">
            <h1>СВЯЗАТЬСЯ С НАМИ</h1>
            <div className="contac__images">
              <img src={facebook} alt="" />
              <img src={instagram} alt="" />
              <img src={telegram} alt="" />
              <img src={whatsapp} alt="" />
              <img src={ok} alt="" />
              <img src={vk} alt="" />
            </div>
          </div>
          <img src={line} alt="" />
          <div className="contac__ml">
            <h1>КОНТАКТЫ</h1>
            <h2>
              + 8 (495) 626-26-96 <br />+ 8 (925) 826-26-96
            </h2>
            <h3>anextourchertanovo@gmail.com</h3>
          </div>
          <img src={line} alt="" />
          <div className="contac__xl">
            <h1>АДРЕС</h1>
            <p>
              Москва, Россошанский проезд, <br />
              дом 3, (1‑й этаж)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
