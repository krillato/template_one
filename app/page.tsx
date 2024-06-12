"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
//*--------------- image
import Profile from "@/public/assets/TimeProfile.png";
import linkin from "@/public/assets/linkin.png";
import mail from "@/public/assets/mail.png";
import github from "@/public/assets/github.png";
//using
import bootstrap from "@/public/assets/icon/using/bootstrap.png";
import css from "@/public/assets/icon/using/css.png";
import figma from "@/public/assets/icon/using/figma.png";
import git from "@/public/assets/icon/using/git.png";
import html from "@/public/assets/icon/using/html.png";
import js from "@/public/assets/icon/using/js.png";
import react from "@/public/assets/icon/using/react.png";
import sass from "@/public/assets/icon/using/sass.png";
//learning
import mongodb from "@/public/assets/icon/learning/mongodb.png";
import mysql from "@/public/assets/icon/learning/mysql.png";
import node from "@/public/assets/icon/learning/node.png";
import typescript from "@/public/assets/icon/learning/typescript.png";
//skills
import cPash from "@/public/assets/icon/skills/c++.png";
import c from "@/public/assets/icon/skills/c.png";
import eng from "@/public/assets/icon/skills/eng.png";
import spain from "@/public/assets/icon/skills/spain.png";
//portfolio
import backgroud from "@/public/assets/portfolio/backgroud.jpeg";
import aa1 from "@/public/assets/portfolio/aa1.jpg";
import aa2 from "@/public/assets/portfolio/aa2.jpg";
import aa3 from "@/public/assets/portfolio/aa3.jpg";
import aa4 from "@/public/assets/portfolio/aa4.jpeg";
import aa5 from "@/public/assets/portfolio/aa5.jpg";
//footer
import facebook from "@/public/assets/icon/footer/facebook.png";
import gmail from "@/public/assets/icon/footer/gmail.svg";
import ig from "@/public/assets/icon/footer/ig.png";
import linkinICN from "@/public/assets/icon/footer/linkin.png";

