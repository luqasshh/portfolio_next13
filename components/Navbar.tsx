"use client";

import { useTheme } from "next-themes";
import React, { useState } from "react";
import { RiMoonFill, RiSunLine } from "react-icons/ri";

interface NavItem {
  label: string;
  page: string;
}

const NAV_ITEMS: Array<NavItem> = [
  { label: "Home", page: "home" },
  { label: "About", page: "about" },
  { label: "Projects", page: "projects" },
];

export const Navbar = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const [navbar, setNavBar] = useState(false);

  return (
    <header className="w-full mx-auto px-4 bg-white shadow fixed top-0 z-50 dark:bg-stone-900 dark:border-b dark:border-stone-600">
      <div className="justify-between md:items-center md:flex">
        <div>
          <div className="md:py-5 md:block">
            <h2 className="text-2xl font-bold">Łukasz Matuszkiewicz</h2>
          </div>
        </div>
        <div className="md:flex md:space-x-6">
          {NAV_ITEMS.map((item, id) => {
            return <a key={id}>{item.label}</a>;
          })}
          {currentTheme === "dark" ? (
            <button
              className="bg-slate-100 p-2 rounded-xl"
              onClick={() => setTheme("light")}
            >
              <RiSunLine />
            </button>
          ) : (
            <button
              className="bg-slate-100 p-2 rounded-xl"
              onClick={() => setTheme("dark")}
            >
              <RiMoonFill />
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
