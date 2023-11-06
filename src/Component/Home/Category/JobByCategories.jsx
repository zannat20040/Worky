import axios from "axios";
import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import JobCategoryLayout from "./JobCategoryLayout";
import '../../../assets/all css/style.css'

const JobByCategories = () => {
  const [jobByCategory, setJobByCategory] = useState([]);
  const [selectedTab, setSelectedTab] = useState("Web Development");

  const catagoryList = [
    {
      id: "01",
      categoryType: "Web Development",
    },
    {
      id: "02",
      categoryType: "Digital Marketing",
    },
    {
      id: "03",
      categoryType: "Graphics Design",
    },
  ];

  const HandleTab = (category) => {

    axios
      .get(`http://localhost:5000/addjobs/${category}`)
      .then((res) => {
        // console.log(res.data)
        setJobByCategory(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    HandleTab(selectedTab);
  }, [selectedTab]);

  return (
    <div className="container mx-auto mt-9  px-4">
      <h1 className="text-5xl text-green-700 font-bold text-center py-5 mb-10">Job By Catagory</h1>
      <Tabs>
      <TabList className="flex justify-center text-base border-b border-green-600 text-center">
        {catagoryList.map((item) => (
          <Tab  onClick={() => setSelectedTab(item.categoryType)} key={item.id}>
            {item.categoryType}
          </Tab>
        ))}
      </TabList>

      {catagoryList.map(() => (
          <TabPanel>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-10">
            {jobByCategory.map((item) => (
              <JobCategoryLayout item={item} key={item._id}></JobCategoryLayout>
            ))}
            </div>
          </TabPanel>
        ))}
    </Tabs>
    </div>
  );
};

export default JobByCategories;
