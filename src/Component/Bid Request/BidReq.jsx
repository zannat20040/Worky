import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import axios from "axios";
import BidRequestLyout from "./BidRequestLyout";

const BidReq = () => {
  const allBidsReq = useLoaderData();
  const { user } = useContext(AuthContext);
  const [myBidReq,setMyBidReq] = useState([])

  
  useEffect(()=>{
    const myBidsReq = allBidsReq.filter((item) => item.jobOwner === user.email);
      setMyBidReq(myBidsReq);
  },[])

//   console.log(myBidReq)

  const HandleStatus = (id) => {

    const updatedStatus = {
        status: "rejected",
      };

    axios
      .get(`https://server-side-taupe.vercel.app/bids/${id}`)
      .then((res) => {
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .put(`https://server-side-taupe.vercel.app/bids/${id}`, updatedStatus)
      .then((res) => {
        console.log(res.data);
        if(res.data.modifiedCount>0){
            const updatedBids = myBidReq.map((item) =>
          item._id === id ? { ...item, status: updatedStatus.status } : item
        );
        setMyBidReq(updatedBids);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const HandleAccept = (id)=>{
    // console.log(id)
    const updatedStatus = {
        status: "in progress",
      };
      axios
      .put(`https://server-side-taupe.vercel.app/bids/${id}`, updatedStatus)
      .then((res) => {
        // console.log(res.data);
        if(res.data.modifiedCount>0){
            const updatedBids = myBidReq.map((item) =>
          item._id === id ? { ...item, status: updatedStatus.status } : item
        );
        setMyBidReq(updatedBids);
        }
      })
      .catch((error) => {
        console.log(error);
      });
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
                <th className=" py-5">Progress</th>
              </tr>
            </thead>
            <tbody>
              {myBidReq.map((item) => <BidRequestLyout item={item} HandleStatus={HandleStatus} HandleAccept={HandleAccept}></BidRequestLyout>)}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BidReq;
