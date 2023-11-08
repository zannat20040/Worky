import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Helmet } from 'react-helmet-async';

const UpdateDetailsLayout = ({updateJob, HandleUpdate}) => {
    const {photo,maximum,minimum,deadline,category,email,requirement,description,title, _id} =updateJob

    const {user} = useContext(AuthContext)
    return (
        <div className="px-3 mb-52">
          <Helmet>
        <title>Worky | Update</title>
      </Helmet>
        <div className="w-full md:w-3/5 mx-auto mt-20 shadow-2xl rounded-md md:p-10 p-5 ">
          <div>
            <h1 className="text-4xl font-bold text-green-700 py-7">
              Posted a New Job
            </h1>
            <div className="card flex-shrink-0 w-full ">
              <form className="card-body p-2" onSubmit={(e)=>HandleUpdate(e,_id)}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Job title</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Title"
                      className="input input-bordered"
                      required
                      name="title" defaultValue={title}
                    />
                  </div>
  
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Job Thummbnail</span>
                    </label>
                    <input
                      type="url"
                      placeholder="photo url"
                      className="input input-bordered"
                      required
                      name="photo" defaultValue={photo}
                    />
                  </div>
                </div>
  
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Job description</span>
                  </label>
                  <textarea
                    placeholder="write description here....."
                    className="textarea textarea-bordered h-32"
                    name="description" defaultValue={description}
                  ></textarea>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Job Requirement</span>
                  </label>
                  <textarea
                    placeholder="give your requirement here....."
                    className="textarea textarea-bordered h-32"
                    name="requirement" defaultValue={requirement}
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
                      name="category"  defaultValue={category}
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
                    type="date" defaultValue={deadline}
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
                        name="minimum" defaultValue={minimum}
                      />
                    </div>
                    <div className="form-control">
                      <input
                        type="maximum"
                        placeholder="maximum price"
                        className="input input-bordered"
                        required
                        name="maximum" defaultValue={maximum}
                      />
                    </div>
                  </div>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-outline bg-green-900 text-white" >
                    Update this job
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
};

export default UpdateDetailsLayout;