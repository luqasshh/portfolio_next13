"use client";
import React from "react";
import Image from "next/image";
import { Link } from "react-scroll";
import { HiArrowDown } from "react-icons/hi";

export const HeroSection = () => {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center my-16 py-16 sm:py-32 md:flex-row md:space-x-4 md:text-left md:py-52">
        <div className="md:w-1/2 md:mt-2">
          <Image
            className="rounded shadow-2xl"
            src="/profile.png"
            alt=""
            width={300}
            height={300}
          />
        </div>
        <div className="md:mt-2 md:w-3/5">
          <h1 className="font-bold text-4xl mt-6 md:text-7xl md:mt-0">
            Hi, I'm Łukasz!
          </h1>
          <p className="text-lg mt-4 mb-6 md:text-2xl">
            I'm a Frontend Developer based in Wrocław, Poland. I have worked as
            a Business Intelligence Developer in the past. Now creating web apps
            that make sense.
          </p>
          {/* <p className="text-lg mt-4 mb-6">
            Check out my projects to see what I can do or Contact me directly to
            figure out what we can do together
          </p> */}
          <Link
            to="projects"
            className="text-neutral-100 font-semibold px-6 py-3 bg-slate-600 rounded shadow hover:bg-slate-400 "
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Projects
          </Link>
        </div>
      </div>
      <div className="flex flex-row justify-center">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce" />
        </Link>
      </div>
    </section>
  );
};
