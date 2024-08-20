import React from "react";

import { ImagesApi } from "../../data/images";

import "./Images.scss"

function Images() {
  return (
    <div className="images">
      <div className="container">
        <div className="images__content">
          <h1>горящие туры</h1>
          <h3>Поймайте момент</h3>
          <div className="images__block">
            {ImagesApi.map((item, index) => (
              <img key={index} src={item.image} alt="" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Images;
