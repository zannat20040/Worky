import React from "react";
import AddJobsLayout from "./AddJobsLayout";
import axios from "axios";
import swal from "sweetalert";
import { imgUpload } from "../../api/ImgUpload";

const AddJobs = () => {
  const HandleAddJobs = async e => {
    e.preventDefault();

    const form = e.target;
    const title = form.title.value;
    const description = form.description.value;
    const requirement = form.requirement.value;
    const email = form.email.value;
    const category = form.category.value;
    const deadline = form.deadline.value;
    const minimum = form.minimum.value;
    const maximum = form.maximum.value;
    // const photo = form.photo.value;
    const image = form.photo.files[0];
    const photo = await imgUpload(image)    
    // console.log(photo)
   
    const newJob = {
      title: title,
      description: description,
      requirement: requirement,
      email: email,
      category: category,
      deadline: deadline,
      minimum: minimum,
      maximum: maximum,
      photo: photo,
    };
    // console.log(newJob);

    await axios
      .post("https://server-side-taupe.vercel.app/addjobs", newJob)
      .then((res) => {
        console.log(res.data);
        if(res.data.insertedId){
            swal("Hurray!", "Your job post has been posted successfully!", "success");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return <AddJobsLayout HandleAddJobs={HandleAddJobs}></AddJobsLayout>;
};

export default AddJobs;
