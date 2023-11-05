import React from "react";
import signup from "../../assets/images/signup.jpeg";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="card flex-shrink-0 w-full ">
    <form className="card-body p-2">
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
    <div className="form-control">
        <label className="label">
          <span className="label-text">Full name</span>
        </label>
        <input
          type="text"
          placeholder="name"
          className="input input-bordered"
          required
          name="name"
        />
       
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Photo URL</span>
        </label>
        <input
          type="url"
          placeholder="url"
          className="input input-bordered"
          required
          name="url"
        />
       
      </div>
    </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input
          type="email"
          placeholder="email"
          className="input input-bordered"
          required
          name="email"
        />
      </div>
      
      <div className="form-control">
        <label className="label">
          <span className="label-text">Password</span>
        </label>
        <input
          type="password"
          placeholder="password"
          className="input input-bordered"
          required
          name="password"
        />
       
      </div>
      <div className="form-control mt-6">
      <button className="btn btn-outline bg-green-600 text-white">Signup</button>
      </div>
    </form>
  </div>
  );
};

export default Signup;
