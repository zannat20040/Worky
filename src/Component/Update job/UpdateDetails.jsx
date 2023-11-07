import React from "react";
import UpdateDetailsLayout from "./UpdateDetailsLayout";
import { useLoaderData, useParams } from "react-router-dom";

const UpdateDetails = () => {
  const allPostedJobs = useLoaderData();
  const params = useParams();
  const updateJob = allPostedJobs.find((item) => item._id === params.id);

  const HandleUpdate=(e,id)=>{
    e.preventDefault()
    console.log('works', id)

    
  }


  return (
    <UpdateDetailsLayout
      updateJob={updateJob}
      HandleUpdate={HandleUpdate}
    ></UpdateDetailsLayout>
  );
};

export default UpdateDetails;
