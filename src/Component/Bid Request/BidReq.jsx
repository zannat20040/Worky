import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import axios from "axios";

const BidReq = () => {
  const allBidsReq = useLoaderData();
  // console.log(allbids)
  const { user } = useContext(AuthContext);

  const myBidsReq = allBidsReq.filter((item) => item.jobOwner === user.email);



  const HandleStatus = (id)=>{
    console.log(id)
    const newStatus = "canceled";

    axios.get(`http://localhost:5000/bids/${id}`)
    .then(res=>{
        console.log(res.data)
    })
    .catch(error=>{
        console.log(error)
    })

  }
  return (
    <div>
      <div className="container mx-auto py-6  px-4 pb-52">
        <h1 className="text-4xl font-bold text-green-700 py-7 text-center">
          My All Request
        </h1>
        <div className="overflow-x-auto ">
          <table className="bg-gray-100 mt-5 table table-xs rounded-none">
            <thead className="bg-green-600 text-base text-center text-white ">
              <tr>
                <th className=" py-5">Job title</th>
                <th className=" py-5">Email</th>
                <th className=" py-5">Deadline</th>
                <th className=" py-5">Price</th>
                <th className=" py-5">Status</th>
                <th className=" py-5">Complete</th>
              </tr>
            </thead>
            <tbody>
              {myBidsReq.map((item) => (
                <tr className="text-center">
                  <td className="py-4 border-b border-gray-200">
                    {item.title}
                  </td>
                  <td className="py-4 border-b border-gray-200">
                    {item.bidBy}
                  </td>
                  <td className="py-4 border-b border-gray-200">
                    {item.deadline}
                  </td>
                  <td className="py-4 border-b border-gray-200">
                    {item.bidAmount}
                  </td>
                  <td className="py-4 border-b border-gray-200">
                    {item.status}
                  </td>
                  <td className=" py-4 border-b border-gray-200 space-x-2 space-y-1 md:text-center text-end">
                    <button className="btn text-sm btn-outline btn-sm rounded-sm bg-green-600 text-white ">
                      Accept
                    </button>
                    <button className="btn text-sm btn-outline btn-sm rounded-sm bg-green-600 text-white  " onClick={()=>HandleStatus(item._id)}>
                      Rejected
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BidReq;
