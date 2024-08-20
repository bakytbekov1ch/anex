import React from "react";

import vector from "../../assets/svg/vector.svg";

import "./Apple.scss";

function Apple() {
  return (
    <div className="apple">
      <div className="container">
        <div className="apple__content">
          <h1>не определились  с выбором?</h1>
          <p>
            Оставьте свой номер и наш специалист поможет вам с подбором тура
          </p>
          <div className="apple__inputs">
            <input type="text" placeholder="Имя" />
            <input type="text" placeholder="Телефон" />
          </div>
          <button>
            отправить <img src={vector} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Apple;
