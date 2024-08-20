import React from "react";

import line from "../../assets/svg/line.svg";
import vector from "../../assets/svg/vector.svg";

import "./SectionOne.scss";

function SectionOne() {
  return (
    <div className="sectionone">
      <div className="container">
        <div className="sectionone__content">
          <h1>путешествия мечты</h1>
          <h4>выбери свою</h4>
          <div className="section__btn">
            <div className="sectionone__block">
              <div className="sectionone__mx">
                <h6>Откуда</h6>
                <h3>Москва</h3>
              </div>
              <img src={line} alt="" />
              <div className="sectionone__mx">
                <input type="text" placeholder="Куда" />
              </div>
              <img src={line} alt="" />
              <div className="sectionone__mx">
                <input type="text" placeholder="вылет" />
              </div>
              <img src={line} alt="" />
              <div className="jjj">
                <div className="sectionone__mx">
                  <h6>На сколько</h6>
                  <h3>9 - 12 ночей</h3>
                </div>
                <img src={line} alt="" />
                <div className="sectionone__mx">
                  <h6>Туристы</h6>
                  <h3>2 + 0</h3>
                </div>
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

export default SectionOne;
