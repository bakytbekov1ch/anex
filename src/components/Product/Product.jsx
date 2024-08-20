import React from "react";

import sort from "../../assets/svg/sort.svg";
import map from "../../assets/svg/map.svg";
import filter from "../../assets/svg/filter.svg";

import star from "../../assets/images/star.png";
import calendar from "../../assets/svg/calendar.svg";
import menu from "../../assets/svg/menua1.svg";
import frame from "../../assets/svg/frame.svg";
import line from "../../assets/svg/vector.svg";

import { Link } from "react-router-dom";
import { productApi } from "../../data/productApi";

import "./Product.scss";

function Product({ item }) {
  return (
    <div className="product">
      <div className="container">
        <div className="product__title">
          <Link to="/">
            <h5>Главная</h5>
          </Link>
          <h5>/</h5>
          <h5 style={{ color: "black" }}>{item}</h5>
        </div>

        <div className="product__content">
          <div className="product__ml">
            <h1>найденные варианты</h1>
            <span>(2672 предложения)</span>
          </div>

          <div className="product__block">
            <div className="product__sort">
              <img src={sort} alt="" />
              <h4>
                <span>Сортировать:</span> рекомендации для вас
              </h4>
            </div>
            <div className="product__img">
              <img src={map} alt="" />
              <img src={filter} alt="" />
            </div>
          </div>

          <div className="product__api">
            {productApi.map((item, index) => (
              <div key={index} className="product__xl">
                <img src={item.image} alt="" />
                <div className="product__a1">
                  <div className="prodcut__a2">
                    <h2>{item.name}</h2>
                    <h1>{item.title}</h1>
                    <img src={star} alt="" />
                    <div className="product__a3">
                      <span>{item.span}</span>
                      <h3>{item.text}</h3>
                    </div>
                  </div>
                  <div className="prodcut__a3">
                    <div className="product__s1">
                      <div className="product__menu">
                        <img src={calendar} alt="" />
                        <h3>{item.calendar}</h3>
                      </div>
                      <div className="product__menu">
                        <img src={menu} alt="" />
                        <h3>{item.menu}</h3>
                      </div>
                    </div>
                    <div className="product__s2">
                      <div className="product__frame">
                        <img src={frame} alt="" />
                        <h3>{item.titleone}</h3>
                      </div>
                      <div className="product__frame">
                        <img src={frame} alt="" />
                        <h3>{item.titletwo}</h3>
                      </div>
                      <div
                        style={{ display: item.titlefour ? "block" : "none" }}
                        className="product__frame"
                      >
                        <img src={frame} alt="" />
                        <h3>{item.titletree}</h3>
                      </div>
                      <div
                        style={{ display: item.titlefour ? "block" : "none" }}
                        className="product__frame"
                      >
                        <img src={frame} alt="" />
                        <h3>{item.titlefour}</h3>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="product__hr"></div>
                <div className="product__hore">
                  <button>{item.button}</button>
                  <div className="product__vl">
                    <h1>{item.price} ₽</h1>
                    <h2>/</h2>
                    <h2>за 1</h2>
                  </div>
                  <button className="product__button">
                    подробнее <img src={line} alt="" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
