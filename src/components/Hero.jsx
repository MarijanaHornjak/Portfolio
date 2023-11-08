import React from "react";
import heroImg from "../assets/undraw_ideas_flow_re_bmea.svg";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Hero = () => {
  return (
    <div className="bg-purple-100 py-24 ">
      <div className="align-element grid md:grid-cols-2 items-center gap-8">
        <article>
          <h1 className="text-7xl font-bold tracking-wider  text-slate-800 ">
            Hello there!
          </h1>
          <p className="mt-4 text-3xl text-slate-700 capitalize tracking-wide">
            I am frontend developer.
          </p>
          <p className="mt-2 text-lg  text-slate-700 capitalize tracking-wide">
            Let me introduce myself...
          </p>
          <div className="flex gap-x-4 mt-4">
            <a href="https://github.com/MarijanaHornjak" target="_blank">
              <AiFillGithub className="h-8 w-8 text-purple-500 hover:text-purple-900 duration-300" />
            </a>
            <a
              href="https://www.linkedin.com/in/marijana-hornjak-0215331b0/"
              target="_blank"
            >
              <AiFillLinkedin className="h-8 w-8 text-purple-500 hover:text-purple-900 duration-300" />
            </a>
          </div>
        </article>
        <article className="hidden md:block">
          <img src={heroImg} alt="" className="h-80 lg:h-96" />
        </article>
      </div>
    </div>
  );
};

export default Hero;
