import React from "react";

const Banner = () => {
  return (
    <div
      className="hero "
      style={{
        backgroundImage:
          "url(https://img.freepik.com/premium-photo/job-search-icons-blue-background_218381-8576.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-80 "></div>
      <div className="hero-content text-center text-neutral-content py-52">
        <div className="max-w-2xl">
          <h1 className="mb-5 text-5xl font-bold">Welcome to Worky</h1>
          <p className="mb-5">
            Join Our Community where Creativity Meets Technology for Endless
            Possibilities . We are bridging the Gap Between Dreams and
            Accomplishments
          </p>
          <div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-sm rounded-none"
            />
            <button className="btn btn-outline bg-green-600 rounded-none text-white border-0 px-10">Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
