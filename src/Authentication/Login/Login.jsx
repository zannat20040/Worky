import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Login = () => {

    const {hello} =useContext(AuthContext)
    return (
        <div className="card flex-shrink-0 w-full ">
    <form className="card-body">
    
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
      <button className="btn btn-outline bg-green-600 text-white">Login</button>
      </div>
    </form>
  </div>
    );
};

export default Login;