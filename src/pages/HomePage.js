import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Services from "../components/HomePage/Services";
import Categories from "../components/HomePage/Categories";
import SousCategories from "../components/HomePage/SousCategories";
import MobileApp from "../components/HomePage/Mobile-app";
const HomePage = () => {
  return (
    <HomeWrapper>
      <Header />
      <Services />
      <Categories />
      <SousCategories />
      <MobileApp />
    </HomeWrapper>
  );
};

const HomeWrapper = styled.div``;

export default HomePage;
