import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Bid = () => {
  const allbids = useLoaderData();
  // console.log(allbids)
  const { user } = useContext(AuthContext);

  const myBids = allbids.filter((item) => item.bidBy === user.email);

  // console.log(myBids);

  return (
    <>
      <div className="container mx-auto py-6  px-4 pb-52">
      <h1 className="text-4xl font-bold text-green-700 py-7 text-center">
            My All Bids 
          </h1>
        <div className="overflow-x-auto ">
         
          <table className="bg-gray-100 mt-5 table table-xs rounded-none">
            <thead className="bg-green-600 text-base text-center text-white ">
              <tr>
                <th className=" py-5">Job title</th>
                <th className=" py-5">Job Owner Email</th>
                <th className=" py-5">Deadline</th>
                <th className=" py-5">Status</th>
                <th className=" py-5">Complete</th>
              </tr>
            </thead>
            <tbody>
             { myBids.map(item=>(
              <tr className="text-center">
                <td className="py-4 border-b border-gray-200">{item.title}</td>
                <td className="py-4 border-b border-gray-200">{item.jobOwner}</td>
                <td className="py-4 border-b border-gray-200">{item.deadline}</td>
                <td className="py-4 border-b border-gray-200">{item.status}</td>
                <td className="py-4 border-b border-gray-200"><button className="btn btn-outline btn-sm rounded-sm " disabled>Complete</button></td>
              </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* <BidLayout></BidLayout> */}
    </>
  );
};

export default Bid;
