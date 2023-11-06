import React, { useState } from "react";
import Navbar from "../Common/Navbar";
import axios from "axios";
import JobByCategories from "./Category/JobByCategories";


const Home = () => {
 
  return (
    <>
    
     <JobByCategories></JobByCategories>
    </>
  );
};

export default Home;
