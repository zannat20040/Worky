import React from "react";
import UpdateDetailsLayout from "./UpdateDetailsLayout";
import { useLoaderData, useParams } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";
import { imgUpload } from "../../api/ImgUpload";

const UpdateDetails = () => {
  const allPostedJobs = useLoaderData();
  const params = useParams();
  const updateJob = allPostedJobs.find((item) => item._id === params.id);

  const HandleUpdate=async (e,id)=>{
    e.preventDefault()

    const form = e.target;
    const title = form.title.value;
    const description = form.description.value;
    const requirement = form.requirement.value;
    const email = form.email.value;
    const category = form.category.value;
    const deadline = form.deadline.value;
    const minimum = form.minimum.value;
    const maximum = form.maximum.value;
    const image = form.photo.files[0];
    const photo = await imgUpload(image)    
    // console.log(photo)

    const updateDetails = {
      title: title,
      description: description,
      requirement: requirement,
      email: email,
      category: category,
      deadline: deadline,
      minimum: minimum,
      maximum: maximum,
      photo: photo
    };

    // console.log(updateDetails)

    axios
      .put(`https://server-side-taupe.vercel.app/addjobs/${id}`, updateDetails)
      .then((res) => {
        console.log(res.data)
        if (res.data.modifiedCount > 0) {
            swal("Great", "You have updated this product successfully!", "success");
          }
          else{
            swal("Sorry", "You didn't change anything!", "warning");

          }
      })
      .catch((error) => {
        console.log(error);
      });
  }


  return (
    <UpdateDetailsLayout
      updateJob={updateJob}
      HandleUpdate={HandleUpdate}
    ></UpdateDetailsLayout>
  );
};

export default UpdateDetails;
