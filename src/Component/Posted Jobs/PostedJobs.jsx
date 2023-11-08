import React from "react";
import PostedJobsLayout from "./PostedJobsLayout";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useLoaderData } from "react-router-dom";
import axios from "axios";
import { Helmet } from "react-helmet-async";


const PostedJobs = () => {
  const { user } = useContext(AuthContext);
  const allPostedJobs = useLoaderData();
  const myPostedJobs = allPostedJobs.filter(
    (item) => item.email === user.email
  );



  const HandleDelete =(id)=>{
    console.log(id)
  
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        axios.delete(`https://server-side-taupe.vercel.app/addjobs/${id}`)
    .then(res=>{
      console.log(res.data)
      if (res.data.deletedCount >0) {
            swal("Good job!", "This job has been deleted", "success");
            // const remaining = allConfirmOrder.filter((item) => item._id !== id);
            // setConfirmOrder(remaining);
          }
    })
        // console.log('enteringg here')
        // axios.delete(`https://server-side-taupe.vercel.app/addjobs/${id}`)
        //     .then(res=>{
        //       console.log(res.data)
        //     })
        //     .catch(error=>{
        //       console.log(error)
        //     })

        // swal("Poof! Your imaginary file has been deleted!", {
        //   icon: "success",
        // });
      } else {
        swal("Your imaginary file is safe!");
      }
    });

  }

  return (
    <div className="bg-green-50">
      <Helmet>
        <title>Worky | Post</title>
      </Helmet>
      <div className=" container mx-auto py-6  px-4 pb-36 ">
        <h1 className="text-5xl text-green-700 font-bold text-center py-5 mb-10">
          My all posted Jobs
        </h1>
        {myPostedJobs.map((item) => (
          <PostedJobsLayout item={item} key={item._id} HandleDelete={HandleDelete}></PostedJobsLayout>
        ))}
      </div>
    </div>
  );
};

export default PostedJobs;
