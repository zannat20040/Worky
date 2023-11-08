import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const SignupLayout = ({ HandleSignup, HandleGoogleSignin }) => {
  return (
    <div className="card flex-shrink-0 w-full ">
      <Helmet>
        <title>Worky | Sign up</title>
      </Helmet>
      <form className="card-body p-2" onSubmit={HandleSignup}>
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
          <button className="btn btn-outline bg-green-900 text-white">
            Signup
          </button>
        </div>
      </form>
      <div className="flex gap-4 justify-center px-2 mt-4">
        <p>Already have and account? </p>
        <Link
          to="/authentication/login"
          className="text-green-700 font-medium  "
        >
          Login
        </Link>
      </div>
      <div className="flex gap-4 justify-center items-center px-2 mt-4">
        <p>Or, Create account with</p>
        <button className="w-10 h-10flex justify-center items-center text-lg text-white rounded-[50%]" onClick={HandleGoogleSignin}>
          <img src='https://static-00.iconduck.com/assets.00/google-icon-2048x2048-czn3g8x8.png' alt="" className='avater rounded-full'/>
        </button>
      </div>
    </div>
  );
};

export default SignupLayout;
