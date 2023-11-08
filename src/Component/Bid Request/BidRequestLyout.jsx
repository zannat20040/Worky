import React from "react";
import Progessbar from "./Progessbar";

const BidRequestLyout = ({ item, HandleStatus ,HandleAccept}) => {
  return (
    <tr className="text-center border-b border-gray-200">
      <td className="py-4">{item.title}</td>
      <td className="py-4">{item.bidBy}</td>
      <td className="py-4">{item.deadline}</td>
      <td className="py-4">{item.bidAmount}</td>
      <td className="py-4">{item.status}</td>
      <td className=" py-4  gap-3 grid-cols-1 md:text-center text-end grid md:grid-cols-2">
        {item.status === "pending" && (
          <>
            <button
              className="btn text-sm btn-outline btn-sm rounded-md bg-green-600 text-white "
              onClick={() => HandleAccept(item._id)}
            >
              Accept
            </button>
            <button
              className="btn text-sm btn-outline btn-sm rounded-md bg-green-600 text-white  "
              onClick={() => HandleStatus(item._id)}
            >
              Rejected
            </button>
          </>
        )}
        {item.status === "in progress" && (
         <Progessbar parcentage={50}></Progessbar>
        )}
        {item.status === "complete" && (
         <Progessbar parcentage={100}></Progessbar>
        )}
        {item.status === "rejected" && (
          <>
            <button
              className="btn text-sm btn-outline btn-sm rounded-md bg-green-600 text-white "
              disabled
            >
              Accept
            </button>
            <button
              className="btn text-sm btn-outline btn-sm rounded-md bg-green-600 text-white  "
              onClick={() => HandleStatus(item._id)}
              disabled
            >
              Rejected
            </button>
          </>
        )}
      </td>
    </tr>
  );
};

export default BidRequestLyout;
