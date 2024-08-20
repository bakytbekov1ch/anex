import React from "react";

import star from "../../assets/images/star.png";
import reviews from "../../assets/svg/Reviews.svg";

import { deliveryApi } from "../../data/DeliveryApi";

import "./Delivery.scss";

function Delivery() {
  return (
    <div className="delivery">
      <div className="container">
        <div className="delivery__content">
          <div className="delivery__img">
            <img src={reviews} alt="" />
          </div>
          <h1>отзывы</h1>
          <p>Впечатления наших путешественников</p>
          <div className="delivery__block">
            {deliveryApi.map((item) => (
              <div className="delivery__mx">
                <div className="delivery__sl">
                  <img src={item.image} alt="" /> <br />
                  <img className="delivery__star" src={star} alt="" />
                  <h2>{item.name}</h2>
                  <h3>{item.title}</h3>
                </div>

                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Delivery;
