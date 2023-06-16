"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars } from "react-icons/fa";
import Container from "../container/page";
import { Fade, ScaleFade, Slide, SlideFade, Collapse } from '@chakra-ui/react'

export default function page() {

   const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    
    <>
      <div className="bg-gray-100 shadow-lg">
        <Container>
        <div className="flex gap-8 items-center relative">
          <div className="relative">
            <button className="bg-blue-500 relative text-white transition-all duration-[2s] px-6 py-3 lg:text-base md:text-xs sm:text-base text-xs w-full flex items-center" onClick={handleOpen}> <span className="mr-3"><FaBars /> </span> All Categeories</button>
            
            {open ? (
        <ul className="menu absolute transition-all md:top-12 top-10 left-0 right-0 duration-[2s]">
          <li className="menu-item bg-red-500 py-2 px-5 w-full transition-all duration-[2s]">
            <a href='w-full '>Menu 1</a>
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










