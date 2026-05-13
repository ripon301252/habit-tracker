import React from "react";
import { Link } from "react-router";
import imgLogo1 from "../assets/goalLogo.png";

const Navbar = () => {
  const currentYear = new Date().getFullYear();

  const months = [
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december",
  ];

  return (
    <div className="sticky top-0 z-50 bg-gradient-to-r from-black/80 via-green-500/50 backdrop-blur-md shadow-md">
      <div className="navbar max-w-6xl mx-auto px-4">

        {/* START */}
        <div className="navbar-start">

          {/* Mobile Menu */}
          <div className="dropdown lg:hidden">
            <button tabIndex={0} className="btn btn-ghost">
              ☰
            </button>

            <ul className="menu menu-sm dropdown-content mt-3 w-52 bg-green-900 text-white rounded-box p-3 shadow">
              <li><Link to="/">Home</Link></li>

              <li>
                <details>
                  <summary>Month</summary>
                  <ul className="pl-2">
                    {months.map((m) => (
                      <li key={m}>
                        <Link to={`/month/${currentYear}/${m}`}>
                          {m.charAt(0).toUpperCase() + m.slice(1)}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </details>
              </li>

              <li><Link to="/blogs">Blogs</Link></li>
            </ul>
          </div>

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 font-bold text-xl">
            <img src={imgLogo1} className="w-10" alt="logo" />
            <span className="text-green-400">Habit</span>
            <span className="text-yellow-400">Tracker</span>
          </Link>
        </div>

        {/* CENTER (Desktop) */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-2">

            <li><Link to="/">Home</Link></li>

            <li>
              <details>
                <summary>Month</summary>
                <ul className="bg-green-900 text-white p-3 rounded-lg grid grid-cols-2 gap-1 w-60">
                  {months.map((m) => (
                    <li key={m}>
                      <Link to={`/month/${currentYear}/${m}`}>
                        {m.charAt(0).toUpperCase() + m.slice(1)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </details>
            </li>

            <li><Link to="/blogs">Blogs</Link></li>
          </ul>
        </div>

        {/* END */}
        <div className="navbar-end">
          <button className="btn btn-sm btn-success">
            Start
          </button>
        </div>

      </div>
    </div>
  );
};

export default Navbar;