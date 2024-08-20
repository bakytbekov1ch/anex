import React from "react";

import block from "../../assets/svg/block.svg";
import block2 from "../../assets/svg/block2.svg";
import block3 from "../../assets/svg/block3.svg";
import block4 from "../../assets/svg/block4.svg";
import block5 from "../../assets/svg/block5.svg";
import block6 from "../../assets/svg/block6.svg";

import "./News.scss";

function News() {
  return (
    <div className="news">
      <div className="container">
        <h1>новости</h1>
        <h2>события в мире туризма</h2>
        <div className="news__content">
          <img src={block} alt="" />
          <img src={block2} alt="" />
          <img src={block3} alt="" />
          <img src={block5} alt="" />
          <img src={block4} alt="" />
          <img src={block6} alt="" />
        </div>
      </div>
    </div>
  );
}

export default News;
