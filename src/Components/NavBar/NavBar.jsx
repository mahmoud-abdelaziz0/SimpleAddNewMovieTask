import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div className="nav bg-indigo-900 text-white p-2 ">
        <ul className="flex mx-10 ">
          <li className="p-2 rounded-lg hover:bg-indigo-800 mx-16">
            <Link className="" to="/home">
              Home
            </Link>
          </li>
          <li className="p-2 rounded-lg hover:bg-indigo-800 mx-16">
            <Link className="" to="/addMovie">
              Add New Movie
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavBar;
