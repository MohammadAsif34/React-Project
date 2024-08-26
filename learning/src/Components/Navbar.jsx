import React from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {
  const navItem = [
    { name: "dashboard", href: "" },
    { name: "project", href: "" },
    { name: "team", href: "" },
    { name: "service", href: "" },
    { name: "footer", href: "/#footers" },
  ];
  return (
    <div className=" ablsolute ">
      <div className={`bg-${props.mode} p-4 sticky flex items-center `}>
        <div className="px-4 py-2 mx-3 text-3xl text-white font-semibold uppercase first-letter:text-teal-950 first-letter:text-4xl font-serif">
          {props.title}
        </div>
        <div className=" container  p-2">
          {/* nav item  */}
          {navItem.map((item, index) => (
            <a
              key={index}
              className="px-4 py-1 mx-2 text-lg text-white bg-teal-600 rounded-lg cursor-pointer border"
            >
              <span className=" capitalize">{item.name}</span>
            </a>
          ))}
        </div>
        <div className="toggle">
          <label class="inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              value=""
              className="sr-only peer outline-none"
              onClick={props.toggleMode}
            />
            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none dark:peer-focus:ring--800 rounded-full peer dark:bg-teal-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-teal-900"></div>
            <span className="ms-3 text-sm font-medium text-teal-700 dark:text-gray-300">
              {props.mode}
            </span>
          </label>
        </div>
      </div>
    </div>
  );
}
