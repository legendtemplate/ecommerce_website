"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars } from "react-icons/fa";
import Container from "../container/page";
export default function page() {
   const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <>
      <div className="bg-gray-100 shadow-lg">
        <Container>
        <div className="flex gap-8 items-center ">
          <div className="w-full">
            <button className="bg-blue-500 text-white px-6 py-3 lg:text-base md:text-xs sm:text-base text-xs w-full flex items-center" onClick={handleOpen}> <span className="mr-3"><FaBars /> </span> All Categeories</button>
            
            {open ? (
        <ul className="menu">
          <li className="menu-item">
            <button>Menu 1</button>
          </li>
          <li className="menu-item">
            <button>Menu 2</button>
          </li>
        </ul>
      ) : null}
          </div>
          <div className="link">
            
              <button className="md:hidden block bg-blue-400 pr-3 pl-3 text-white h-10 w-10"><FaBars /></button>
            <ul className="md:flex gap-6 relative hidden">
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">
                  Blogs{" "}
                  <span className="absolute -top-4 bg-blue-400 p-2 rounded-full text-xs text-white h-6 flex justify-center items-center left-20">
                    New
                  </span>
                </a>
              </li>
              <li>
                <a href="">Contacts</a>
              </li>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Home</a>
              </li>
            </ul>
          </div>
        </div>
      </Container>
        </div>
    </>
  );
}










