import React, { useContext } from "react";
import { CiDollar } from "react-icons/ci";
import { SlCalender } from "react-icons/sl";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { TbPointFilled } from "react-icons/tb";

const JobDetailsLayout = ({ findJob,HandleJobBid }) => {
  const { user } = useContext(AuthContext);
  const {
    title,
    requirement,
    photo,
    minimum,
    maximum,
    email,
    description,
    deadline,
    category,
  } = findJob;

  const requirementList = requirement.split(/\d+\./).filter(Boolean);
  return (
    <>
      <div className="bg-green-50">
        <div className="container mx-auto py-8 px-4 flex gap-9 items-center">
          <div className="">
            <img src={photo} alt="" className="w-56 h-48  rounded-lg" />
          </div>
          <div>
            <div>
              <h1 className="text-2xl font-bold">{title}</h1>
              <div className="badge badge-outline py-2 px-4 mt-3">
                {category}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto py-8 px-4 grid grid-cols-2 gap-5">
        <div>
          <div>
            <h2 className="card-title mb-4 text-green-600">Job Description</h2>
            <p className="text-gray-500 mb-10">{description}</p>
          </div>
          <div>
            <h2 className="card-title mb-4 text-green-600">Job Requirement</h2>
            {requirementList.map((item) => (
              
              <div className="flex gap-2 items-center ml-4">
                <TbPointFilled className=" text-green-600  "></TbPointFilled>
                <p className="text-gray-500 mb-2 ">{item}</p>
              </div>
            ))}
          </div>
          <div>
            <h2 className="card-title mb-4 text-green-600 mt-4">
              Job Deadline
            </h2>
            <div className="flex gap-3 items-center  mb-7">
              <SlCalender className=" text-green-600"></SlCalender>
              <p className="text-gray-500 "> {deadline}</p>
            </div>
          </div>
          <div>
            <h2 className="card-title mb-4 text-green-600">Job Budget</h2>
            <div className="flex gap-2 items-center">
              <CiDollar className="text-xl text-green-600 "></CiDollar>
              <p className="text-end">
                {minimum}$ - {maximum}$
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="w-full border rounded-md md:p-10 p-5 ">
            <div>
              <h1 className="text-4xl font-bold text-green-700 py-7 text-center">
                Place your Bid
              </h1>
              <div className="card flex-shrink-0 w-full ">
                <form className="card-body p-2" onSubmit={HandleJobBid}>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Your email</span>
                    </label>
                    <input
                      type="email"
                      className="input input-bordered"
                      disabled
                      name="bidBy"
                      defaultValue={user.email}
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Job Owner</span>
                    </label>
                    <input
                      type="email"
                      placeholder="email"
                      className="input input-bordered"
                      disabled
                      name="jobOwner"
                      defaultValue={email}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Job Deadline</span>
                      </label>
                      <input
                        placeholder="select"
                        className="input input-bordered"
                        required
                        name="deadline"
                        type="date"
                      />{" "}
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Your budget</span>
                      </label>
                      <div className="form-control">
                        <input
                          type="number"
                          placeholder="price"
                          className="input input-bordered"
                          required
                          name="bidAmount"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="form-control mt-6">
                    {email == user.email ? (
                      <button className="btn btn-outline bg-green-900 text-white " disabled>
                       You can't bid on this job
                      </button>
                    ) : (
                      <button className="btn btn-outline bg-green-900 text-white ">
                        Bid now
                      </button>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobDetailsLayout;
