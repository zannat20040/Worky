import React from "react";
import AddJobsLayout from "./AddJobsLayout";

const AddJobs = () => {
  const HandleAddJobs = (e) => {
    e.preventDefault();

    const form = e.target;
    const title = form.title.value;
    const description = form.description.value;
    const email = form.email.value;
    const category = form.category.value;
    const deadline = form.deadline.value;
    const minimum = form.minimum.value;
    const maximum = form.maximum.value;

    console.log(
      title,
      description,
      email,
      category,
      deadline,
      minimum,
      maximum
    );

  };
  return <AddJobsLayout HandleAddJobs={HandleAddJobs}></AddJobsLayout>;
};

export default AddJobs;
