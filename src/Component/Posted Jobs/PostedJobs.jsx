import React from "react";
import PostedJobsLayout from "./PostedJobsLayout";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useLoaderData } from "react-router-dom";

const PostedJobs = () => {
  const { user } = useContext(AuthContext);
  const allPostedJobs = useLoaderData();
  const myPostedJobs = allPostedJobs.filter(
    (item) => item.email === user.email
  );

  return (
   <div className="bg-green-50">
     <div className=" container mx-auto py-6  px-4 pb-52 ">
        <h1 className="text-5xl text-green-700 font-bold text-center py-5 mb-10">My all posted Jobs</h1>
        {myPostedJobs.map((item) => (
        <PostedJobsLayout item={item} key={item._id}></PostedJobsLayout>
      ))}
    </div>
   </div>
  );
};

export default PostedJobs;
