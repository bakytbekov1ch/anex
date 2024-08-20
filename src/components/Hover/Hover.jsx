import React from "react";

import { hoverApi } from "../../data/hoverapi";

import main from "../../assets/svg/main.svg";

import "./Hover.scss";

function Hover() {
  return (
    <div className="hover">
      <div className="container">
        <div className="hover__content">
          <div className="hover__img">
            <img src={main} alt="" />
          </div>
          <h1>популярные отели</h1>
          <p>уют и роскошь в лучших отелях мира</p>
          <div className="hover__block">
            {hoverApi.map((item) => (
              <div className="hover__btn">
                <img src={item.image} alt="" />
                <h2>{item.name}</h2>
                <h3>{item.text}</h3>
                <h4>{item.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hover;
