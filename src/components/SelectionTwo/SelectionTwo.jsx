import React from "react";

import line from "../../assets/svg/line.svg";
import vector from "../../assets/svg/vector.svg";

import "./SelectionTwo.scss";

function SelectionTwo() {
  return (
    <div className="selectiontwo">
      <div className="container">
        <div className="sectionone__content">
          <h1>Горящие туры</h1>
          <h4>
            Специальные предложения для тех, <br />
            кто ищет выгодные приключения
          </h4>
          <div className="section__btn">
            <div className="sectionone__block">
              <div className="sectionone__mx">
                <h6>Откуда</h6>
                <h3>Москва</h3>
              </div>
              <img src={line} alt="" />
              <div className="sectionone__mx">
                <h2>Куда</h2>
              </div>
              <img src={line} alt="" />
              <div className="sectionone__mx">
                <h2>вылет</h2>
              </div>
              <img src={line} alt="" />
              <div className="sectionone__mx">
                <h6>На сколько</h6>
                <h3>9 - 12 ночей</h3>
              </div>
              <img src={line} alt="" />
              <div className="sectionone__mx">
                <h6>Туристы</h6>
                <h3>2 + 0</h3>
              </div>
              <button>
                подобрать <img src={vector} alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SelectionTwo;
