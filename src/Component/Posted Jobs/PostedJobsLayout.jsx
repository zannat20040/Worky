import React, { useState } from "react";
import { CiDollar } from "react-icons/ci";
import { SlCalender } from "react-icons/sl";
import { Link } from "react-router-dom";

const PostedJobsLayout = ({ item, HandleDelete }) => {
  return (
    <div className="card sm:card-side bg-base-100 border p-8 mb-4 rounded-md items-start gap-5">
      <div className="w-28  rounded-lg ">
        <figure className="rounded-lg text-center">
          <img
            className=" w-60 h-20 rounded-lg"
            src={item?.photo}
            alt="Movie"
          />
        </figure>
      </div>
      <div className="card-body p-0">
        <h2 className="card-title text-green-600">{item.title}</h2>
        <p>{item.description} .</p>
        <div className="flex  sm:flex-nowrap flex-wrap gap-2 mt-3">
          <div className="flex gap-3 items-center">
            <SlCalender className=" text-green-600 "></SlCalender>
            <p> {item.deadline}</p>
          </div>
          <div className="flex gap-2 items-center ">
            <CiDollar className="text-xl text-green-600 "></CiDollar>
            <p className="text-end">
              {item.minimum} - {item.maximum}
            </p>
          </div>
        </div>

        <div className="card-actions mt-3 ">
          <Link
            to={`/updatejob/${item._id}`}
            className="btn btn-outline  bg-green-600 border-0 text-white text-xs tracking-widest"
          >
            Update Job Details
          </Link>
          <Link onClick={()=>HandleDelete(item._id)} className="btn btn-outline bg-green-600 border-0 text-white text-xs tracking-widest">
            Delete This Job
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostedJobsLayout;
