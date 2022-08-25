import React from "react";
import Annoucement from "../components/Annoucement";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Header from "../components/Header";
import NewsLetter from "../components/NewsLetter";
import Products from "../components/Products";
import Slider from "../components/Slider";
import { sliderItems } from "../data";

function Home() {
  return (
    <>
      <Annoucement />
      <Header />
      <Slider sliderItems={sliderItems} />
      <Categories />
      <Products />
      <NewsLetter />
      <Footer />
    </>
  );
}

export default Home;
