import React from "react";
import { SlCalender } from "react-icons/sl";
import { CiDollar } from "react-icons/ci";
import { Link } from "react-router-dom";

const JobCategoryLayout = ({ item }) => {
  const firstLine = item.description.split(".")[0];

  return (
    <div className="card card-side bg-base-100 border p-8 rounded-md items-start gap-5">
      <div className="w-28  rounded-lg">
        <figure className="rounded-lg">
          <img
            className=" w-60 h-20 rounded-lg"
            src={item?.photo}
            alt="Movie"
          />
        </figure>
      </div>
      <div className="card-body p-0">
        <h2 className="card-title text-green-600">{item.title}</h2>
        <p>{firstLine} .</p>
        <div className="flex justify-between sm:flex-nowrap flex-wrap gap-2">
          <div className="flex gap-3 items-center">
            <SlCalender className=" text-green-600 "></SlCalender>
            <p> {item.deadline}</p>
          </div>
          <div className="flex gap-2 items-center">
            <CiDollar className="text-xl text-green-600 "></CiDollar>
            <p className="text-end">
              {item.minimum} - {item.maximum}
            </p>
          </div>
        </div>

        <div className="card-actions ">
          <Link
            to={`/addjobs/${item._id}`}
            className="btn btn-outline bg-green-600 border-0 mt-3 text-white text-xs tracking-widest"
          >
            Bid for this job
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobCategoryLayout;
