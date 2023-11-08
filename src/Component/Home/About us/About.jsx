import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="bg-green-50">
      <div className="container mx-auto py-6  px-4 pb-20 ">
        <div className="card lg:card-side ">
          <div className="card-body  lg:w-4/5 text-center lg:text-start">
            <h2 className="card-title text-4xl font-bold  py-7 justify-center lg:justify-start">
              About <span className="text-green-700">Worky</span>
            </h2>
            <p className="text-gray-500 text-base">
              Welcome to Worky, where we connect talent with opportunity,
              helping individuals find their dream careers and employers
              discover their ideal candidates. We understand that the world of
              work is evolving, and our mission is to empower people with the
              tools and resources they need to thrive in this dynamic landscape.
            </p>
            <p className="text-gray-500 text-base">
              At Worky, we are driven by a passion for fostering career growth
              and supporting the success of businesses. Our platform is designed
              to make the job search and hiring processes as seamless and
              efficient as possible. Whether you're a job seeker looking to take
              the next step in your career or an employer seeking top-tier
              talent, we're here to assist you every step of the way.
            </p>
            <div className="card-actions mt-5 justify-center lg:justify-start">
              <Link to='/error'>
                <button className="btn btn-outline bg-green-600 rounded-none text-white border-0 px-10">
                  Hire Employee
                </button>
              </Link >
              <Link to='/error'>
                <button className="btn btn-outline bg-green-600 rounded-none text-white border-0 px-10">
                  Get Job
                </button>
              </Link>
            </div>
          </div>
          <figure className="">
            <img
              className="rounded-2xl"
              src="https://disabilityinsider.com/wp-content/uploads/2022/02/close-up-hand-with-laptop-838x525.jpg"
              alt="Album"
            />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default About;
