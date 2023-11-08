import React, { useState } from "react";
import Navbar from "../Common/Navbar";
import axios from "axios";
import JobByCategories from "./Category/JobByCategories";
import Banner from "./Banner/Banner";
import About from "./About us/About";
import WhyChoose from "./Why choose/WhyChoose";


const Home = () => {
 
  return (
    <>
    <Banner></Banner>
    <About></About>
     <JobByCategories></JobByCategories>
     <WhyChoose></WhyChoose>
    </>
  );
};

export default Home;
