import React from "react";
import Brand from "./shopBy/Brand";
import Color from "./shopBy/Color";
import Price from "./shopBy/Price";
import ClothesCategory from "./shopBy/ClothesCategory";

const ShopSideNav = () => {
  return (
    <div className="w-full flex flex-col gap-6">
      <ClothesCategory icons={false} />
      <Brand />
      <Color />
      <Price />
    </div>
  );
};

export default ShopSideNav;
