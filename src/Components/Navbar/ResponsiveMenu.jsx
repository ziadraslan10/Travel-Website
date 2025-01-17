/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { NavbarLinks , DropdownLinks } from "./Navbar";
import { FaCaretDown } from "react-icons/fa";
import "./Navbar.css"

const ResponsiveMenu = ({ setShowMenu, showMenu }) => {
  // console.log("showMenu", showMenu);
  return (
    <div
      className={`${
        showMenu ? "left-0" : "-left-[100%]"
      } fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col justify-between bg-white dark:bg-gray-900 dark:text-white px-8 pb-6 pt-16 text-black transition-all duration-200 md:hidden rounded-r-xl shadow-md `}
    >
      <div className="card">
        <div className="flex items-center justify-start gap-3">
          <FaUserCircle size={50} />
          <div>
            <h1>Hello User</h1>
            <h1 className="text-sm text-slate-500">Premium user</h1>
          </div>
        </div>
        <nav className="mt-12">
          <ul className="space-y-4 text-xl ">
            {NavbarLinks.map((data) => (
              <li key={data.id} >
                <NavLink
                  to={data.link}
                  onClick={() => {setShowMenu(false); window.scrollTo(0, 0)}}
                  className="mb-5 inline-block p-2 rounded-lg hover:bg-bg-gradient-to-r hover:from-primary hover:bg-secondary transition-all"
                >
                  {data.name}
                </NavLink>
              </li>
            ))}

            {/* ============================== */}
            <li className="group relative cursor-pointer">
              <a
                href="/#home"
                className="flex h-[72px] items-center gap-[2px]"
              >
                Quick Links{" "}
                <span>
                  <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                </span>
              </a>
              <div className="absolute -left-9 z-[9999] hidden w-[150px] rounded-md bg-white p-2 text-black group-hover:block shadow-md ">
                <ul className="space-y-3">
                  {DropdownLinks.map((data) => (
                    <li key={data.name}>
                      <a
                        className="inline-block w-full rounded-md p-2 hover:bg-primary/20"
                        href={data.link}
                      >
                        {data.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </li>

              {/* ========================================== */}
          </ul>
        </nav>
      </div>
      <div className="footer">
        <h1>
          Made with ❤ by <a href=""><span className="text-cyan-300">Ziad Raslan</span></a>{" "}
        </h1>
      </div>
    </div>
  );
};

export default ResponsiveMenu;
