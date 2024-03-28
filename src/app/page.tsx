import Banner from "@/components/Home/Banner";
import Categories from "@/components/Home/Categories";
import FlashSale from "@/components/Home/FlashSale";
import TrendingProducts from "@/components/Home/TrendingProducts";
import Frame from "@/components/Home/frame";
import React from "react";

const HomePage = () => {
  return (
    <>
      <Banner />
      <FlashSale />
      <Categories />
      <TrendingProducts />
      <Frame />
    </>
  );
};

export default HomePage;
