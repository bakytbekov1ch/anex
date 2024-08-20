import React from "react";

import vector from "../../assets/svg/vector.svg";
import line from "../../assets/svg/line.svg";

import "./Selection.scss";

function Selection() {
  return (
    <div className="selection">
      <div className="container">
        <div className="sectionone__content">
          <h1>подбор тура</h1>
          <h4>Идеальное путешествие начинается здесь</h4>
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

export default Selection;
