import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="container px-4 text-center">
      <Helmet>
        <title>Worky | Error</title>
      </Helmet>
      <img
        src="https://img.freepik.com/free-vector/404-error-with-landscape-concept-illustration_114360-7898.jpg?size=626&ext=jpg&ga=GA1.1.1880011253.1699315200&semt=ais"
        alt=""
        className="mx-auto"
      />
      <div>
        <Link to="/">
          <button className="btn btn-outline bg-green-600 text-white py-3 px-11">Go to Home</button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
