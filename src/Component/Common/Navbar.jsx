import ProfilePic from "../../assets/images/userpic.jpg";
import logo from "../../assets/images/logo.png";
import { Link, NavLink } from "react-router-dom";
import "../../assets/all css/style.css";

const Navbar = () => {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* left side */}
          <div className="flex justify-center items-center">
            {/* left dropdown */}
            <div className="dropdown block md:hidden">
              <label tabIndex={0} className="btn btn-ghost btn-circle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h7"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-8 z-[1] p-2 shadow bg-base-100 rounded-sm w-52"
              >
                <li className=" group static">
                  <Link
                    to="/"
                    className=" no-underline active:bg-green-600 active:text-white"
                  >
                    <div className="avatar ">
                      <div className="w-12 rounded-full">
                        <img src={ProfilePic} />
                      </div>
                    </div>
                  </Link>
                  <ul className="hidden group-hover:block p-3 static ">
                    <li>
                      <Link
                        to="/"
                        className="no-underline active:bg-green-600 active:text-white"
                      >
                        Add job
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/"
                        className="no-underline active:bg-green-600 active:text-white"
                      >
                        My posted jobs
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/"
                        className="no-underline active:bg-green-600 active:text-white"
                      >
                        My Bids
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/"
                        className="no-underline active:bg-green-600 active:text-white"
                      >
                        Bid Requests
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link
                    to="/"
                    className=" no-underline active:bg-green-600 active:text-white "
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className=" no-underline active:bg-green-600 active:text-white "
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className=" no-underline active:bg-green-600 active:text-white "
                  >
                    Signup
                  </Link>
                </li>
              </ul>
            </div>
            <img src={logo} alt="" className="w-52" />
          </div>

          {/* right dropdown */}
          <div className="relative hidden md:block">
            <ul className="flex items-center gap-2">
              <li>
                <Link
                  to="/"
                  className="no-underline active:bg-green-600 active:text-white px-5 py-2 rounded-md"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="no-underline active:bg-green-600 active:text-white px-5 py-2 rounded-md"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="no-underline active:bg-green-600 active:text-white px-5 py-2 rounded-md"
                >
                  Signup
                </Link>
              </li>
              <li className="dropdown">
                <Link>
                  <summary className="">
                    <div className="avatar ">
                      <div className="w-12 rounded-full">
                        <img src={ProfilePic} />
                      </div>
                    </div>
                  </summary>
                </Link>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 mt-4 left-[-162px] w-52">
                  <li>
                    <Link
                      to="/"
                      className="no-underline active:bg-green-900 block px-5 py-2 rounded-md"
                    >
                      Add job
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className="no-underline active:bg-green-900 block px-5 py-2 rounded-md"
                    >
                      My posted jobs
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className="no-underline active:bg-green-900 block px-5 py-2 rounded-md"
                    >
                      My Bids
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className="no-underline active:bg-green-900 block px-5 py-2 rounded-md"
                    >
                      Bid Requests
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
