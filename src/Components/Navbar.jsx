import React from "react";
import { Link, NavLink } from "react-router";
import useAuth from "../Hooks/useAuth";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const links = (
    <>
      <li>
        <NavLink className="rounded-none" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className="rounded-none" to="/appliedJobs">
          My Applications
        </NavLink>
      </li>

      {/* for job recruitor */}

      <li>
        <NavLink className="rounded-none" to="/myJobPost">
          My Job Post
        </NavLink>
      </li>
      <li>
        <NavLink className="rounded-none" to="/submitJobPost">
          Submit Job Post
        </NavLink>
      </li>
    </>
  );

  const handleClick = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.log(err.code));
  };
  return (
    <div className="shadow-sm bg-base-100">
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl pl-0">GetHire</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end gap-2">
          {user ? (
            <button onClick={handleClick} className="btn btn-primary">
              SignOut
            </button>
          ) : (
            <>
              <Link to="/login" className="btn btn-primary">
                Login
              </Link>
              <Link to="/signup" className="btn btn-outline btn-primary">
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
