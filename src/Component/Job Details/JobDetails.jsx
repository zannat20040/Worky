import React from "react";
import JobDetailsLayout from "./JobDetailsLayout";
import { useLoaderData, useParams } from "react-router-dom";
import axios from "axios";

const JobDetails = () => {
  const jobDetails = useLoaderData();
  const params = useParams();

  const findJob = jobDetails.find((item) => item._id === params.id);

 



  return (
    <JobDetailsLayout
      findJob={findJob}
      HandleJobBid={HandleJobBid}
    ></JobDetailsLayout>
  );
};

export default JobDetails;
