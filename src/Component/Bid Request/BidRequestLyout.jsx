import React from "react";

const BidRequestLyout = ({ item, HandleStatus ,HandleAccept}) => {
  return (
    <tr className="text-center">
      <td className="py-4 border-b border-gray-200">{item.title}</td>
      <td className="py-4 border-b border-gray-200">{item.bidBy}</td>
      <td className="py-4 border-b border-gray-200">{item.deadline}</td>
      <td className="py-4 border-b border-gray-200">{item.bidAmount}</td>
      <td className="py-4 border-b border-gray-200">{item.status}</td>
      <td className=" py-4 border-b border-gray-200 space-x-2 space-y-1 md:text-center text-end">
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
