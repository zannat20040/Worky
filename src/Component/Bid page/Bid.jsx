import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import axios from "axios";
import { Helmet } from "react-helmet-async";

const Bid = () => {
  const allbids = useLoaderData();
  const { user } = useContext(AuthContext);
  const [myBid,setMyBid] = useState([])

  useEffect(()=>{
    const myBids = allbids.filter((item) => item.bidBy === user.email);
    setMyBid(myBids);
  },[])

  const HandleComplete = (id)=>{
    // console.log(id)
    const updatedStatus = {
        status: "complete",
      };
      axios
      .put(`https://server-side-taupe.vercel.app/bids/${id}`, updatedStatus)
      .then((res) => {
        // console.log(res.data);
        if(res.data.modifiedCount>0){
            const updatedBids = myBid.map((item) =>
          item._id === id ? { ...item, status: updatedStatus.status } : item
        );
        setMyBid(updatedBids);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <>
    <Helmet>
        <title>Worky | My Bids</title>
      </Helmet>
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
              {myBid.map((item) => (
                <tr className="text-center">
                  <td className="py-4 border-b border-gray-200">
                    {item.title}
                  </td>
                  <td className="py-4 border-b border-gray-200">
                    {item.jobOwner}
                  </td>
                  <td className="py-4 border-b border-gray-200">
                    {item.deadline}
                  </td>
                  <td className="py-4 border-b border-gray-200">
                    {item.status}
                  </td>
                  <td className="py-4 border-b border-gray-200">
                    {item.status === "in progress" ? (
                      <button
                        className="btn btn-outline btn-sm rounded-md bg-green-600 text-white "
                        onClick={() => HandleComplete(item._id)}
                      >
                        Complete
                      </button>
                    ) : (
                      <button
                        className="btn btn-outline btn-sm rounded-sm "
                        disabled
                      >
                        Complete
                      </button>
                    )}
                  </td>
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
