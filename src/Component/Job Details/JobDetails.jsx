import React from "react";
import JobDetailsLayout from "./JobDetailsLayout";
import { useLoaderData, useParams } from "react-router-dom";
import axios from "axios";

const JobDetails = () => {
  const jobDetails = useLoaderData();
  const params = useParams();

  const findJob = jobDetails.find((item) => item._id === params.id);

  const HandleJobBid = (e) => {
    e.preventDefault();

    const form = e.target;
    const bidAmount = form.bidAmount.value;
    const deadline = form.deadline.value;
    const jobOwner = form.jobOwner.value;
    const bidBy = form.bidBy.value;
    const jobId = params.id;

    const sellerBid = {
      bidAmount: bidAmount,
      deadline: deadline,
      jobOwner: jobOwner,
      bidBy: bidBy,
      jobId: jobId,
    };

    console.log(sellerBid)

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
      findJob={findJob}
      HandleJobBid={HandleJobBid}
    ></JobDetailsLayout>
  );
};

export default JobDetails;
