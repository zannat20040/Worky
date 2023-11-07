import ProfilePic from "../../assets/images/userpic.jpg";
import logo from "../../assets/images/logo.png";
import "../../assets/all css/style.css";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import swal from "sweetalert";

const Navbar = () => {
  const { user, passwordSignOut, setuser } = useContext(AuthContext);

  const HandleLogout = () => {
    passwordSignOut()
      .then(() => {
        swal("Good job!", "Logged out successfully!", "success");
      })
      .catch((error) => {
        swal("Opps!", error, "error");
      });
  };

  return (
    <div className="bg-gray-100 sticky top-0 z-20">
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
                  <div className="avatar">
                    <div className="w-12 rounded-full">
                      {user ? (
                        <img src={user.photoURL} />
                      ) : (
                        <img src={ProfilePic} />
                      )}
                    </div>
                  </div>
                  <ul className="hidden group-hover:block p-3 static ">
                    <li>
                      <NavLink
                        to="/addjobs"
                        className="no-underline rounded-md py-2"
                      >
                        Add job
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/postedjobs" className="no-underline rounded-md py-2">
                        My posted jobs
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/mybids" className="no-underline rounded-md py-2 ">
                        My Bids
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/bidrequest" className="no-underline rounded-md py-2 ">
                        Bid Requests
                      </NavLink>
                    </li>
                  </ul>
                </li>
                {user && (
                  <li>
                    <p>{user.displayName}</p>
                  </li>
                )}
                <li>
                  <NavLink to="/" className=" no-underline rounded-md py-2  ">
                    Home
                  </NavLink>
                </li>
                <li>
                  {user ? (
                    <NavLink
                      onClick={HandleLogout}
                      to="/authentication/login"
                      className=" no-underline rounded-md py-2 "
                    >
                      Logout
                    </NavLink>
                  ) : (
                    <NavLink
                      to="/authentication/login"
                      className=" no-underline rounded-md py-2 "
                    >
                      Login
                    </NavLink>
                  )}
                </li>
                {!user && (
                  <li>
                    <NavLink
                      to="/authentication/signup"
                      className=" no-underline rounded-md py-2  "
                    >
                      Signup
                    </NavLink>
                  </li>
                )}
              </ul>
            </div>
            <img src={logo} alt="" className="w-52" />
          </div>

          {/* right dropdown */}
          <div className="relative hidden md:block">
            <ul className="flex items-center gap-2">
              <li>
                <NavLink to="/" className="no-underline px-5 py-2 rounded-md">
                  Home
                </NavLink>
              </li>
              <li>
                {user ? (
                  <NavLink
                    onClick={HandleLogout}
                    to="/authentication/login"
                    className="no-underline px-5 py-2 rounded-md"
                  >
                    Logout
                  </NavLink>
                ) : (
                  <NavLink
                    to="/authentication/login"
                    className="no-underline px-5 py-2 rounded-md"
                  >
                    Login
                  </NavLink>
                )}
              </li>
              <li>
                {user ? (
                  <p>{user.displayName}</p>
                ) : (
                  <NavLink
                    to="/authentication/signup"
                    className="no-underline  px-5 py-2 rounded-md"
                  >
                    Signup
                  </NavLink>
                )}
              </li>
              <li className="dropdown">
                <NavLink>
                  <summary className="">
                    <div className="avatar ">
                      <div className="w-12 rounded-full">
                        {user ? (
                          <img src={user.photoURL} />
                        ) : (
                          <img src={ProfilePic} />
                        )}
                      </div>
                    </div>
                  </summary>
                </NavLink>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 mt-4 left-[-162px] w-52">
                  <li>
                    <NavLink
                      to="/addjobs"
                      className="no-underline  block px-5 py-2 rounded-md"
                    >
                      Add job
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/postedjobs"
                      className="no-underline  block px-5 py-2 rounded-md"
                    >
                      My posted jobs
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/mybids"
                      className="no-underline  block px-5 py-2 rounded-md"
                    >
                      My Bids
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/bidrequest"
                      className="no-underline block px-5 py-2 rounded-md"
                    >
                      Bid Requests
                    </NavLink>
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
