import React from "react";
import Selection from "../Selection/Selection";
import FooterX from "../FooterX/FooterX";
import Product from "../Product/Product";

function About() {
  return (
    <div>
      <Selection />
      <Product item={"Подбор тура"} />
      <FooterX />
    </div>
  );
}

export default About;
