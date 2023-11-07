import React from "react";
import { links } from "../data";

const Navbar = () => {
  return (
    <nav className="bg-purple-200">
      <div className="mx-auto max-w-7xl px-8 py-4 flex flex-col sm:flex-row sm:gap-x-16 sm:items-center sm:py-8 justify-between">
        <h2 className="text-3xl font-bold text-purple-50">
          Marijana<span className="text-purple-400">Hornjak</span>
        </h2>
        <div className="flex gap-x-3">
          {links.map((item) => {
            const { id, href, text } = item;
            return (
              <a
                href={href}
                key={id}
                className="capitalize font-semibold text-lg tracking-wide text-purple-500 hover:text-purple-900 duration-500"
              >
                {text}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
