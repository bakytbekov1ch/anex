import React from "react";
import FooterX from "../FooterX/FooterX";
import SelectionTwo from "../SelectionTwo/SelectionTwo";
import Product from "../Product/Product";

function Main() {
  return (
    <div>
      <SelectionTwo />
      <Product item={"Горящие туры"} />
      <FooterX />
    </div>
  );
}

export default Main;
