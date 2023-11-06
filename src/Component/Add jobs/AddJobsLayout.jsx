import React, { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const AddJobsLayout = ({ HandleAddJobs }) => {
  const { user } = useContext(AuthContext);

  return (
    <div className="w-full md:w-3/5 mx-auto mt-20 shadow-2xl rounded-md p-10 ">
      <div>
        <h1 className="text-4xl font-bold text-green-700 py-7">
          Posted a New Job
        </h1>
        <div className="card flex-shrink-0 w-full ">
          <form className="card-body p-2" onSubmit={HandleAddJobs}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Job title</span>
              </label>
              <input
                type="text"
                placeholder="Title"
                className="input input-bordered"
                required
                name="title"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Job description</span>
              </label>
              <textarea
                placeholder="write here....."
                className="textarea textarea-bordered h-32"
                name="description"
              ></textarea>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  disabled
                  name="email"
                  defaultValue={user.email}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Job category</span>
                </label>

                <select
                  className="select w-full input input-bordered"
                  name="category"
                >
                  <option disabled selected>
                    select
                  </option>
                  <option value="Web Development">web development</option>
                  <option value="Digital Marketing">digital marketing</option>
                  <option value="Graphics Design">graphics design</option>
                </select>
              </div>
            </div>

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
              />
            </div>
            <div>
              <label className="label">Job Budget</label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="form-control">
                  <input
                    type="minimum"
                    placeholder="minimum price"
                    className="input input-bordered"
                    required
                    name="minimum"
                  />
                </div>
                <div className="form-control">
                  <input
                    type="maximum"
                    placeholder="maximum price"
                    className="input input-bordered"
                    required
                    name="maximum"
                  />
                </div>
              </div>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-outline bg-green-900 text-white">
                Add this jobs
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddJobsLayout;
