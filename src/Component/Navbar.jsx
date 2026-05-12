import React from "react";
import { Link } from "react-router";
// import imgLogo from "../assets/goal.png";
import imgLogo1 from "../assets/goalLogo.png";

const Navbar = () => {
  const currentYear = new Date().getFullYear();
  
  
  return (
    <div className="sticky top-0 z-20 bg-gradient-to-r from-black/80 via-green-500/50 to-transparent shadow-sm">
      <div className="navbar md:px-4">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
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
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-green-900 rounded-box z-1 mt-3 w-52 p-2 shadow -ml-2"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <details>
                  <summary>Month</summary>
                  <ul className="p-2 bg-green-900 w-40 z-1">
                    <li>
                      <Link to={`/month/${currentYear}/january`}>January</Link>
                    </li>
                    <li>
                      <Link to={`/month/${currentYear}/february`}>February</Link>
                    </li>
                    <li>
                      <Link to={`/month/${currentYear}/march`}>March</Link>
                    </li>
                    <li>
                      <Link to={`/month/${currentYear}/april`}>April</Link>
                    </li>
                    <li>
                      <Link to={`/month/${currentYear}/may`}>May</Link>
                    </li>
                    <li>
                      <Link to={`/month/${currentYear}/june`}>June</Link>
                    </li>
                    <li>
                      <Link to={`/month/${currentYear}/july`}>July</Link>
                    </li>
                    <li>
                      <Link to={`/month/${currentYear}/august`}>August</Link>
                    </li>
                    <li>
                      <Link to={`/month/${currentYear}/september`}>September</Link>
                    </li>
                    <li>
                      <Link to={`/month/${currentYear}/october`}>October</Link>
                    </li>
                    <li>
                      <Link to={`/month/${currentYear}/november`}>November</Link>
                    </li>
                    <li>
                      <Link to={`/month/${currentYear}/december`}>December</Link>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <Link to="/blogs">Blogs</Link>
              </li>
            </ul>
          </div>
          <div>
            <Link to="/" className="flex items-center gap-1 font-bold text-xl">
              <img src={imgLogo1} className="w-12" alt="" />
              <span className="text-green-500/50">Habit</span>
              <span className="text-yellow-500/50">Tracker</span>
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <details>
                <summary>Month</summary>
                <ul className="p-2 bg-green-900 w-40 z-1">
                  <li>
                    <Link to={`/month/${currentYear}/january`}>January</Link>
                  </li>
                  <li>
                    <Link to={`/month/${currentYear}/february`}>February</Link>
                  </li>
                  <li>
                    <Link to={`/month/${currentYear}/march`}>March</Link>
                  </li>
                  <li>
                    <Link to={`/month/${currentYear}/april`}>April</Link>
                  </li>
                  <li>
                    <Link to={`/month/${currentYear}/may`}>May</Link>
                  </li>
                  <li>
                    <Link to={`/month/${currentYear}/june`}>June</Link>
                  </li>
                  <li>
                    <Link to={`/month/${currentYear}/july`}>July</Link>
                  </li>
                  <li>
                    <Link to={`/month/${currentYear}/august`}>August</Link>
                  </li>
                  <li>
                    <Link to={`/month/${currentYear}/september`}>September</Link>
                  </li>
                  <li>
                    <Link to={`/month/${currentYear}/october`}>October</Link>
                  </li>
                  <li>
                    <Link to={`/month/${currentYear}/november`}>November</Link>
                  </li>
                  <li>
                    <Link to={`/month/${currentYear}/december`}>December</Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
