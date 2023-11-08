import { Helmet } from "react-helmet-async";
import React, { useState } from "react";
import JobByCategories from "./Category/JobByCategories";
import Banner from "./Banner/Banner";
import About from "./About us/About";
import WhyChoose from "./Why choose/WhyChoose";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Worky | Home</title>
      </Helmet>
      <Banner></Banner>
      <About></About>
      <JobByCategories></JobByCategories>
      <WhyChoose></WhyChoose>
    </>
  );
};

export default Home;
