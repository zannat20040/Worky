import React, { useState } from "react";
import Navbar from "../Common/Navbar";
import axios from "axios";
import JobByCategories from "./Category/JobByCategories";
import Banner from "./Banner/Banner";


const Home = () => {
 
  return (
    <>
    <Banner></Banner>
     <JobByCategories></JobByCategories>
    </>
  );
};

export default Home;
