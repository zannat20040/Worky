import React from "react";
import PostedJobsLayout from "./PostedJobsLayout";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useLoaderData } from "react-router-dom";
import axios from "axios";


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
        console.log('enteringg here')
        axios.delete(`http://localhost:5000/addjobs/${id}`)
            .then(res=>{
              console.log(res.data)
            })
            .catch(error=>{
              console.log(error)
            })

        swal("Poof! Your imaginary file has been deleted!", {
          icon: "success",
        });
      } else {
        swal("Your imaginary file is safe!");
      }
    });

  }

  return (
    <div className="bg-green-50">
      <div className=" container mx-auto py-6  px-4 pb-52 ">
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
