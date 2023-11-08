import React from "react";
import JobDetailsLayout from "./JobDetailsLayout";
import { useLoaderData, useParams } from "react-router-dom";
import axios from "axios";

const JobDetails = () => {
  const jobDetailsById = useLoaderData();
  const jobDetails = jobDetailsById[0];

  const HandleJobBid = (e, title,id) => {
    e.preventDefault();

    const form = e.target;
    const bidAmount = form.bidAmount.value;
    const deadline = form.deadline.value;
    const jobOwner = form.jobOwner.value;
    const bidBy = form.bidBy.value;
    const jobId = id;

    const sellerBid = {
      bidAmount: bidAmount,
      deadline: deadline,
      jobOwner: jobOwner,
      bidBy: bidBy,
      jobId: jobId,
      title: title,
      status: "pending",
    };


    // console.log(sellerBid)

    axios
    .post("http://localhost:5000/bids", sellerBid)
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

  return (
    <JobDetailsLayout
      jobDetails={jobDetails}
      HandleJobBid={HandleJobBid}
    ></JobDetailsLayout>
  );
};

export default JobDetails;