export default function Home() {
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);
  const [isAboutMeOpen, setAboutMeOpen] = useState<boolean>(false);
  const contactRef = useRef<HTMLDivElement>(null);
  const aboutMeRef = useRef<HTMLDivElement>(null);
  const skillRef = useRef<HTMLDivElement>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const scrollToSection = (ref: any) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <main className="flex min-h-screen flex-col  ">
      {/* Header & Menu */} {/* Responsive Menu Icon */}
      <button
        onClick={() => setMenuOpen(!isMenuOpen)}
        className="block lg:hidden z-[9999] bg-[#1D1D1D] sticky top-0  text-[17px] "
      >
        {isMenuOpen ? "Close" : "Menu"}
      </button>
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } lg:hidden flex sticky top-6 justify-center z-[9999] bg-[#1D1D1D] items-center flex-col transition-all duration-300`}
      >
        <button
          onClick={() => scrollToSection(aboutMeRef)}
          className="text-[17px] ease-in-out delay-150 w-[147px] hover:-translate-y-1 hover:scale-110 duration-300 h-[50px] transition hover:text-black font-bold hover:bg-white text-center rounded-full"
        >
          About me
        </button>
        <button
          onClick={() => scrollToSection(skillRef)}
          className="text-[17px] ease-in-out delay-150 w-[147px] hover:-translate-y-1 hover:scale-110 duration-300 h-[50px] transition hover:text-black font-bold hover:bg-white text-center rounded-full"
        >
          Skills
        </button>
        <button
          onClick={() => scrollToSection(portfolioRef)}
          className="text-[17px] ease-in-out delay-150 w-[147px] hover:-translate-y-1 hover:scale-110 duration-300 h-[50px] transition hover:text-black font-bold hover:bg-white text-center rounded-full"
        >
          Portfolio
        </button>
        <button
          onClick={() => scrollToSection(contactRef)}
          className="text-[17px] ease-in-out delay-150 w-[147px] hover:-translate-y-1 hover:scale-110 duration-300 h-[50px] transition hover:text-black font-bold hover:bg-white text-center rounded-full"
        >
          CONTACT ME
        </button>
      </div>
      <div
        id="header"
        className=" border-red-700 h-full flex w-full justify-between"
      >
        <div className=" gap-[54px] justify-center items-start pl-7 flex flex-col w-full">
          <div className="">
            <p className="text-black text-[30px] font-bold">Hi, I am</p>
          </div>
          <div className="">
            <p className="text-black text-[50px] font-bold">
              Tammarat Chansamorn
            </p>
            <p className="text-[#909090] text-[15px] font-extrabold">
              Front-end Developer / UI Designer
            </p>
          </div>
          <div className="flex gap-[25px]">
            <Image
              src={mail}
              alt="Profile"
              loading="lazy"
              className="bg-[#C4C4C4] p-2 shadow-lg rounded-lg items-end w-[60px] h-[60px] "
            />
            <Image
              src={github}
              alt="Profile"
              loading="lazy"
              className="bg-[#C4C4C4] p-2 shadow-lg rounded-lg items-end w-[60px] h-[60px] "
            />
            <Image
              src={linkin}
              alt="Profile"
              loading="lazy"
              className="bg-[#C4C4C4] p-2 shadow-lg rounded-lg items-end w-[60px] h-[60px] "
            />
          </div>
        </div>

        <div className="relative hidden lg:flex w-full gap-[30px]  flex-col pt-[65px]">
          <div className="w-full  flex flex-col justify-between px-[65px] items-start">
            {/* Menu Items */}
            <div className={``}>
              <button
                onClick={() => scrollToSection(aboutMeRef)}
                className="text-[17px] ease-in-out delay-150 w-[147px] hover:-translate-y-1 hover:scale-110 duration-300 h-[50px] transition hover:text-black font-bold hover:bg-white text-center rounded-full"
              >
                About me
              </button>
              <button
                onClick={() => scrollToSection(skillRef)}
                className="text-[17px] ease-in-out delay-150 w-[147px] hover:-translate-y-1 hover:scale-110 duration-300 h-[50px] transition hover:text-black font-bold hover:bg-white text-center rounded-full"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection(portfolioRef)}
                className="text-[17px] ease-in-out delay-150 w-[147px] hover:-translate-y-1 hover:scale-110 duration-300 h-[50px] transition hover:text-black font-bold hover:bg-white text-center rounded-full"
              >
                Portfolio
              </button>
              <button
                onClick={() => scrollToSection(contactRef)}
                className="text-[17px] ease-in-out delay-150 w-[147px] hover:-translate-y-1 hover:scale-110 duration-300 h-[50px] transition hover:text-black font-bold hover:bg-white text-center rounded-full"
              >
                CONTACT ME
              </button>
            </div>
            {/* End Menu Items */}
          </div>

          {/* Image */}
          <Image
            src={Profile}
            alt="Profile"
            loading="lazy"
            className="hidden md:block z-[20] w-full h-[100vh] bg-cover object-cover"
          />
        </div>
      </div>
      {/* Profile  */}
      <div
        className={` ${
          isAboutMeOpen ? " h-auto " : "  h-[313px] "
        } bg-[#1D1D1D] z-[25]   flex flex-col py-[54px] px-10 lg:px-[102px] gap-[30px]`}
      >
        <div className="text-[30px] font-bold">IT BERRIES</div>
        <div
          className={`text-[15px] font-normal  ${
            isAboutMeOpen ? " h-auto " : "  truncate "
          }`}
        >
          Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem
          varius finibus. Sed ornare sit amet lorem sed viverra. In vel urna
          quis libero viverra facilisis ut ac est. Morbi commodo, eros in
          dignissim tempus, lacus odio rutrum augue, in semper sem magna quis
          tellus. Etiam enim erat, suscipit eu semper a, dictum sit amet elit.
          Nunc egestas nisi eget enim gravida facilisis. Pellentesque laoreet
          varius turpis vel pharetra. Ut ante justo, consequat vitae elementum
          tempor, accumsan nec eros.
        </div>

        <button
          onClick={() => {
            setAboutMeOpen(!isAboutMeOpen);
          }}
          className="border-x-4 w-[150px]  text-[15px] font-semibold flex justify-center"
        >
          {isAboutMeOpen ? "LESS" : "READ MORE"}
        </button>
      </div>
      {/* About me */}
      <div
        ref={aboutMeRef}
        className=" p-10 lg:p-[140px] text-[#050505] flex justify-center w-full items-center flex-col gap-[60px]"
      >
        <div className="text-[30px] font-bold  w-[250px] text-center p-[10px] border-black border-[5px] ">
          ABOUT ME
        </div>
        <div className="text-center">
          Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem
          varius finibus. Sed ornare sit amet lorem sed viverra. <br /> In vel
          urna quis libero viverra facilisis ut ac est.
        </div>

        <div className="border-x-4 w-[150px] border-[#050505] text-[15px] font-semibold flex justify-center">
          EXPLORE
        </div>

        <div className="flex w-full justify-between">
          <div className="hover:bg-[#fffffff2] w-full p-4  bg-repeat hover:scale-110  transition duration-300 ease-in-out cursor-pointer rounded-lg">
            <div className="text-[22px] font-bold">DESIGN</div>
            <p className="text-[14px] font-light">
              I can design the site based on your needs and suggestions. I can
              also design the site from scratch and consult you during the job.
            </p>
          </div>
          <div className="hover:bg-[#fffffff2] w-full p-4  bg-repeat hover:scale-110  transition duration-300 ease-in-out cursor-pointer rounded-lg">
            <div className="text-[22px] font-bold">DEVELOPMENT</div>
            <p className="text-[14px] font-light">
              I can design the site based on your needs and suggestions. I can
              also design the site from scratch and consult you during the job.
            </p>
          </div>
        </div>
        <div className="hover:bg-[#fffffff2] w-full p-4  bg-repeat hover:scale-110  transition duration-300 ease-in-out cursor-pointer rounded-lg">
          <div className="text-[22px] font-bold">MAINTENANCE</div>
          <p className="text-[14px] font-light">
            I can design the site based on your needs and suggestions. I can
            also design the site from scratch and consult you during the job.
          </p>
        </div>
        <div className="border-t-2 border-[#050505] border-dotted w-full"></div>

        {/* Skill */}
        <div
          ref={skillRef}
          className="p-1 lg:p-[140px] text-[#050505] flex justify-center w-full items-center flex-col gap-[60px]"
        >
          <div className="text-[30px] font-bold  w-[250px] text-center p-[10px] border-black border-[5px] ">
            SKILLS
          </div>
          <div className=" w-full flex flex-col  gap-[40px]">
            <span className="text-start items-start text-[24px] font-normal">
              USING NOW :
            </span>
            <div className="grid-cols-3 lg:grid-cols-5 grid gap-5 lg:gap-[40px] w-full ">
              <div>
                <Image
                  src={html}
                  alt="Profile"
                  loading="lazy"
                  className="bg-[#C4C4C4] hover:-translate-y-1 hover:scale-110  duration-300 transition  hover:text-black font-bold hover:bg-white p-2 shadow-lg rounded-lg items-end w-[60px] h-[60px] "
                />
              </div>
              <div>
                <Image
                  src={css}
                  alt="Profile"
                  loading="lazy"
                  className="bg-[#C4C4C4] hover:-translate-y-1 hover:scale-110  duration-300 transition  hover:text-black font-bold hover:bg-white p-2 shadow-lg rounded-lg items-end w-[60px] h-[60px] "
                />
              </div>
              <div>
                <Image
                  src={sass}
                  alt="Profile"
                  loading="lazy"
                  className="bg-[#C4C4C4] hover:-translate-y-1 hover:scale-110  duration-300 transition  hover:text-black font-bold hover:bg-white p-2 shadow-lg rounded-lg items-end w-[60px] h-[60px] "
                />
              </div>
              <div>
                <Image
                  src={js}
                  alt="Profile"
                  loading="lazy"
                  className="bg-[#C4C4C4] hover:-translate-y-1 hover:scale-110  duration-300 transition  hover:text-black font-bold hover:bg-white p-2 shadow-lg rounded-lg items-end w-[60px] h-[60px] "
                />
              </div>
              <div>
                <Image
                  src={react}
                  alt="Profile"
                  loading="lazy"
                  className="bg-[#C4C4C4] hover:-translate-y-1 hover:scale-110  duration-300 transition  hover:text-black font-bold hover:bg-white p-2 shadow-lg rounded-lg items-end w-[60px] h-[60px] "
                />
              </div>
              <div>
                <Image
                  src={bootstrap}
                  alt="Profile"
                  loading="lazy"
                  className="bg-[#C4C4C4] hover:-translate-y-1 hover:scale-110  duration-300 transition  hover:text-black font-bold hover:bg-white p-2 shadow-lg rounded-lg items-end w-[60px] h-[60px] "
                />
              </div>
              <div>
                <Image
                  src={git}
                  alt="Profile"
                  loading="lazy"
                  className="bg-[#C4C4C4] hover:-translate-y-1 hover:scale-110  duration-300 transition  hover:text-black font-bold hover:bg-white p-2 shadow-lg rounded-lg items-end w-[60px] h-[60px] "
                />
              </div>
              <div>
                <Image
                  src={figma}
                  alt="Profile"
                  loading="lazy"
                  className="bg-[#C4C4C4] hover:-translate-y-1 hover:scale-110  duration-300 transition  hover:text-black font-bold hover:bg-white p-2 shadow-lg rounded-lg items-end w-[60px] h-[60px] "
                />
              </div>
            </div>
            <span className="text-start items-start text-[24px] font-normal">
              LEARNING: :
            </span>
            <div className="grid-cols-3 lg:grid-cols-5 grid gap-5 lg:gap-[40px] w-full ">
              <div>
                <Image
                  src={node}
                  alt="Profile"
                  loading="lazy"
                  className="bg-[#C4C4C4] hover:-translate-y-1 hover:scale-110  duration-300 transition  hover:text-black font-bold hover:bg-white p-2 shadow-lg rounded-lg items-end w-[60px] h-[60px] "
                />
              </div>
              <div>
                <Image
                  src={mongodb}
                  alt="Profile"
                  loading="lazy"
                  className="bg-[#C4C4C4] hover:-translate-y-1 hover:scale-110  duration-300 transition  hover:text-black font-bold hover:bg-white p-2 shadow-lg rounded-lg items-end w-[60px] h-[60px] "
                />
              </div>
              <div>
                <Image
                  src={mysql}
                  alt="Profile"
                  loading="lazy"
                  className="bg-[#C4C4C4] hover:-translate-y-1 hover:scale-110  duration-300 transition  hover:text-black font-bold hover:bg-white p-2 shadow-lg rounded-lg items-end w-[60px] h-[60px] "
                />
              </div>

              <div>
                <Image
                  src={typescript}
                  alt="Profile"
                  loading="lazy"
                  className="bg-[#C4C4C4] hover:-translate-y-1 hover:scale-110  duration-300 transition  hover:text-black font-bold hover:bg-white p-2 shadow-lg rounded-lg items-end w-[60px] h-[60px] "
                />
              </div>
            </div>
            <span className="text-start items-start text-[24px] font-normal">
              OTHER SKILLS:
            </span>
            <div className="grid-cols-3 lg:grid-cols-5 grid gap-5 lg:gap-[40px] w-full ">
              <div>
                <Image
                  src={eng}
                  alt="Profile"
                  loading="lazy"
                  className="bg-[#C4C4C4] hover:-translate-y-1 hover:scale-110  duration-300 transition  hover:text-black font-bold hover:bg-white p-2 shadow-lg rounded-lg items-end w-[60px] h-[60px] "
                />
              </div>
              <div>
                <Image
                  src={spain}
                  alt="Profile"
                  loading="lazy"
                  className="bg-[#C4C4C4] hover:-translate-y-1 hover:scale-110  duration-300 transition  hover:text-black font-bold hover:bg-white p-2 shadow-lg rounded-lg items-end w-[60px] h-[60px] "
                />
              </div>
              <div>
                <Image
                  src={cPash}
                  alt="Profile"
                  loading="lazy"
                  className="bg-[#C4C4C4] hover:-translate-y-1 hover:scale-110  duration-300 transition  hover:text-black font-bold hover:bg-white p-2 shadow-lg rounded-lg items-end w-[60px] h-[60px] "
                />
              </div>
              <div>
                <Image
                  src={c}
                  alt="Profile"
                  loading="lazy"
                  className="bg-[#C4C4C4] hover:-translate-y-1 hover:scale-110  duration-300 transition  hover:text-black font-bold hover:bg-white p-2 shadow-lg rounded-lg items-end w-[60px] h-[60px] "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* PORTFOLIO */}
      <div
        ref={portfolioRef}
        className="w-full h-auto shadow-lg items-center  flex flex-col  gap-5 justify-center relative"
      >
        <Image
          src={backgroud}
          alt="Profile"
          loading="lazy"
          className="absolute shadow-lg  h-full "
        />
        <div className="text-[30px] text-black mt-10 font-bold relative w-[250px] text-center p-[10px] border-black border-[5px] ">
          PORTFOLIO
        </div>
        <div className="bg-[#1A1A1A] w-full h-auto  relative">
          <div className="flex  justify-center p-14">
            <div className="w-[200px] hover:scale-110  duration-300 transition  cursor-pointer  border-[#ffffff] border-b-2 text-center">
              ALL
            </div>
            <div className="w-[200px] hover:scale-110  duration-300 transition  cursor-pointer hover:border-[#ffffff]  border-[#ffffff84]  border-b-2 text-center">
              CODED
            </div>
            <div className="w-[200px] hover:scale-110  duration-300 transition  cursor-pointer hover:border-[#ffffff] border-[#ffffff84]  border-b-2 text-center">
              DESIGNED
            </div>
          </div>
          <div className="w-full grid grid-cols-3">
            <Image
              src={aa1}
              alt="Profile"
              loading="lazy"
              className=" shadow-lg object-cover h-[350px] "
            />{" "}
            <Image
              src={aa2}
              alt="Profile"
              loading="lazy"
              className=" shadow-lg h-[350px] object-cover "
            />{" "}
            <Image
              src={aa3}
              alt="Profile"
              loading="lazy"
              className=" shadow-lg  h-[350px] object-cover "
            />{" "}
            <Image
              src={aa4}
              alt="Profile"
              loading="lazy"
              className=" shadow-lg h-[350px] object-cover "
            />{" "}
            <Image
              src={aa5}
              alt="Profile"
              loading="lazy"
              className=" shadow-lg  object-cover h-[350px]"
            />{" "}
            <Image
              src={backgroud}
              alt="Profile"
              loading="lazy"
              className=" shadow-lg object-cover h-[350px] "
            />
          </div>
          <div className="text-center p-5">And many more to come!</div>
        </div>
      </div>
      {/* CONTACT */}
      <div
        ref={contactRef}
        className="text-black items-center p-5 flex flex-col gap-[25px] justify-center"
      >
        <div className="text-[30px] mt-10 font-bold relative w-[350px] text-center p-[10px] border-black border-[5px] ">
          CONTACT
        </div>
        <div className="line-clamp-2 text-center">
          Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem
          varius finibus. Sed ornare sit amet lorem <br /> sed viverra. In vel
          urna quis libero viverra facilisis ut ac est.
        </div>
        <div className="border-b border-[#000000] w-[20%] border-dashed"></div>
        <div className="gap-[50px] px-10  flex flex-col w-full lg:w-1/2">
          <input
            type="text"
            placeholder="ENTER YOUR NAME*"
            className="hover:scale-110 focus:scale-110  outline-none duration-300 transition w-full h-[50px] p-2 bg-[#D7D7D7] hover:border-b-4 hover:border-l-4 focus:border-b-4 focus:border-l-4  border-l-2 border-b-2  border-black"
          />
          <input
            type="text"
            placeholder="ENTER YOUR EMAIL*"
            className="hover:scale-110 focus:scale-110  outline-none duration-300 transition w-full h-[50px] p-2 bg-[#D7D7D7] hover:border-b-4 hover:border-l-4 focus:border-b-4 focus:border-l-4  border-l-2 border-b-2  border-black"
          />
          <input
            type="text"
            placeholder="PHONE NUMBER"
            className="hover:scale-110 focus:scale-110  outline-none duration-300 transition w-full h-[50px] p-2 bg-[#D7D7D7] hover:border-b-4 hover:border-l-4 focus:border-b-4 focus:border-l-4  border-l-2 border-b-2  border-black"
          />
          <input
            type="text"
            placeholder="YOUR MESSAGE*"
            className="hover:scale-110 focus:scale-110  outline-none duration-300 transition w-full h-[50px] p-2 bg-[#D7D7D7] hover:border-b-4 hover:border-l-4 focus:border-b-4 focus:border-l-4  border-l-2 border-b-2  border-black"
          />
        </div>
        <div className="border-l-2 duration-700 hover:text-[30px] transition shadow-lg hover:bg-[#ffffff] cursor-pointer border-black text-center flex justify-center items-center border-r-2 px-10 h-[50px]">
          SUBMIT
        </div>
      </div>
      {/* Footer */}
      <button
        onClick={handleScrollToTop}
        className="bg-[#1A1A1A] h-auto   hover:bg-[#D397F8] hover:-translate-y-5 w-full duration-700  cursor-pointer shadow-2xl rounded-tl-3xl rounded-tr-3xl lg:rounded-tl-full lg:rounded-tr-full  flex flex-col justify-center items-center p-5 relative"
      >
        <span className="text-[18px] font-semibold">BACK TO TOP</span>
        <div className="flex justify-center gap-[50px] mt-[50px]">
          <Image
            src={facebook}
            alt="Profile"
            loading="lazy"
            className=" shadow-lg h-[40px] w-[40px] hover:bg-gray-700 cursor-pointer active:bg-gray-900 "
          />
          <Image
            src={linkinICN}
            alt="Profile"
            loading="lazy"
            className=" shadow-lg h-[40px] w-[40px] hover:bg-gray-700 cursor-pointer active:bg-gray-900 "
          />
          <Image
            src={ig}
            alt="Profile"
            loading="lazy"
            className=" shadow-lg h-[40px] w-[40px] hover:bg-gray-700 cursor-pointer active:bg-gray-900 "
          />
          <Image
            src={gmail}
            alt="Profile"
            loading="lazy"
            className=" shadow-lg h-[40px] w-[40px] hover:bg-gray-700 cursor-pointer active:bg-gray-900 "
          />
        </div>
        <div className="mt-[30px] text-[18px] font-normal">
          @2020 Tomasz Gajda All Rights Reserved.
        </div>
      </button>
    </main>
  );
}
