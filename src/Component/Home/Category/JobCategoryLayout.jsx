import React from "react";
import { SlCalender } from "react-icons/sl";

const JobCategoryLayout = ({ item }) => {
  const firstLine = item.description.split(".")[0];
  console.log(item);
  return (
    <div className="card card-side bg-base-100 border p-8 rounded-md items-start gap-5">
      <figure>
        <img className="w-60 h-20 rounded-lg" src={item?.photo} alt="Movie" />
      </figure>
      <div className="card-body p-0">
        <h2 className="card-title">{item.title}</h2>
        <p>{firstLine} .</p>
        <div className="flex justify-between">
          <p><SlCalender></SlCalender> {item.deadline}</p>
          <p className="text-end">
            ${item.minimum} - ${item.maximum}
          </p>
        </div>

        <div className="card-actions ">
          <button className="btn btn-primary btn-sm ">Bid now</button>
        </div>
      </div>
    </div>
  );
};

export default JobCategoryLayout;
